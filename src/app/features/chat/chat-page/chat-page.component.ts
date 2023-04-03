import { catchError, map, switchMap, of } from 'rxjs';
import environment from '@chat/environment';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ChatClientService, ChannelService, StreamI18nService } from 'stream-chat-angular';
import { AuthService } from '@chat/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatPageComponent implements OnInit, OnDestroy {

  public chatIsReady$!: Observable<boolean>;

  constructor(
    private readonly _chatService: ChatClientService,
    private readonly _channelService: ChannelService,
    private readonly _streamI18nService: StreamI18nService,
    private readonly _auth: AuthService
  ) { }

  ngOnInit(): void {
    this._streamI18nService.setTranslation();
    this.chatIsReady$ = this._auth.getUserToken().pipe(
      switchMap(token => this._chatService.init(
        environment.streamApp.key,
        this._auth.currentUser.uid,
        token
      )),
      switchMap(() => this._channelService.init({
        type: 'messaging',
        members: { $in: [this._auth.currentUser.uid] }
      })),
      map(() => true),
      catchError(() => of(false))
    );
    this._channelService.channels$.subscribe(channels => console.log(channels));
  }

  async ngOnDestroy() {
    this._channelService.reset();
    await this._chatService.disconnectUser();
  }

}

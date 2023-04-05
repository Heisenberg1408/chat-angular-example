import { catchError, map, switchMap, of } from 'rxjs';
import environment from '@chat/environment';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ChatClientService, ChannelService, StreamI18nService, StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';
import { AuthService, fadeInOut } from '@chat/shared';
import { Observable } from 'rxjs';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { AsyncPipe, NgIf } from '@angular/common';
import { MenubarComponent } from '../../menubar/menubar.component';
import { TooltipModule } from 'primeng/tooltip';
import { ChannelListComponent } from '../channel-list/channel-list.component';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    DynamicDialogModule,
    StreamChatModule,
    StreamAutocompleteTextareaModule,
    ProgressSpinnerModule,
    TooltipModule,
    MenubarComponent,
    ChannelListComponent
  ],
  animations: [
    fadeInOut
  ],
  providers: [
    DialogService
  ],
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
  }

  async ngOnDestroy() {
    this._channelService.reset();
    await this._chatService.disconnectUser();
  }

}

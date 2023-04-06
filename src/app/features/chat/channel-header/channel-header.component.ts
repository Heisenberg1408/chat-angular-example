import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ChannelActionsContext, ChannelService, CustomTemplatesService, DefaultStreamChatGenerics, NotificationService, StreamChatModule } from 'stream-chat-angular';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DialogService } from 'primeng/dynamicdialog';
import { InviteUsersComponent } from '../invite-users/invite-users.component';
import { Channel, UserResponse } from 'stream-chat';

@Component({
  selector: 'app-channel-header',
  standalone: true,
  imports: [
    StreamChatModule,
    ButtonModule,
    TooltipModule
  ],
  templateUrl: './channel-header.component.html',
  styleUrls: ['./channel-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelHeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('channelActionsTemplate') public channelActionsTemplate!: TemplateRef<ChannelActionsContext>;

  constructor(
    private readonly _dialog: DialogService,
    private readonly _customTemplatesService: CustomTemplatesService,
    private readonly _notify: NotificationService,
    private readonly _channelService: ChannelService,
    private readonly _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._channelService.activeChannel$.subscribe(() => this._cdr.detectChanges());
  }

  ngAfterViewInit(): void {
    this._customTemplatesService.channelActionsTemplate$.next(this.channelActionsTemplate);
  }

  public openInviteUsersModal(channel: Channel) {
    const ref = this._dialog.open(InviteUsersComponent, {
      width: '400px',
      header: 'Invite users'
    });
    ref.onClose.subscribe((users: UserResponse<DefaultStreamChatGenerics>[]) => {
      if (!users || !users.length) {
        return;
      }
      channel.inviteMembers(users.map(u => u.id))
      .then(u => {
        this._notify.addTemporaryNotification('User(s) successfully invited', 'success');
      })
      .catch(err => {
        this._notify.addTemporaryNotification(
          `User(s) couldn't be invited`,
          'error'
        );
      })
      .finally(() => this._cdr.detectChanges());
    });
  }
}

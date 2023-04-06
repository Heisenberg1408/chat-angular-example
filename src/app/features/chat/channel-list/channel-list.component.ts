import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { StreamChatModule, ChatClientService, NotificationService } from 'stream-chat-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateChannelComponent } from '../create-channel/create-channel.component';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthService } from '@chat/shared';

@Component({
  selector: 'app-channel-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    TooltipModule,
    StreamChatModule,
    CreateChannelComponent
  ],
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelListComponent {

  constructor(
    private readonly _dialog: DialogService,
    private readonly _chatService: ChatClientService,
    private readonly notify: NotificationService,
    private readonly _authService: AuthService
  ) {}

  public openCreateChannelModal() {
    const ref = this._dialog.open(CreateChannelComponent, {
      header: 'Create channel',
      width: '400px'
    });
    ref.onClose.subscribe((result: string) => {
      const channel = this._chatService.chatClient.channel('messaging', result.replace(/\s+/g, '-').toLowerCase(),
      {
        name: result,
        members: [this._authService.currentUser.uid]
      });
      channel.create();
      this.notify.addTemporaryNotification('You\'ve created a new channel', 'info');
    });
  }
}

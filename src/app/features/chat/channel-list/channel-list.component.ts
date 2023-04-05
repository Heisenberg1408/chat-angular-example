import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { StreamChatModule } from 'stream-chat-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateChannelComponent } from '../create-channel/create-channel.component';
import { DialogService } from 'primeng/dynamicdialog';

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
    private readonly _dialog: DialogService
  ) {}

  public openCreateChannelModal() {
    const ref = this._dialog.open(CreateChannelComponent, {
      header: 'Create channel',
      width: '400px'
    });
    ref.onClose.subscribe(result => {
      console.log(result);
    });
  }
}

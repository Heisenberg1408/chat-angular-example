import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, from } from 'rxjs';
import { UserResponse } from 'stream-chat';
import { ChatClientService, DefaultStreamChatGenerics } from 'stream-chat-angular';

@Component({
  selector: 'app-invite-users',
  standalone: true,
  imports: [
    AsyncPipe,
    AutoCompleteModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  templateUrl: './invite-users.component.html',
  styleUrls: ['./invite-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InviteUsersComponent {

  public selectedUsers = new FormControl([]);
  public searchUserList: UserResponse<DefaultStreamChatGenerics>[] = [];

  constructor(
    private readonly _chatService: ChatClientService,
    private readonly _dialogRef: DynamicDialogRef,
    private readonly _cdr: ChangeDetectorRef
  ) {}

  public async searchUsers(event: any) {
    this.searchUserList = await this._chatService.autocompleteUsers(event.query);
    this._cdr.detectChanges();
  }

  public closeModal() {
    this._dialogRef.close(this.selectedUsers.value);
  }
}

import { Component } from '@angular/core';
import { FormFieldComponent } from '@chat/shared';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-channel',
  standalone: true,
  imports: [
    FormFieldComponent,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.scss']
})
export class CreateChannelComponent {

  public newChannelCtrl = new FormControl('');

  constructor(
    private readonly _dialogRef: DynamicDialogRef
  ) {}

  public createChannel() {
    this._dialogRef.close(this.newChannelCtrl.value);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [UsersListComponent, ChatComponent],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }

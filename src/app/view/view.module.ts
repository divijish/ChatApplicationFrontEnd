import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { ChatComponent } from './chat/chat.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [UsersListComponent, ChatComponent, ParentComponent],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }

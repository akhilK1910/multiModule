import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { AddBookComponent } from './components/add-book/add-book.component';


@NgModule({
  declarations: [
    UserComponent,
    DeleteBookComponent,AddBookComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

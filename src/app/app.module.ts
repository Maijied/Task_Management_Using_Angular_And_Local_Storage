import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule} from "@angular/material/snack-bar";
import {ClipboardModule} from "@angular/cdk/clipboard";
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { DoneComponent } from './done/done.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ClipboardModule,
    CommonModule,
    ToastrModule.forRoot({
      // timeOut: 10000,
      // positionClass: 'toast-bottom-right',
    }),
  ],
  declarations: [
    AppComponent,
    TodoListComponent,
    CreateTaskComponent,
    InProgressComponent,
    DoneComponent,
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { UserComponent } from './user/user.component';
import { JobComponent } from './job/job.component';
import { HeaderComponent } from './navigation/header/header.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreateJobComponent } from './job/create-job/create-job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    JobComponent,
    HeaderComponent,
    CreateUserComponent,
    CreateJobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

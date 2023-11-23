import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { FileInfoComponent } from './file-info/file-info.component';
import { FileSizePipe } from './pipe/file-size.pipe';
import { ConfigComponent } from './config/config.component';
import {LoginService} from "./login/login.service";
import { UserHistoryComponent } from './user-history/user-history.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { RequestComponent } from './request/request.component';
import { BackupComponent } from './backup/backup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FileInfoComponent,
    FileSizePipe,
    ConfigComponent,
    UserHistoryComponent,
    UserManagerComponent,
    RequestComponent,
    BackupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

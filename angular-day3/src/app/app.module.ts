import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomStyleDirective } from './custom-style.directive';
import {HttpClientModule} from '@angular/common/http';
import { ApiServiceService } from './api-service.service';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AdminComponent,
    PageNotFoundComponent,
    CustomStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule


    
  ],
  providers: [
    ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

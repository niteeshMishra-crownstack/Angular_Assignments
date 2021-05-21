import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FormsComponent } from './forms/forms.component';
import { HeaderComponent } from './header/header.component';
import { NestedFormComponent } from './forms/nested-form/nested-form.component';
import { ReactiveSampleComponent } from './forms/reactive-sample/reactive-sample.component';
import { TemplateSampleComponent } from './forms/template-sample/template-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormsComponent,
    HeaderComponent,
    NestedFormComponent,
    ReactiveSampleComponent,
    TemplateSampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

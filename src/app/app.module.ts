import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitePreviewComponent } from './site-preview/site-preview.component';
import { FormsModule } from '@angular/forms';
import { SiteSettingsComponent } from './site-settings/site-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SitePreviewComponent,
    SiteSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

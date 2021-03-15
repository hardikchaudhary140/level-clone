import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServiceComponent } from './service/service.component';
import { VideoComponent } from './video/video.component';
import { CheckInComponent } from './check-in/check-in.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { BlogEntriesComponent } from './blog-entries/blog-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    ServiceComponent,
    VideoComponent,
    CheckInComponent,
    SubscribeComponent,
    BlogEntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

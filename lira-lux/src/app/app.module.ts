import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutRotoComponent } from './about-roto/about-roto.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { CardsWindowComponent } from './cards-window/cards-window.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    AboutRotoComponent,
    ContactsComponent,
    FooterComponent,
    CardsWindowComponent,
    CardComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent, ModalComponent],
  entryComponents: [ModalComponent, CardComponent]
})
export class AppModule { }

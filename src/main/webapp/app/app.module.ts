import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jhipster1SharedModule } from 'app/shared/shared.module';
import { Jhipster1CoreModule } from 'app/core/core.module';
import { Jhipster1AppRoutingModule } from './app-routing.module';
import { Jhipster1HomeModule } from './home/home.module';
import { Jhipster1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jhipster1SharedModule,
    Jhipster1CoreModule,
    Jhipster1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jhipster1EntityModule,
    Jhipster1AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Jhipster1AppModule {}

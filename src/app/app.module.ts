import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { MoonComponent } from './components/destinations/moon/moon.component';
import { MarsComponent } from './components/destinations/mars/mars.component';
import { EuropaComponent } from './components/destinations/europa/europa.component';
import { TitanComponent } from './components/destinations/titan/titan.component';
import { CrewComponent } from './components/crew/crew.component';
import { DouglasComponent } from './components/crew/douglas/douglas.component';
import { MarkComponent } from './components/crew/mark/mark.component';
import { VictorComponent } from './components/crew/victor/victor.component';
import { AnoushehComponent } from './components/crew/anousheh/anousheh.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { VehicleComponent } from './components/technology/vehicle/vehicle.component';
import { SpaceportComponent } from './components/technology/spaceport/spaceport.component';
import { CapsuleComponent } from './components/technology/capsule/capsule.component';
import { NavSelectorsComponent } from './components/nav-selectors/nav-selectors.component';
import { DestSelectorComponent } from './components/nav-selectors/dest-selector/dest-selector.component';
import { CrewSelectorComponent } from './components/nav-selectors/crew-selector/crew-selector.component';
import { TechSelectorComponent } from './components/nav-selectors/tech-selector/tech-selector.component';
import { NavBarComponent } from './components/nav-selectors/nav-bar/nav-bar.component';
import { MobileNavComponent } from './components/nav-selectors/mobile-nav/mobile-nav.component';
import { HomeBtnComponent } from './components/home-btn/home-btn.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinationsComponent,
    MoonComponent,
    MarsComponent,
    EuropaComponent,
    TitanComponent,
    CrewComponent,
    DouglasComponent,
    MarkComponent,
    VictorComponent,
    AnoushehComponent,
    TechnologyComponent,
    VehicleComponent,
    SpaceportComponent,
    CapsuleComponent,
    NavSelectorsComponent,
    DestSelectorComponent,
    CrewSelectorComponent,
    TechSelectorComponent,
    NavBarComponent,
    MobileNavComponent,
    HomeBtnComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

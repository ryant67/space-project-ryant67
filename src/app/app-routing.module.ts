import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoonComponent } from './components/destinations/moon/moon.component';
import { MarsComponent } from './components/destinations/mars/mars.component';
import { TitanComponent } from './components/destinations/titan/titan.component';
import { EuropaComponent } from './components/destinations/europa/europa.component';
import { AnoushehComponent } from './components/crew/anousheh/anousheh.component';
import { DouglasComponent } from './components/crew/douglas/douglas.component';
import { MarkComponent } from './components/crew/mark/mark.component';
import { VictorComponent } from './components/crew/victor/victor.component';
import { VehicleComponent } from './components/technology/vehicle/vehicle.component';
import { SpaceportComponent } from './components/technology/spaceport/spaceport.component';
import { CapsuleComponent } from './components/technology/capsule/capsule.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'dest', redirectTo: 'dest/moon', pathMatch: 'full' },
  { path: 'dest/moon', component: MoonComponent },
  { path: 'dest/mars', component: MarsComponent },
  { path: 'dest/europa', component: EuropaComponent },
  { path: 'dest/titan', component: TitanComponent },
  { path: 'crew', redirectTo: 'crew/douglas', pathMatch: 'full' },
  { path: 'crew/douglas', component: DouglasComponent },
  { path: 'crew/mark', component: MarkComponent },
  { path: 'crew/victor', component: VictorComponent },
  { path: 'crew/anousheh', component: AnoushehComponent },
  { path: 'tech', redirectTo: 'tech/vehicle', pathMatch: 'full' },
  { path: 'tech/vehicle', component: VehicleComponent },
  { path: 'tech/spaceport', component: SpaceportComponent },
  { path: 'tech/capsule', component: CapsuleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleCardComponent } from './vehicle-card.component';
import { VehicleService } from './services/vehicle.service';

const routes: Routes = [
  { path: '', component: VehicleListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule {}

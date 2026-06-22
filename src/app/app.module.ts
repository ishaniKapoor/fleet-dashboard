import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VehicleCardComponent } from './vehicle-card.component';
import { FleetComponent } from './components/fleet/fleet.component';

const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    FleetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

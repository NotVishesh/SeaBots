import { Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { MarineLifeComponent } from '../marine-life/marine-life.component';
import { MarinePollutionComponent } from '../marine-pollution/marine-pollution.component';
import { NgosComponent } from '../ngos/ngos.component';


const routes: Routes = [
  {path: 'marine-life', component:MarineLifeComponent},
  {path: 'marine-pollution', component:MarinePollutionComponent},
  {
    path: 'ngos', component:NgosComponent
  }
];
@Component({
  selector: 'app-explore',
  // standalone: true,
  // imports: [],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
  // providers: []
})

export class ExploreComponent {}
// export { routes };


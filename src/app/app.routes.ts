import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { EffectComponent } from './effect/effect.component';
import { PreventionComponent } from './prevention/prevention.component';
import { CausesComponent } from './causes/causes.component';
import { NgosComponent } from './ngos/ngos.component';
import { MarineLifeComponent } from './marine-life/marine-life.component';
import { MarinePollutionComponent } from './marine-pollution/marine-pollution.component';
import { ExploreComponent } from './explore/explore.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { LocationComponent } from './location/location.component';
import {LocationService} from './location/location.service';
import { CommunityComponent } from './community/community.component';
import { DonateComponent } from './donate/donate.component';



const routeConfig: Routes = [
    {
        path:'',
        component: HomeComponent,
    },
    {
        path:'about',
        component: AboutComponent,
    },
    {
        path: 'location',
        component: LocationComponent,
    },
    {
        path:'explore',
        component: ExploreComponent,
    },
    {
        path:'ngos',
        component: NgosComponent,
    },
    {
        path:'marine-life',
        component: MarineLifeComponent,
    },
    {
        path:'marine-pollution',
        component: MarinePollutionComponent,
    },
    {
        path:'prevention',
        component: PreventionComponent,
    },
    {
        path:'causes',
        component: CausesComponent,
    },
    {
        path:'effect',
        component: EffectComponent,
    },
    {
        path:'community',
        component: CommunityComponent
    },
    {
        path:'donate',
        component: DonateComponent
    }
];


export {routeConfig};
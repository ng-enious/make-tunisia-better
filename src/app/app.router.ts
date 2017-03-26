import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginePageComponent } from './logine-page/logine-page.component';
import { HomePageComponent } from './home-page/home-page.component';



//navigation et router (routing)
export const router: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginePageComponent },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
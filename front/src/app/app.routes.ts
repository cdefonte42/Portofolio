import { Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { PortofolioComponent } from './portofolio/portofolio.component';

export const routes: Routes = [
    { path: "blank", component: BlankComponent },
    { path: "**", component: PortofolioComponent }
];

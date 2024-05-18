import { Routes } from '@angular/router';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    { path: "blank", component: LayoutComponent },
    { path: "**", component: PortofolioComponent }
];

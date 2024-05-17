import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { OverviewComponent } from '../overview/overview.component';
import { WorkExperiencesComponent } from '../work-experiences/work-experiences.component';

@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [HeaderComponent, NavBarComponent, SectionTitleComponent,
    OverviewComponent, WorkExperiencesComponent],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css'
})
export class PortofolioComponent {

}

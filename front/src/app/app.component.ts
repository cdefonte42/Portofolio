import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OverviewComponent } from './overview/overview.component';
import { WorkExperiencesComponent } from './work-experiences/work-experiences.component';
import { SectionTitleComponent } from './section-title/section-title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavBarComponent, OverviewComponent, WorkExperiencesComponent, SectionTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portofolio';

}

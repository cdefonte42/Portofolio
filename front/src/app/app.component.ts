import { Component } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ProjectComponent } from './project/project.component';
import { Projects } from './datas/project-data';
import { Project } from './types/project';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, ProjectComponent, CardComponent, OverviewComponent, TimelineComponent, SectionTitleComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Cyrielle DEFONTE';
  projects: Project[] = Projects;
}

import { AfterViewInit, Component, ElementRef, ViewChild, } from '@angular/core';
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
export class AppComponent implements AfterViewInit {
  title = 'Cyrielle DEFONTE';
  projects: Project[] = Projects;
  sections: string[] = ["CV", "EXPERIENCES", "SKILLS", "PROJETS"];
  currentSection?: string;

  @ViewChild('cvRef', { read: ElementRef }) cvRef!: ElementRef;
  @ViewChild('timelineRef', { read: ElementRef }) timelineRef!: ElementRef;
  @ViewChild('skillsRef', { read: ElementRef }) skillsRef!: ElementRef;
  @ViewChild('projectsRef', { read: ElementRef }) projectsRef!: ElementRef;
  @ViewChild('overviewRef', { read: ElementRef }) overviewRef!: ElementRef;

  ngAfterViewInit() {
    if (getComputedStyle(this.overviewRef.nativeElement).display === 'flex')
      this.sections = ["CV", "PROJETS"];

    const options = {
      root: null,
      rootMargin: "-50% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.updateCurrentSection(entry.target);
        }
      });
    }, options);

    observer.observe(this.cvRef.nativeElement);
    observer.observe(this.timelineRef.nativeElement);
    observer.observe(this.skillsRef.nativeElement);
    observer.observe(this.projectsRef.nativeElement);
  }

  updateCurrentSection(element: Element) {
    switch (element) {
      case this.cvRef.nativeElement:
        this.currentSection = this.sections[0];
        break;
      case this.timelineRef.nativeElement:
        this.currentSection = this.sections.length > 2 ? this.sections[1] : this.sections[0];
        break;
      case this.skillsRef.nativeElement:
        this.currentSection = this.sections.length > 2 ? this.sections[2] : this.sections[0];
        break;
      case this.projectsRef.nativeElement:
        this.currentSection = this.sections.length > 2 ? this.sections[3] : this.sections[1];
        break;
    }
  }

}
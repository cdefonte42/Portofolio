import { AfterViewInit, Component, ElementRef, ViewChild, } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ProjectComponent } from './project/project.component';
import { Projects } from './datas/project-data';
import { Project } from './types/project';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor, ProjectComponent, CardComponent, OverviewComponent, TimelineComponent, SectionTitleComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements AfterViewInit {
  title = 'Cyrielle DEFONTE';
  projects: Project[] = Projects;

  sections: string[] = window.screen.width > 860 ? ["CV", "PROJETS"] : ["CV", "EXPERIENCES", "SKILLS", "PROJETS"];
  currentSection?: string;
  showNav: boolean = false;
  scrollTarget: string | undefined = undefined;

  @ViewChild('cvRef', { read: ElementRef }) cvRef!: ElementRef;
  @ViewChild('timelineRef', { read: ElementRef }) timelineRef!: ElementRef;
  @ViewChild('skillsRef', { read: ElementRef }) skillsRef!: ElementRef;
  @ViewChild('projectsRef', { read: ElementRef }) projectsRef!: ElementRef;
  @ViewChild('overviewRef', { read: ElementRef }) overviewRef!: ElementRef;

  scrollIntoSection(section: string, event: Event) {
    if (this.showNav)
      event.stopPropagation();
    const target = this.mapSectionToTarget(section);
    if (!target) return;
    this.scrollTarget = section;
    target.target.nativeElement.scrollIntoView({ behavior: 'smooth', block: target.block, inline: 'start' });
    this.showNav = false;
  }

  mapSectionToTarget(section: string) {
    switch (section) {
      case 'CV':
        return { target: this.overviewRef, block: 'start' };
      case 'EXPERIENCES':
        return { target: this.timelineRef, block: 'center' };
      case 'SKILLS':
        return { target: this.skillsRef, block: 'center' };
      case 'PROJETS':
        return { target: this.projectsRef, block: 'start' };
    }
    return undefined;
  }

  ngAfterViewInit() {

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
        if (this.scrollTarget === undefined || this.scrollTarget === this.sections[0]) {
          this.currentSection = this.sections[0];
          this.scrollTarget = undefined;
        }
        break;
      case this.timelineRef.nativeElement:
        if (this.scrollTarget === undefined || this.scrollTarget === (this.sections.length > 2 ? this.sections[1] : this.sections[0])) {
          this.currentSection = this.sections.length > 2 ? this.sections[1] : this.sections[0];
          this.scrollTarget = undefined;
        }
        break;
      case this.skillsRef.nativeElement:
        if (this.scrollTarget === undefined || this.scrollTarget === (this.sections.length > 2 ? this.sections[2] : this.sections[0])) {
          this.currentSection = this.sections.length > 2 ? this.sections[2] : this.sections[0];
          this.scrollTarget = undefined;
        }
        break;
      case this.projectsRef.nativeElement:
        if (this.scrollTarget === undefined || this.scrollTarget === (this.sections.length > 2 ? this.sections[3] : this.sections[1])) {
          this.currentSection = this.sections.length > 2 ? this.sections[3] : this.sections[1];
          this.scrollTarget = undefined;
        }
        break;
    }
  }

}
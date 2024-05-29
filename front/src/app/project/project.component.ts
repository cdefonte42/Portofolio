import { NgFor, NgIf } from '@angular/common';
import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Project } from '../types/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  host: {
    '[class]': "imgPosition",
  },
})
export class ProjectComponent implements OnInit, OnDestroy {
  @Input({ required: true }) project!: Project;
  @Input() imgPosition: 'right' | 'left' = 'right';

  currentImagePath: string | undefined;
  currentImageIndex: number = 0;
  intervalId: any;

  ngOnInit() {
    this.startImageRotation();
    this.currentImagePath = this.project.imagesPath?.length ? this.project.imagesPath[0] : undefined;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startImageRotation() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.imagesPath.length;
      this.currentImagePath = this.project.imagesPath[this.currentImageIndex];
    }, 3000);
  }
}

import { NgFor, NgIf } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
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
export class ProjectComponent {
  @Input({ required: true }) project!: Project;
  @Input() imgPosition: 'right' | 'left' = 'right';
}

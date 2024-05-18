import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TimelineItemComponent } from '../timeline-item/timeline-item.component';
import { Experiences } from '../datas/experience-data';
import { Experience } from '../types/experience';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgIf, NgFor, TimelineItemComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  experiences: Experience[] = Experiences;

}

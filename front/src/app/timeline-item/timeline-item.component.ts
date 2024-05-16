import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Experience } from '../types/experience';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.css'
})
export class TimelineItemComponent {
  @Input({ required: true }) experience!: Experience;
  @Input() expanded: boolean = false;
  @Output() expandedChange = new EventEmitter<Event>();

  setExpand(val: boolean, event: Event) {
    this.expanded = val;
    this.expandedChange.emit(event);
  }

}

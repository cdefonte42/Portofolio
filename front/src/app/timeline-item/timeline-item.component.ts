import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Experience } from '../types/experience';
import { NgIf } from '@angular/common';
import { AUTO_STYLE, animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.css',
  animations: [
    trigger('collapse', [
      state('open', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('closed', style({ height: '0', visibility: 'hidden' })),
      transition('closed => open', animate('500ms ease-in')),
      transition('open => closed', animate('300ms ease-out'))
    ])
  ]
})
export class TimelineItemComponent {
  @Input({ required: true }) experience!: Experience;
  @Input() expanded: boolean = false;
  @Output() expandedChange = new EventEmitter<boolean>();

  setExpand(val: boolean) {
    this.expanded = val;
    this.expandedChange.emit(val);
  }

}

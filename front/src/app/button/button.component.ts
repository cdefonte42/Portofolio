import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { ProjectionContentDirective } from '../projection-content.directive';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgTemplateOutlet, NgIf,],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',

})

export class ButtonComponent {
  @Input() color: "brand" | "white" | "dark" = "brand";
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<MouseEvent>();
  @ContentChild(ProjectionContentDirective) iconRef?: ProjectionContentDirective;
}

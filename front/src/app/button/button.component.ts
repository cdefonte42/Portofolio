import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() color: "brand" | "white" | "dark" = "brand";
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<MouseEvent>();

}

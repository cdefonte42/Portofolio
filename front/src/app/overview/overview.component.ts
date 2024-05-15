import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  downloadCV() {
    alert("vous allez telecharger mon cv")
  }
}

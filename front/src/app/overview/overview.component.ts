import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ProjectionContentDirective } from '../projection-content.directive';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [ButtonComponent, ProjectionContentDirective],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  downloadCV() {
    alert("vous allez telecharger mon cv")
  }
}

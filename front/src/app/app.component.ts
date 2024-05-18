import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { OverviewComponent } from './overview/overview.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SectionTitleComponent } from './section-title/section-title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, OverviewComponent, TimelineComponent, SectionTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portofolio';
}

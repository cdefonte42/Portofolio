import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appProjectionContent]',
  standalone: true
})
export class ProjectionContentDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }

}

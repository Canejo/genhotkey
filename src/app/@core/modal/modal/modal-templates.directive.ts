import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[modal-header-tmp]' })
export class ModalHeaderTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}

@Directive({ selector: '[modal-footer-tmp]' })
export class ModalFooterTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}

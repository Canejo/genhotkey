import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalHeaderTemplateDirective, ModalFooterTemplateDirective } from './modal-templates.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  host: {
    '[class.component-host-scrollable]': 'true',
  },
})
export class ModalComponent implements OnInit {
  @Input() activeModal: NgbActiveModal;
  @Input() exibirFooter = true;

  exibirTitulo = true;

  @ContentChild(ModalHeaderTemplateDirective, { read: TemplateRef, static: true }) modalHeaderTemplate: TemplateRef<
    any
  >;
  @ContentChild(ModalFooterTemplateDirective, { read: TemplateRef, static: true }) modalFooterTemplate: TemplateRef<
    any
  >;

  constructor() {}

  ngOnInit() {
    if (!this.modalHeaderTemplate) {
      this.exibirTitulo = false;
    }
  }
}

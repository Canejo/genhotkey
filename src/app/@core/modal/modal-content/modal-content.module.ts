import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalContentService } from './service/modal-content.service';
import { ModalContentComponent, NgbdModalContentComponent } from './modal-content.component';
import { ModalComponent } from '../modal/modal.component';
import { ModalHeaderTemplateDirective, ModalFooterTemplateDirective } from '../modal/modal-templates.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ModalContentComponent,
    NgbdModalContentComponent,
    ModalComponent,
    ModalHeaderTemplateDirective,
    ModalFooterTemplateDirective,
  ],
  entryComponents: [NgbdModalContentComponent],
  providers: [ModalContentService],
  exports: [
    ModalContentComponent,
    ModalHeaderTemplateDirective,
    ModalFooterTemplateDirective,
    NgbdModalContentComponent,
    ModalComponent,
  ],
})
export class ModalContentModule {}

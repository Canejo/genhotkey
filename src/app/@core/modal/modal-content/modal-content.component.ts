import { Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalConfigEntity } from './entity/modal-config.entity';
import { ModalButtonEntity } from './entity/modal-button.entity';
import { ModalContentService } from './service/modal-content.service';

@Component({
  selector: 'app-modal-content',
  template: '',
})
export class ModalContentComponent implements OnInit, OnDestroy {
  inscricao: Subscription;

  constructor(private _modalContentService: ModalContentService, private ngbModal: NgbModal) {}

  ngOnInit() {
    this.inscricao = this._modalContentService.getModal().subscribe(async (modalConfigEntity) => {
      if (modalConfigEntity) {
        await this.show(modalConfigEntity);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }

  show(modalConfigEntity: ModalConfigEntity) {
    let content = NgbdModalContentComponent;
    if (modalConfigEntity.content) {
      content = modalConfigEntity.content;
    }
    const modalRef = this.ngbModal.open(content, {
      scrollable: modalConfigEntity.scrollable,
      size: modalConfigEntity.size,
      centered: modalConfigEntity.centered,
      windowClass: modalConfigEntity.windowClass,
      ariaLabelledBy: modalConfigEntity.ariaLabelledBy,
    });

    if (modalRef.componentInstance) {
      modalRef.componentInstance.modalConfigEntity = modalConfigEntity;
      if (modalConfigEntity.parameters) {
        for (const param in modalConfigEntity.parameters) {
          if (param) {
            modalRef.componentInstance[param] = modalConfigEntity.parameters[param];
          }
        }
      }
    }

    modalRef.result.then(
      (data) => {
        if (data && modalConfigEntity.result) {
          modalConfigEntity.result(data);
        }
      },
      (reason) => {}
    );
  }
}

@Component({
  selector: 'app-modal-inner-content',
  template: `
    <div class="modal-header" *ngIf="!modalConfigEntity.hideHeader">
      <h4 class="modal-title">{{ modalConfigEntity?.title ? modalConfigEntity?.title : 'Aviso' }}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{ modalConfigEntity.message }}
    </div>
    <div class="modal-footer" *ngIf="modalConfigEntity && modalConfigEntity.buttons">
      <div *ngFor="let button of modalConfigEntity.buttons">
        <button type="button" class="{{ button.class }}" (click)="click(button)">{{ button.name }}</button>
      </div>
    </div>
  `,
})
export class NgbdModalContentComponent {
  @Input()
  modalConfigEntity: ModalConfigEntity;

  constructor(public activeModal: NgbActiveModal) {}

  click(button: ModalButtonEntity) {
    if (button.click) {
      button.click(this.modalConfigEntity);
    }
    if (!button.notClose) {
      this.activeModal.close('Close click');
    }
  }
}

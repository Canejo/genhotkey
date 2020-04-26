import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ModalContentService } from './modal-content.service';
import { ModalContentModule } from '../modal-content.module';

describe('ModalContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ModalContentModule],
    });
  });

  it('should be created', inject([ModalContentService], (service: ModalContentService) => {
    expect(service).toBeTruthy();
  }));
});

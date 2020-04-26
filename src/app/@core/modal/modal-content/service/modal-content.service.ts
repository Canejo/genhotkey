import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject, Observable } from 'rxjs';

import { ModalConfigEntity } from '../entity/modal-config.entity';

@Injectable()
export class ModalContentService {
  private subjectConfig = new Subject<ModalConfigEntity>();

  private keepAfterRouteChange = false;

  constructor(router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  getModal(): Observable<ModalConfigEntity> {
    return this.subjectConfig.asObservable();
  }

  show(config: ModalConfigEntity, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subjectConfig.next(config);
  }

  clear() {
    this.subjectConfig.next();
  }
}

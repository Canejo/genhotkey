import { ModalConfigEntity } from './modal-config.entity';

export class ModalButtonEntity {
  name: string;
  notClose?: boolean;
  click?: (args: ModalConfigEntity) => any;
  class?: string;
}

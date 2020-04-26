import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Hotkey } from '@app/store/hotkey/hotkey.model';
import { Folder } from '@app/store/folder/folder.model';

@Component({
  selector: 'app-hotkey-panel',
  templateUrl: './hotkey-panel.component.html',
  styleUrls: ['./hotkey-panel.component.scss'],
})
export class HotkeyPanelComponent implements OnInit, OnChanges {
  active = 0;

  @Input() selectedHotkey: Array<Hotkey>;
  @Input() folders: Folder[];
  @Output() fechar: EventEmitter<number> = new EventEmitter();
  @Output() save: EventEmitter<Hotkey> = new EventEmitter();
  @Output() new: EventEmitter<void> = new EventEmitter();
  @Output() change: EventEmitter<{ hotkey: Hotkey; change: boolean; index: number }> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    let newValue: Hotkey;
    const previousValue = changes.selectedHotkey.previousValue as Array<Hotkey>;
    const currentValue = changes.selectedHotkey.currentValue as Array<Hotkey>;

    if (previousValue) {
      const filter = previousValue
        .filter((x) => !currentValue.includes(x))
        .concat(currentValue.filter((x) => !previousValue.includes(x)));
      if (filter) newValue = filter[0];
    } else {
      newValue = currentValue[0];
    }
    if (newValue) {
      let index = this.selectedHotkey.findIndex((m) => m.Id === newValue.Id);
      if (index === -1) {
        index = this.selectedHotkey.length - 1;
      }
      this.active = index;
    }
  }

  onFechar(index: number) {
    this.fechar.emit(index);
    return false;
  }

  onNew() {
    this.new.emit();
    return false;
  }

  onChange(event: { hotkey: Hotkey; change: boolean }, index: number) {
    this.change.emit({
      change: event.change,
      hotkey: event.hotkey,
      index,
    });
  }
}

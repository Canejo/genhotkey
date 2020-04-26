import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotkey } from '@app/store/hotkey/hotkey.model';

@Component({
  selector: 'app-hotkey-panel',
  templateUrl: './hotkey-panel.component.html',
  styleUrls: ['./hotkey-panel.component.scss'],
})
export class HotkeyPanelComponent implements OnInit {
  @Input() selectedHotkey: Array<Hotkey>;
  @Output() fechar: EventEmitter<Hotkey> = new EventEmitter();
  @Output() save: EventEmitter<Hotkey> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}

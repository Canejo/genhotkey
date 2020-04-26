import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { HotkeyCollection } from '@app/store/hotkey/hotkey.collection';

@Component({
  selector: 'app-hotkey-list',
  templateUrl: './hotkey-list.component.html',
  styleUrls: ['./hotkey-list.component.scss'],
})
export class HotkeyListComponent implements OnInit {
  @Input() hotkeys: HotkeyCollection[];
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}

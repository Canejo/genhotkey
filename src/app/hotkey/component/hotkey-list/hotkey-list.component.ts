import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Folder } from '@app/store/folder/folder.model';
import { Hotkey } from '@app/store/hotkey/hotkey.model';

@Component({
  selector: 'app-hotkey-list',
  templateUrl: './hotkey-list.component.html',
  styleUrls: ['./hotkey-list.component.scss'],
})
export class HotkeyListComponent implements OnInit {
  @Input() hotkeys: Hotkey[];
  @Input() folders: Folder[];

  @Output() select: EventEmitter<Hotkey> = new EventEmitter();
  @Output() newFolder: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}

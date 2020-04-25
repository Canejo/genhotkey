import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-hotkey-list',
  templateUrl: './hotkey-list.component.html',
  styleUrls: ['./hotkey-list.component.scss'],
})
export class HotkeyListComponent implements OnInit {
  @Input() hotkeys: any[];
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}

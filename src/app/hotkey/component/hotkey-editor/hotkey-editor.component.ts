import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotkey-editor',
  templateUrl: './hotkey-editor.component.html',
  styleUrls: ['./hotkey-editor.component.scss'],
})
export class HotkeyEditorComponent implements OnInit {
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';

  constructor() {}

  ngOnInit(): void {}
}

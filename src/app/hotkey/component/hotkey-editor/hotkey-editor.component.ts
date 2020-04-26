import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Hotkey } from '@app/store/hotkey/hotkey.model';

@Component({
  selector: 'app-hotkey-editor',
  templateUrl: './hotkey-editor.component.html',
  styleUrls: ['./hotkey-editor.component.scss'],
})
export class HotkeyEditorComponent implements OnInit, OnChanges {
  @Input() hotkey: Hotkey;
  @Output() save: EventEmitter<Hotkey> = new EventEmitter();
  @Output() change: EventEmitter<{ hotkey: Hotkey; change: boolean }> = new EventEmitter();

  editorOptions = { theme: 'vs-dark', language: 'javascript' };

  hotkeyForm = this.fb.group({
    Id: [''],
    Nome: ['', Validators.required],
    Script: [''],
    Atalho: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.hotkeyForm.valueChanges.subscribe(() => {
      this.change.emit({
        hotkey: this.getNewValue(),
        change: true,
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.hotkeyForm.patchValue({
      Id: this.hotkey.Id,
      Nome: this.hotkey.Nome,
      Script: this.hotkey.Script,
      Atalho: this.hotkey.Atalho,
    });
  }

  keyPress(event: any) {
    console.log(event);
    const inputChar = String.fromCharCode((event as KeyboardEvent).charCode);
    console.log(inputChar);
  }

  onSave() {
    if (this.hotkeyForm.valid) {
      this.save.emit(this.getNewValue());
    }
  }

  getNewValue() {
    const value = this.hotkeyForm.value;
    return {
      ...this.hotkey,
      Nome: value.Nome,
      Script: value.Script,
      Atalho: value.Atalho,
    };
  }
}

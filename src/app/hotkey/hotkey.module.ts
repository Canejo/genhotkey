import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';

import { HotkeyEditorComponent } from './component/hotkey-editor/hotkey-editor.component';
import { HotkeyRoutingModule } from './hotkey-routing.module';
import { HotkeyListComponent } from './component/hotkey-list/hotkey-list.component';
import { HotkeyHomeComponent } from './container/hotkey-home/hotkey-home.component';

@NgModule({
  declarations: [HotkeyEditorComponent, HotkeyListComponent, HotkeyHomeComponent],
  imports: [CommonModule, MonacoEditorModule, FormsModule, HotkeyRoutingModule],
})
export class HotkeyModule {}

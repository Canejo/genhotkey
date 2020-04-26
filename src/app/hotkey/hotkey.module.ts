import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HotkeyEditorComponent } from './component/hotkey-editor/hotkey-editor.component';
import { HotkeyRoutingModule } from './hotkey-routing.module';
import { HotkeyListComponent } from './component/hotkey-list/hotkey-list.component';
import { HotkeyHomeComponent } from './container/hotkey-home/hotkey-home.component';
import { HotkeyPanelComponent } from './component/hotkey-panel/hotkey-panel.component';

@NgModule({
  declarations: [HotkeyEditorComponent, HotkeyListComponent, HotkeyHomeComponent, HotkeyPanelComponent],
  imports: [CommonModule, MonacoEditorModule, HotkeyRoutingModule, NgbModule, ReactiveFormsModule],
})
export class HotkeyModule {}

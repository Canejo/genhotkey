import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { HotkeyHomeComponent } from './container/hotkey-home/hotkey-home.component';

const routes: Routes = [{ path: 'editor', component: HotkeyHomeComponent, data: { title: extract('Hotkey') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HotkeyRoutingModule {}

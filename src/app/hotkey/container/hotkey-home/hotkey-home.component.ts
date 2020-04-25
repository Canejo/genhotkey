import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotkey-home',
  templateUrl: './hotkey-home.component.html',
  styleUrls: ['./hotkey-home.component.scss'],
})
export class HotkeyHomeComponent implements OnInit {
  hotkeys: any[] = [
    {
      Nome: 'Geral',
      Itens: [
        {
          Nome: 'Pesquisar texto selecionado no google',
        },
        {
          Nome: 'Corrigir palavra',
        },
      ],
    },
    {
      Nome: 'Texto',
      Itens: [
        {
          Nome: 'Uppercase',
        },
        {
          Nome: 'Lowercase',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  select(hotkey: any) {}
}

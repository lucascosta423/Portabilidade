import { Component } from '@angular/core';
import { MenuLeftComponent } from '../menu-left/menu-left.component';
import { CadastrarPortabilidadeComponent } from './cadastrar-portabilidade/cadastrar-portabilidade.component';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portabilidade',
  standalone: true,
  imports: [MenuLeftComponent, CadastrarPortabilidadeComponent,NgIf],
  templateUrl: './portabilidade.component.html',
  styleUrl: './portabilidade.component.css'
})
export class PortabilidadeComponent {
  table_List = true;
  form_portabilidade = false;

  toggleTableList(){
    this.table_List = !this.table_List;
    this.form_portabilidade = !this.form_portabilidade;
  }

  click_event() {
    this.table_List = true;
    this.form_portabilidade = false;
  }
}

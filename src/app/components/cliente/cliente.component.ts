import { Component } from '@angular/core';
import { MenuLeftComponent } from '../menu-left/menu-left.component';
import { NgIf } from '@angular/common';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [MenuLeftComponent, NgIf, CadastrarClienteComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  table_List = true;
  form_cliente = false;

  toggleTableList(){
    this.table_List = !this.table_List;
    this.form_cliente = !this.form_cliente;
  }

  click_event() {
    this.table_List = true;
    this.form_cliente = false;
  }

}

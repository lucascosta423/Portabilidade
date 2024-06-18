import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cadastrar-cliente',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cadastrar-cliente.component.html',
  styleUrl: './cadastrar-cliente.component.css'
})
export class CadastrarClienteComponent {
  @Input() form_cliente: boolean | undefined;
}

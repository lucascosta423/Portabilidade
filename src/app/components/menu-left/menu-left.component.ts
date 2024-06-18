import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-left',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './menu-left.component.html',
  styleUrl: './menu-left.component.css'
})
export class MenuLeftComponent {

  @Output() click_Event = new EventEmitter<void>();

  portabilidadeActive: boolean = false;
  clienteActive: boolean = false;

  togglePortabilidade(){
    this.portabilidadeActive = !this.portabilidadeActive
  }
  toggleCliente(){
    this.clienteActive = !this.clienteActive
  }

  event(){
    this.click_Event.emit()
  }

}

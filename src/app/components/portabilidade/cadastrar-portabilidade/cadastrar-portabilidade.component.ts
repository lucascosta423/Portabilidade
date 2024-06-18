import { NgIf } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-portabilidade',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './cadastrar-portabilidade.component.html',
  styleUrl: './cadastrar-portabilidade.component.css'
})
export class CadastrarPortabilidadeComponent {
  @Input() form_Portabilidade: boolean | undefined;

}

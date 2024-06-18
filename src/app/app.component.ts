import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLeftComponent } from './components/menu-left/menu-left.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuLeftComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portabilidade';
}

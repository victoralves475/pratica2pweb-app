import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
// Altere o template do componente app (app.component.html) para conter seu nome completo
export class AppComponent {
  title = 'Prática PWEB1 - Hello World! - Antonio Victor Alves da Costa';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./pages/about/about.component";
import { TodoComponent } from "./pages/todo/todo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, AboutComponent, TodoComponent]
})
export class AppComponent {
  title = 'tues';
}

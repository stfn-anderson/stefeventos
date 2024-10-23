import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "stefeventos";
}

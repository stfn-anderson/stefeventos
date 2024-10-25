import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CardComponent } from "../../componentes/card/card.component";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

interface Evento {
  titulo: string;
  local: string;
  data: string;
}

@Component({
  selector: "app-eventos",
  standalone: true,
  imports: [CommonModule, CardComponent, ReactiveFormsModule],
  templateUrl: "./eventos.component.html",
  styleUrl: "./eventos.component.css",
})
export class EventosComponent {
  listaEventos: Evento[] = [
    {
      titulo: "Angular - Aula 1",
      local: "Teams",
      data: "18/10/2024",
    },
    {
      titulo: "Angular - Aula 2",
      local: "Meet",
      data: "25/10/2024",
    },
    {
      titulo: "Angular - Aula 3",
      local: "Teams",
      data: "01/11/2024",
    },
    {
      titulo: "Angular - Desafio",
      local: "Teams",
      data: "08/11/2024",
    },
  ];
  listaEventosFiltrada: Evento[] = this.listaEventos;
  filtroNome = new FormControl();
  filtroLocal = new FormControl();

  onChangeFiltroNome() {
    this.listaEventosFiltrada = this.listaEventos.filter((evento) =>
      evento.titulo.toUpperCase().includes(this.filtroNome.value.toUpperCase())
    );
  }

  onChangeFiltroLocal() {
    this.listaEventosFiltrada = this.listaEventos.filter((evento) =>
      evento.local.toUpperCase().includes(this.filtroLocal.value.toUpperCase())
    );
  }
}

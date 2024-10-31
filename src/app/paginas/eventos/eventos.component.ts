import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CardComponent } from "../../componentes/card/card.component";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { ModalCadastrarEventoComponent } from "./modal-cadastrar-evento/modal-cadastrar-evento.component";
import { Evento, FormularioEvento } from "../../interfaces/Evento";
import { formatDate } from "../../utils/FormatDateUtil";

@Component({
  selector: "app-eventos",
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ReactiveFormsModule,
    ModalCadastrarEventoComponent,
  ],
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
      data: "2024-11-08",
    },
  ];
  listaEventosFiltrada: Evento[] = this.listaEventos;
  filtroNome = new FormControl();
  filtroLocal = new FormControl();

  constructor() {}

  format(date: string): string {
    return formatDate(date);
  }

  newEvento(evento: FormularioEvento) {
    this.listaEventos.push({
      titulo: evento.titulo,
      data: evento.data,
      local: `${evento.logradouro}, ${evento.cidade}-${evento.uf}`,
    });
    this.listaEventosFiltrada = this.listaEventos;
  }

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

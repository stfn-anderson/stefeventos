import { Routes } from "@angular/router";
import { InicioComponent } from "./paginas/inicio/inicio.component";
import { SobreNosComponent } from "./paginas/sobre-nos/sobre-nos.component";
import { ContatoComponent } from "./paginas/contato/contato.component";
import { EventosComponent } from "./paginas/eventos/eventos.component";

export const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "inicio", component: InicioComponent },
  { path: "eventos", component: EventosComponent },
  { path: "contato", component: ContatoComponent },
  { path: "sobre", component: SobreNosComponent },
];

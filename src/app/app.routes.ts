import { Routes } from "@angular/router";
import { InicioComponent } from "./paginas/inicio/inicio.component";
import { SobreNosComponent } from "./paginas/sobre-nos/sobre-nos.component";
import { ContatoComponent } from "./paginas/contato/contato.component";

export const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  { path: "sobre", component: SobreNosComponent },
  { path: "contato", component: ContatoComponent },
  { path: "", component: InicioComponent },
];

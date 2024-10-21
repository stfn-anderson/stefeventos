import { Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { SobreNosComponent } from './pagina/sobre-nos/sobre-nos.component';
import { ContatoComponent } from './pagina/contato/contato.component';

export const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'sobre', component: SobreNosComponent},
  {path:'contato', component: ContatoComponent},
  {path:'', component: InicioComponent}
];

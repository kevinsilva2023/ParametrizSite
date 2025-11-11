import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';

const routes: Routes = [
  { path: '', component: SiteComponent },
  {
    path: 'reforma-tributaria',
    loadChildren: () => import('./pages/reforma-tributaria/reforma-tributaria.module').then(m => m.ReformaTributariaModule)
  },
  { path: 'autonfp', loadChildren: () => import('./pages/autonfp-saiba-mais/autonfp-saiba-mais.module').then(m => m.AutonfpSaibaMaisModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }

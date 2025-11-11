import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutonfpSaibaMaisComponent } from './autonfp-saiba-mais.component';

const routes: Routes = [{ path: '', component: AutonfpSaibaMaisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutonfpSaibaMaisRoutingModule { }

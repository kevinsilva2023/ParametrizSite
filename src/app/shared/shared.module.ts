import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { NavbarProjetosComponent } from './navbar-projetos/navbar-projetos.component';


@NgModule({
  declarations: [
    FooterComponent,
    LoadingComponent,
    NavbarProjetosComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    LoadingComponent,
    NavbarProjetosComponent
  ]
})
export class SharedModule { }

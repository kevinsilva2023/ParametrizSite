import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutonfpSaibaMaisRoutingModule } from './autonfp-saiba-mais-routing.module';
import { AutonfpSaibaMaisComponent } from './autonfp-saiba-mais.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AutonfpSaibaMaisComponent
  ],
  imports: [
    CommonModule,
    AutonfpSaibaMaisRoutingModule,
    SharedModule,
]
})
export class AutonfpSaibaMaisModule { }

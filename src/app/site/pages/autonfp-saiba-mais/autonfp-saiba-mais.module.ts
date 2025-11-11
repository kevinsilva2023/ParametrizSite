import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutonfpSaibaMaisRoutingModule } from './autonfp-saiba-mais-routing.module';
import { AutonfpSaibaMaisComponent } from './autonfp-saiba-mais.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AutonfpSaibaMaisComponent
  ],
  imports: [
    CommonModule,
    AutonfpSaibaMaisRoutingModule,
    SharedModule,
    FormsModule
],
providers: [
  { provide: LOCALE_ID, useValue: 'pt-BR' }
],
})
export class AutonfpSaibaMaisModule { }

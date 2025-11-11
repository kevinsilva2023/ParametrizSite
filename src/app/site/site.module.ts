import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SiteComponent } from './site.component';
import { ApresentacaoInicialComponent } from './components/apresentacao-inicial/apresentacao-inicial.component';
import { ModalCalendlyComponent } from './components/apresentacao-inicial/modal-calendly/modal-calendly.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { LogoClientesComponent } from './components/beneficios/logo-clientes/logo-clientes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NossosServicosComponent } from './components/nossos-servicos/nossos-servicos.component';
import { ModalComponent } from './components/nossos-servicos/modal/modal.component';
import { PerguntasRespostasComponent } from './components/perguntas-respostas/perguntas-respostas.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ProcessoComponent } from './components/processo/processo.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { EntreEmContato } from './components/entre-em-contato/entre-em-contato.component';
import { AutonfpComponent } from './components/autonfp/autonfp.component';


@NgModule({
  declarations: [
    SiteComponent,
    ApresentacaoInicialComponent,
    ModalCalendlyComponent,
    BeneficiosComponent,
    LogoClientesComponent,
    EntreEmContato,
    NavbarComponent,
    NossosServicosComponent,
    ModalComponent,
    PerguntasRespostasComponent,
    ServicosComponent,
    ProcessoComponent,
    AutonfpComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ]
})
export class SiteModule { }

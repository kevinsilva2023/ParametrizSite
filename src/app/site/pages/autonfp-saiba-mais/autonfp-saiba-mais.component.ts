import { Component } from '@angular/core';

@Component({
  selector: 'app-autonfp-saiba-mais',
  templateUrl: './autonfp-saiba-mais.component.html',
  styleUrls: ['./autonfp-saiba-mais.component.scss']
})
export class AutonfpSaibaMaisComponent {


  perguntaAtiva = 0;

  alternarPergunta(pergunta: number) {

    if (pergunta === this.perguntaAtiva) {
      pergunta = 0;
    }

    this.perguntaAtiva = pergunta
    return this.perguntaAtiva;
  }
}

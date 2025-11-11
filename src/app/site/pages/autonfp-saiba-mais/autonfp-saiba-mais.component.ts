import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-autonfp-saiba-mais',
  templateUrl: './autonfp-saiba-mais.component.html',
  styleUrls: ['./autonfp-saiba-mais.component.scss']
})
export class AutonfpSaibaMaisComponent implements OnInit, OnDestroy {
  periodicidade: 'mensal' | 'anual' = 'anual';
  quantidadeAcessos: number = 1;
  descontoPorAcesso: number = 0;

  cards = [
    { icon: 'fa-solid fa-receipt p-3 bg-primary rounded-circle text-white', title: 'Nunca Perca um Cupom', description: 'Todos os cupons são registrados automaticamente e armazenados com segurança. Rastreamento completo de cada documento.' },
    { icon: 'fa-solid fa-user-gear p-3 bg-primary rounded-circle text-white', title: 'Gerenciamento por Voluntário', description: 'Atribua responsáveis por cupons e audite todas as operações realizadas.' },
    { icon: 'fa-solid fa-chart-line p-3 bg-primary rounded-circle text-white', title: 'Relatórios Detalhados', description: 'Acompanhe cada cupom emitido com relatórios em tempo real e estatísticas inteligentes.' },
    { icon: 'fa-solid fa-shield-halved p-3 bg-primary rounded-circle text-white', title: 'Integração com Certificado Digital', description: 'Suporte completo para certificados digitais (CPF). Emissão em conformidade com a legislação.' },
    { icon: 'fa-solid fa-lock p-3 bg-primary rounded-circle text-white', title: 'Segurança de Ponta', description: 'Criptografia end-to-end e conformidade com padrões de segurança.' },
    { icon: 'fa-solid fa-headset p-3 bg-primary rounded-circle text-white', title: 'Suporte Técnico', description: 'Equipe especializada pronta para ajudar com dúvidas e problemas.' }
  ];

  planos = [
    {
      nome: 'Plano Essencial', preco: 139, botao: 'Começar agora', cor: 'text-primary', popular: false,
      recursos: [
        { nome: 'Suporte por e-mail e WhatsApp', ok: true },
        { nome: 'Relatórios avançados', ok: true },
        { nome: 'Acesso mobile para escanear', ok: true },
        { nome: 'Leitora Inteligente ', ok: false },
        { nome: 'Certificado Digital', ok: false }
      ]
    },
    {
      nome: 'Plano Intermediário', preco: 159, botao: 'Começar agora', cor: 'text-success ', popular: true,
      recursos: [
        { nome: 'Suporte por e-mail e WhatsApp', ok: true },
        { nome: 'Relatórios avançados', ok: true },
        { nome: 'Acesso mobile para escanear', ok: true },
        { nome: 'Leitora Inteligente ou Certificado Digital', ok: true },
      ]
    },
    {
      nome: 'Plano Institucional', preco: 199, botao: 'Começar agora', cor: 'text-primary', popular: false,
      recursos: [
        { nome: 'Suporte por e-mail e WhatsApp', ok: true },
        { nome: 'Relatórios avançados', ok: true },
        { nome: 'Acesso mobile para escanear', ok: true },
        { nome: 'Leitora Inteligente', ok: true },
        { nome: 'Certificado Digital', ok: true }
      ]
    },
  ];

  alterarPeriodicidade(tipo: 'mensal' | 'anual') {
    this.periodicidade = tipo;
  }

  calcularDesconto() {
    const desconto = (this.quantidadeAcessos - 1) * (0.20 / 9);
    this.descontoPorAcesso = Math.min(Number(desconto.toFixed(2)), 0.20);
  }

  aumentarAcessos() {
    this.quantidadeAcessos++;
    this.calcularDesconto();
  }

  diminuirAcessos() {
    if (this.quantidadeAcessos > 1) {
      this.quantidadeAcessos--;
      this.calcularDesconto();
    }
  }

  calcularPrecoFinal(plano: any): number {
    let preco = plano.preco;

    if (this.periodicidade === 'anual') {
      preco *= 0.8;
    }

    preco *= 1 - this.descontoPorAcesso;

    return preco * this.quantidadeAcessos;
  }


  contador: string = '';
  private intervalo: any;

  ngOnInit() {
    this.atualizarContador();
    this.intervalo = setInterval(() => this.atualizarContador(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalo) clearInterval(this.intervalo);
  }

  private atualizarContador() {
    const agora = new Date();
    const fimDoDia = new Date();
    fimDoDia.setHours(18, 59, 59, 999);

    const diff = fimDoDia.getTime() - agora.getTime();

    if (diff <= 0) {
      this.contador = '00:00:00';
      clearInterval(this.intervalo);
      return;
    }

    const horas = Math.floor(diff / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    this.contador =
      `${horas.toString().padStart(2, '0')}:` +
      `${minutos.toString().padStart(2, '0')}:` +
      `${segundos.toString().padStart(2, '0')}`;
  }


}

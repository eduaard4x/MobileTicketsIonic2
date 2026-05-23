import { Component } from '@angular/core';
import { Ticket } from '../services/ticket';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private ticketService: Ticket) {}

  emitirSP() {
    this.ticketService.emitirSenha('SP');
  }

  emitirSG() {
    this.ticketService.emitirSenha('SG');
  }

  emitirSE() {
    this.ticketService.emitirSenha('SE');
  }

  chamarSenha() {
    this.ticketService.chamarProximaSenha();
  }

  getFilaSP() {
    return this.ticketService.filaSP;
  }

  getFilaSG() {
    return this.ticketService.filaSG;
  }

  getFilaSE() {
    return this.ticketService.filaSE;
  }

  getUltimasChamadas() {
    return this.ticketService.ultimasChamadas;
  }

}
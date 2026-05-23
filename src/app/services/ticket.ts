import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ticket {

  filaSP: string[] = [];
  filaSG: string[] = [];
  filaSE: string[] = [];

  ultimasChamadas: string[] = [];

  contadorSP: number = 1;
  contadorSG: number = 1;
  contadorSE: number = 1;

  ultimaPrioridade: string = '';

  constructor() { }

  emitirSenha(tipo: string) {

    let senha = '';

    if (tipo === 'SP') {

      senha = 'SP' + this.contadorSP.toString().padStart(2, '0');

      this.filaSP.push(senha);

      this.contadorSP++;

    }

    else if (tipo === 'SG') {

      senha = 'SG' + this.contadorSG.toString().padStart(2, '0');

      this.filaSG.push(senha);

      this.contadorSG++;

    }

    else if (tipo === 'SE') {

      senha = 'SE' + this.contadorSE.toString().padStart(2, '0');

      this.filaSE.push(senha);

      this.contadorSE++;

    }

  }

  chamarProximaSenha() {

    let senha = '';

    if (this.ultimaPrioridade !== 'SP' && this.filaSP.length > 0) {

      senha = this.filaSP.shift()!;
      this.ultimaPrioridade = 'SP';

    }

    else if (this.filaSE.length > 0) {

      senha = this.filaSE.shift()!;
      this.ultimaPrioridade = 'SE';

    }

    else if (this.filaSG.length > 0) {

      senha = this.filaSG.shift()!;
      this.ultimaPrioridade = 'SG';

    }

    if (senha !== '') {

      this.ultimasChamadas.unshift(senha);

      if (this.ultimasChamadas.length > 5) {

        this.ultimasChamadas.pop();

      }

    }

  }

}
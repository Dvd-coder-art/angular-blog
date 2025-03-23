import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover:string = ""
  cardTitle:string = "Novo angular lançado"
  cardDescription:string = "Está versão veio com diversar modificações"

}

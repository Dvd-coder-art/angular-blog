import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  
  @Input()
  photoCover:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  Id:string = "0"
}

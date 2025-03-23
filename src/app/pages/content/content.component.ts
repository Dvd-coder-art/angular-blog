import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  @Input()
  photoCover:string = ""
  @Input()
  contentTitle:string = ""
  @Input()
  contentDescription:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id"); // Obtém o ID da URL corretamente
      console.log("ID da rota:", this.id); // Debug
  
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null) {
  const result = dataFake.find(article => article.id === id);

  if (!result) {
    console.warn("Artigo não encontrado para o ID:", id);
    return;
  }

  this.contentTitle = result.title;
  this.contentDescription = result.description;
  this.photoCover = result.photoCover;
}

 

}

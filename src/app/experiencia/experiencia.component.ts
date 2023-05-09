import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: any=[];
 
  
  constructor(private portfolioService: PortfolioService) {}


  ngOnInit(): void {

    this.portfolioService.getDatos().subscribe(portfolio=>{
      // console.log(portfolio);
      this.experiencias=portfolio.experiencias;
     
    
  })


}
}

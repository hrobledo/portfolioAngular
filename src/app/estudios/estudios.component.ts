import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: any=[];




  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {

    this.portfolioService.getDatos().subscribe(portfolio=>{
      // console.log(portfolio);
      this.estudios=portfolio.estudios;
     
    
  })

  }
}   

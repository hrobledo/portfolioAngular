import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
  fotoPerfil: string = '';
  acercaDeMi: string = '';




  constructor(private portfolioService:PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio=>{
      console.log(portfolio);
      this.fotoPerfil=portfolio.fotoPerfil;
      this.acercaDeMi=portfolio.acercaDeMi;      




  })
}   
}
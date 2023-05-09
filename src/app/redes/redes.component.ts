import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
linked: string = '';
iconLinked: string = '';
git: string = '';
iconGit: string = '';
wpp: string = '';
iconWpp: string = '';




  constructor(private portfolioService:PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio=>{
      console.log(portfolio);
      this.linked=portfolio.linked;
      this.iconLinked=portfolio.iconLinked;
      this.git=portfolio.git;
      this.iconGit=portfolio.iconGit;
      this.wpp=portfolio.wpp;
      this.iconWpp=portfolio.iconWpp;
         




  })
}   
}



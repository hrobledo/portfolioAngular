import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
foot: string = '';

  constructor(private portfolioService:PortfolioService) {}

  ngOnInit(): void {

    this.portfolioService.getDatos().subscribe(portfolio=>{
     
      this.foot=portfolio.foot;
  })
}   
}
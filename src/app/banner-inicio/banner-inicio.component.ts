import { Component, OnInit } from '@angular/core';
//se importa el servicio en el componente
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-banner-inicio',
  templateUrl: './banner-inicio.component.html',
  styleUrls: ['./banner-inicio.component.css']
})
export class BannerInicioComponent implements OnInit {
//creamos variable de instancia para almacenar los datos necesarios
  nombre: string = '';
  apellido: string = '';
  stack: string = '';
 
  //inyectamos el servicio para tener acceso en la clase a los Métodos
  constructor(private portfolioService:PortfolioService) {}



  ngOnInit(): void {
    //aqui almacenamos los datos recuperados de json en la variable de instancia
    this.portfolioService.getDatos().subscribe(portfolio=>{
      console.log(portfolio);
      this.nombre=portfolio.nombre;
      this.apellido=portfolio.apellido;
      this.stack=portfolio.stack;

      

    })
  }
}   

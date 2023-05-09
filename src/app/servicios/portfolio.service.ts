import { Injectable } from '@angular/core';
//Se suscribe para recibir respuestas de manera asíncrona
import { Observable } from 'rxjs';

//Esto es para hacer peticiones
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  //esl 1er http recibe nombre de alias
  constructor(private http:HttpClient) { }

  //Método Observable que devuelve los datos del portfolio.json y dice any xq son datos de cualquier tipo(fechas, numeros, letras)
  getDatos():Observable<any>{
  //Aqui llamamos al json con su path -ruta-, o bien en sul ulgar se puede poner una URL para traer datos de un json online.
    return this.http.get('./assets/json/portfolio.json');
  }
}

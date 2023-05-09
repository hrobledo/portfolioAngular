import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BannerInicioComponent } from './banner-inicio/banner-inicio.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { NavbardashComponent } from './dashboard/navbardash/navbardash.component';
import { AcercademidashComponent } from './dashboard/acercademidash/acercademidash.component';

import { FotoperfilComponent } from './modals/fotoperfil/fotoperfil.component';
import { AcercadeComponent } from './modals/acercade/acercade.component';
import { ExperdashComponent } from './dashboard/experdash/experdash.component';
import { ExpermodalComponent } from './modals/expermodal/expermodal.component';

import { ExperdescripcionmodalComponent } from './modals/experdescripcionmodal/experdescripcionmodal.component';
import { Expermodal2Component } from './modals/expermodal2/expermodal2.component';
import { Expermodal3Component } from './modals/expermodal3/expermodal3.component';
import { Experdescripcionmodal2Component } from './modals/experdescripcionmodal2/experdescripcionmodal2.component';
import { Experdescripcionmodal3Component } from './modals/experdescripcionmodal3/experdescripcionmodal3.component';
import { EstudiosdashComponent } from './dashboard/estudiosdash/estudiosdash.component';
import { Diplomamodal1Component } from './modals/diplomamodal1/diplomamodal1.component';
import { Diplomamodal2Component } from './modals/diplomamodal2/diplomamodal2.component';
import { Diplomamodal3Component } from './modals/diplomamodal3/diplomamodal3.component';
import { Diplomamodal4Component } from './modals/diplomamodal4/diplomamodal4.component';
import { Diplomamodal5Component } from './modals/diplomamodal5/diplomamodal5.component';
import { Diplomamodal6Component } from './modals/diplomamodal6/diplomamodal6.component';
import { Diplomamodal7Component } from './modals/diplomamodal7/diplomamodal7.component';
import { Diplomamodal8Component } from './modals/diplomamodal8/diplomamodal8.component';
import { HabilidadesdashComponent } from './dashboard/habilidadesdash/habilidadesdash.component';
import { ProyectosdashComponent } from './dashboard/proyectosdash/proyectosdash.component';
import { FooterdashComponent } from './dashboard/footerdash/footerdash.component';
import { ProyectounomodalComponent } from './modals/proyectounomodal/proyectounomodal.component';
import { ProyectounotextmodalComponent } from './modals/proyectounotextmodal/proyectounotextmodal.component';
import { ProyectodosmodalComponent } from './modals/proyectodosmodal/proyectodosmodal.component';
import { ProyectodostextmodalComponent } from './modals/proyectodostextmodal/proyectodostextmodal.component';
import { ProyectotresmodalComponent } from './modals/proyectotresmodal/proyectotresmodal.component';
import { ProyectotrestextmodalComponent } from './modals/proyectotrestextmodal/proyectotrestextmodal.component';

import { GitmodalComponent } from './modals/gitmodal/gitmodal.component';
import { WppmodalComponent } from './modals/wppmodal/wppmodal.component';
import { BannerdashComponent } from './dashboard/bannerdash/bannerdash.component';
import { BannermodalComponent } from './modals/bannermodal/bannermodal.component';
import { LinkedinmodalComponent } from './modals/linkedinmodal/linkedinmodal.component';

import { PortfolioService } from './servicios/portfolio.service';








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    BannerInicioComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    RedesComponent,
    DashboardComponent,
    ErrorComponent,
    IndexComponent,
    NavbardashComponent,
    AcercademidashComponent,
   
    FotoperfilComponent,
    AcercadeComponent,
    ExperdashComponent,
    ExpermodalComponent,
    
    ExperdescripcionmodalComponent,
         Expermodal2Component,
         Expermodal3Component,
         Experdescripcionmodal2Component,
         Experdescripcionmodal3Component,
         EstudiosdashComponent,
         Diplomamodal1Component,
         Diplomamodal2Component,
         Diplomamodal3Component,
         Diplomamodal4Component,
         Diplomamodal5Component,
         Diplomamodal6Component,
         Diplomamodal7Component,
         Diplomamodal8Component,
         HabilidadesdashComponent,
         ProyectosdashComponent,
         FooterdashComponent,
         ProyectounomodalComponent,
         ProyectounotextmodalComponent,
         ProyectodosmodalComponent,
         ProyectodostextmodalComponent,
         ProyectotresmodalComponent,
         ProyectotrestextmodalComponent,
        
         GitmodalComponent,
         WppmodalComponent,
         BannerdashComponent,
         BannermodalComponent,
         LinkedinmodalComponent,
   
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

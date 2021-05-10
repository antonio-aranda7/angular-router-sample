import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Regístrese RouteryRoutes*/
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
// Definir una ruta comodín
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/*// Regístrese RouteryRoutes
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent },
  // Definir una ruta comodín
  { path: '**', component: PageNotFoundComponent },
];*/

// Configurar redireccionamientos
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes',        component: HeroListComponent }, //En esta aplicación, el enrutador debe seleccionar la ruta hacia el HeroListComponentsolo cuando la URL completa coincida '', así que establezca el pathMatchvalor en 'full'.
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' }, //Una ruta de redireccionamiento requiere una pathMatchpropiedad que le diga al enrutador cómo hacer coincidir una URL con la ruta de una ruta.
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    /* Regístrese RouteryRoutes*/
    FormsModule,
    RouterModule.forRoot( //Configure el módulo del enrutador con RouterModule.forRoot().
      appRoutes,
      { enableTracing: true } // <-- solo con fines de depuración
    ) // <-- método devuelve un módulo que contiene el Routerproveedor de servicios configurado 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

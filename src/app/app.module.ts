import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablavistaComponent } from './tablavista/tablavista.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaejemploComponent } from './pages/tablaejemplo/tablaejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    TablavistaComponent,
    InicioComponent,
    FooterComponent,
    TablaejemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FilmesModule } from './filmes/filmes.module';
import { AlertaComponent } from './shared/components/alerta/alerta.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';
import { TopoComponent } from './shared/components/topo/topo.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [AppComponent, TopoComponent, RodapeComponent, AlertaComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    FilmesModule,
  ],
  entryComponents: [AlertaComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

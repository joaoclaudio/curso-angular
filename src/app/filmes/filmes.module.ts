import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MaterialModule } from '../shared/material/material.module';
import { CamposModule } from './../shared/components/campos/campos.module';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import { VisualizarFilmeComponent } from './visualizar-filme/visualizar-filme.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    InfiniteScrollModule,
  ],
  declarations: [CadastroFilmesComponent, ListagemFilmesComponent, VisualizarFilmeComponent],
})
export class FilmesModule {}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigParams } from './../shared/models/config-params';
import { Filme } from './../shared/models/filme';
import { ConfigParamsService } from './config-params.service';

const url = 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  constructor(
    private http: HttpClient,
    private configParamsService: ConfigParamsService
  ) {}

  public salvar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(url, filme);
  }

  public editar(filme: Filme): Observable<Filme> {
    return this.http.put<Filme>(url + filme.id, filme);
  }

  public listar(config: ConfigParams): Observable<Filme[]> {
    return this.http.get<Filme[]>(url, {
      params: this.configParamsService.configurarParametros(config),
    });
  }

  public visualizar(id: number): Observable<Filme> {
    return this.http.get<Filme>(url + id);
  }

  public excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }
}

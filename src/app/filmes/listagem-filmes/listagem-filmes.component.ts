import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import { FilmesService } from './../../core/filmes.service';
import { ConfigParams } from './../../shared/models/config-params';
import { Filme } from './../../shared/models/filme';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss'],
})
export class ListagemFilmesComponent implements OnInit {
  private config: ConfigParams = {
    pagina: 0,
    limite: 4,
    campo: [],
    pesquisa: '',
  };

  readonly semImagem =
    'https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif';
  public filmes: Filme[] = [];
  public filtrosListagem: FormGroup;
  public categorias = [
    '',
    'Ação',
    'Aventura',
    'Drama',
    'Ficção Científica',
    'Romance',
    'Terror',
  ];

  constructor(
    private filmeService: FilmesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.filtrosListagem = this.fb.group({
      texto: [''],
      genero: [''],
    });

    this.filtrosListagem
      .get('texto')
      .valueChanges.pipe(debounceTime(500))
      .subscribe((value) => {
        this.config.pesquisa = value;
        this.resetarConsultas();
      });

    this.filtrosListagem
      .get('genero')
      .valueChanges.pipe(debounceTime(500))
      .subscribe((value) => {
        this.config.campo = [{ tipo: 'genero', valor: value }];
        this.resetarConsultas();
      });

    this.resetarConsultas();
  }

  public onScroll(): void {
    console.log('scrolled');
    this.listarFilmes();
  }

  public abrir(id: number): void {
    this.router.navigateByUrl('/filmes/' + id);
  }

  private listarFilmes(): void {
    this.config.pagina++;
    this.filmeService.listar(this.config).subscribe((filmes: Filme[]) => {
      this.filmes.push(...filmes);
    });
  }

  private resetarConsultas(): void {
    this.config.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }
}

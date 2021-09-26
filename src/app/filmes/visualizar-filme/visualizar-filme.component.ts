import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { Alerta } from 'src/app/shared/models/alerta';
import { Filme } from 'src/app/shared/models/filme';

import { FilmesService } from './../../core/filmes.service';

@Component({
  selector: 'dio-visualizar-filme',
  templateUrl: './visualizar-filme.component.html',
  styleUrls: ['./visualizar-filme.component.scss'],
})
export class VisualizarFilmeComponent implements OnInit {
  readonly semImagem =
    'https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif';

  id: number;
  filme: Filme;

  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private filmesService: FilmesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.visualizar();
  }

  public excluir(): void {
    const config = {
      data: {
        titulo: 'Deseja realmente excluir?',
        descricao: 'Confirma aí',
        corBtnCancelar: 'primary',
        corBtnSucesso: 'warn',
        possuiBtnFechar: true,
      } as Alerta,
    };
    const dialogRef = this.dialog.open(AlertaComponent, config);

    dialogRef.afterClosed().subscribe((opcao) => {
      if (opcao) {
        this.filmesService.excluir(this.id).subscribe(() => {
          this.router.navigateByUrl('/filmes');
        });
      }
    });
  }

  public editar(): void {
    this.router.navigateByUrl('/filmes/cadastro/' + this.id);
  }

  private visualizar(): void {
    this.filmesService.visualizar(this.id).subscribe((filme: Filme) => {
      this.filme = filme;
    });
  }
}

import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConfigParams } from './../shared/models/config-params';

@Injectable({
  providedIn: 'root',
})
export class ConfigParamsService {
  constructor() {}

  public configurarParametros(config: ConfigParams): HttpParams {
    let httpParams = new HttpParams().set('_sort', 'id').set('_order', 'desc');

    if (config.pagina) {
      httpParams = httpParams.set('_page', config.pagina.toString());
    }

    if (config.limite) {
      httpParams = httpParams.set('_limit', config.limite.toString());
    }

    if (config.pesquisa) {
      httpParams = httpParams.set('q', config.pesquisa);
    }

    if (config.campo) {
      config.campo.forEach((campo) => {
        if (campo.valor) {
          httpParams = httpParams.set(campo.tipo, campo.valor);
        }
      });
    }

    return httpParams;
  }
}

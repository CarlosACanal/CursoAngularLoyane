import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from "src/app/shared/log.service";

@Injectable()
export class CursoService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    constructor(
        private logService: LogService
    ) {

    }

    private cursos: string[] = ['Angular', 'Java', 'Outro curso'];

    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos')
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.consoleLog(`curso ${curso} adicionado!`)
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursoService.criouNovoCurso.emit(curso)
    }

}
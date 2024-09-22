import { HttpEvent, HttpEventType } from '@angular/common/http';
import { UploadFileService } from './../upload-file.service';
import { Component, OnInit } from '@angular/core';
import { filterResponse, uploadProgress } from 'src/app/shared/rxjs-operators';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  selectedFile!: Set<File>;
  fileName?: string;

  constructor(
    private uploadService: UploadFileService
  ) { }

  changeFile(event: any) {
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;
    this.selectedFile?.add(selectedFiles[0]);
    this.fileName = selectedFiles[0].name;
    console.log(this.fileName)
  }

  onUpload() {
    this.uploadService.upload(
      this.selectedFile,
      'https:localhost:8000/upload'
    ).pipe(
      uploadProgress(progress => {
        // informação de quando ja foi upado
        console.log(progress)
      }),
      filterResponse()
    )
      .subscribe(response => {
        console.log('Upload concluido')
      })
    // .subscribe((event: HttpEvent<any>) => {
    //   console.log(event);
    //   if (event.type == HttpEventType.Response) {
    //     console.log("Upload concluido")
    //   } else if (event.type == HttpEventType.UploadProgress) {
    //     if (event.total) {
    //       const percentDone = Math.round((event.loaded * 100) / event.total);
    //       console.log("Progress ->" + percentDone)
    //     }
    //   }
    // })
  }

  onDownloadPdf() {
    this.uploadService.download('/downloadPDF').subscribe((res: any) => {
      console.log("arquivo -> ", res);
      const file = new Blob([res], {
        type: res.type
      });

      // Esse if é pra verificar se e internet Explorer, ja q o metodo nao funciona nele
      const wn = window.navigator as any;
      if (window.navigator && wn?.msSaveOrOpenBlob) {
        wn.msSaveOrOpenBlob(file)
      }

      // aqui nós criamos o arquivo com o que recebemos da requisição
      const blob = window.URL.createObjectURL(file);
      // já essa const blob cria uma janela que irá abrir o arquivo

      const link = document.createElement('a');
      link.href = blob;
      // link.download = '' (Dar um nome se quiser)
      // Então aqui criamos um elemento de link

      link.click();
      // fazemos o acionamento desse link através do click e assim o download começa

      // E CASO SEJA NECESSÁRIO EM FIREFOX:
      // comentamos o link.click() acima
      link.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));

      // caso seja firefox
      setTimeout(() => {
        window.URL.revokeObjectURL(blob);
      link.remove();
      }, 100)

      window.URL.revokeObjectURL(blob);
      link.remove();
      // E aqui destruimos a pagina
    });
    
  }

  onDownloadEx() {
    this.uploadService.download('/downloadEx').subscribe((res: any) => {
      console.log("arquivo -> ", res)
    })
  }

  ngOnInit(): void {
  }

}

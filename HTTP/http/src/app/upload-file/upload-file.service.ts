import { Observer, Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(
    private http: HttpClient
  ) { }

  upload(files: Set<File>, url: string) {
    const formData = new FormData();
    files?.forEach(f => {
      // caso tenha mais de um arquivo
      formData.append('file', f, f.name)
      //passo o tipo, o arquivo (que é o Blob) e o nome do arquivo
    })
    // Agora eu monto a requisição
    const req = new HttpRequest("POST", url, formData, {
      reportProgress: true
      // Com esse reporProgress vamos ser capazes de acompanhar a porcentagem desse upload
    })
    return this.http.request(req);
    // Aqui só retorna a req
  }

  download(url: string) {
    return this.http.get(url, {
      responseType: 'blob' as 'json'
      // poderiamos colocar o reportProgress tbm, mas ai o back-end precisa voltar o content-length (é um header)
    });
  }
}

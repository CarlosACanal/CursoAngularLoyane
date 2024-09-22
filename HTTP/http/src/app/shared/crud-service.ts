import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { delay, take } from "rxjs";

export class CrudService<T> {
    constructor(public http: HttpClient, private API_URL: string) { }

    list() {
        return this.http.get<T[]>(`${this.API_URL}`).pipe(
            delay(1000)
        );
    }

    getById(id: any) {
        return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
    }

    create(curso: T) {
        return this.http.post(`${this.API_URL}`, curso).pipe(take(1));
    }

    update(curso: any) {
        return this.http.put(`${this.API_URL}/${curso?.id}`, curso).pipe(take(1));
    }

    remove(id: any) {
        return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
    }
}

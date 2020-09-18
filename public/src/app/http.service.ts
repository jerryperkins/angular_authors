import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  add_author(new_author){
    return this._http.post<{message: string, errors: string}>('/author', new_author)
  }
  show_authors(){
    return this._http.get<[]>('/author')
  }

  delete_author(id){
    return this._http.delete(`author/${id}`)
  }

  show_single_author(id){
    return this._http.get(`/author/${id}`)
  }

  edit_author(id, author_to_edit){
    return this._http.put<{message: string, errors: string}>(`/author/${id}`, author_to_edit)
  }
}

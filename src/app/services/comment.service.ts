import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './../Comment';
import { Response } from './../Response';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseApiUrl = 'http://127.0.0.1:3333/';
  private apiUrl = `${this.baseApiUrl}api/moments/comments`;
  constructor(private http: HttpClient) {}

  createComment(data: Comment): Observable<Response<Comment>> {
    return this.http.post<Response<Comment>>(this.apiUrl, data);
  }
}

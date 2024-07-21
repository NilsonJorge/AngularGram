import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from './../Moment';
import { Response } from './../Response';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private baseApiUrl = 'http://127.0.0.1:3333/';
  private apiUrl = `${this.baseApiUrl}api/moments`;
  constructor(private http: HttpClient) {}

  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}

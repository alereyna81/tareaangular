import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioazureService {
  private apiUrl = 'https://tecfunctionapp.azurewebsites.net/api/PruebaHttp?code=QgIvC0HuTxcbEsxjm5-jjUw9eDyCPnbkcCECzBu0vaYYAzFu__u6vA%3D%3D';
//  'http://localhost:7071/api/PruebaHttp'; 

  constructor(private http: HttpClient) { }

  sendName(name: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { name });
  }
}
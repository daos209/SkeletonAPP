import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api.example.com'; // Reemplaza con la URL de tu API
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('An error occurred:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  // Obtener datos de la API
  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/data`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Método GET para obtener los usuarios
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método POST para agregar un nuevo usuario
  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
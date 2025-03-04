import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  obtenerProductos(){
    return this.http.get('http://localhost:5156/api/Producto/ObtenerProductos')
  }
}
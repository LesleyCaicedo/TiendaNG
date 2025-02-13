import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-prueba',
  standalone: false,
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss'
})
export class PruebaComponent {
  nombre:string = 'Pepe'

  constructor(private ps: ProductoService) {}

  obtenerDatos() {
    this.ps.obtenerProductos().subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.log(error)
      }
    });
  }
}

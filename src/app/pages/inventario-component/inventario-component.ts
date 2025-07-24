import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from '../../shared/producto.interface';

@Component({
  selector: 'app-inventario',
  imports: [CommonModule, RouterModule],
  templateUrl: './inventario-component.html',
  styleUrl: './inventario-component.scss'
})
export class InventarioComponent implements OnInit {
  rolUsuario: string | null = null;

productos: Producto[] = [
    { nombre: 'Tarjeta de video', cantidad: 10 },
    { nombre: 'Procesador', cantidad: 5 },
    { nombre: 'Memoria RAM', cantidad: 20 },
]

  ngOnInit(): void {
    this.rolUsuario = localStorage.getItem('rolUsuario');
    if (!this.rolUsuario) {
      console.error('No se ha guardado el rol del usuario.');
    } else {
      console.log(`Rol del usuario: ${this.rolUsuario}`);
    }
  }

  vaciarInventario(): void {
    if (this.rolUsuario === 'admin') {
      this.productos = [];
      console.log('Inventario vaciado.');
    } else {
      console.warn('Acción no permitida: solo el administrador puede vaciar el inventario.');
    }
  }
}
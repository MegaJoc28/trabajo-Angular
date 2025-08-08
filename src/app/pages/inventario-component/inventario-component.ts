import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TablaInventario } from './tabla-inventario/tabla-inventario';

@Component({
  selector: 'app-inventario',
  imports: [CommonModule, RouterModule, TablaInventario],
  templateUrl: './inventario-component.html',
  styleUrl: './inventario-component.scss'
})
export class InventarioComponent{

}
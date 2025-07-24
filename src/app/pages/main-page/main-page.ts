import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {
  constructor(private router: Router) {}

  funcionGuardarRol(rol: string): void {
    localStorage.setItem('rolUsuario', rol);
    this.router.navigate(['/inventario']);
  }
}

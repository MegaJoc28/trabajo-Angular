import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RolButton } from '../../shared/components/rol-button/rol-button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalConfirm } from '../../shared/components/modal-confirm/modal-confirm';

@Component({
  selector: 'app-main-page',
  imports: [CommonModule, RouterModule, RolButton, MatDialogModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {
  constructor(private router: Router, private dialog: MatDialog) { }

  abrirModalGuardarRol(rol: string): void {
    const mensaje = `Estas a punto de ingresar como * ${rol} *. ¿Deseas continuar?`;

    const dialogRef = this.dialog.open(ModalConfirm, {
      data: { mensaje: mensaje, btnNombre: 'Aceptar' },
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        localStorage.setItem('rolUsuario', rol);
        this.router.navigate(['/inventario']);
      }
    });
  }
}

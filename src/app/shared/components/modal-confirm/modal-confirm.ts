import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './modal-confirm.html',
  styleUrl: './modal-confirm.scss'
})
export class ModalConfirm {
constructor(
  public dialogRef: MatDialogRef<ModalConfirm>,
  @Inject(MAT_DIALOG_DATA) public data: { mensaje: string, btnNombre: string }
) {}

cerrar() {
  this.dialogRef.close();
 }
}

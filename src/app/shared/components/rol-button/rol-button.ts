import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rol-button',
  imports: [CommonModule],
  template: `
  <button (click)="onClick()">{{ rol | titlecase }}</button>
  `,
  styleUrl: './rol-button.scss'
})
export class RolButton {
  @Input() rol: string = '';

  @Output() rolSeleccionado = new EventEmitter<string>();

  onClick(): void {
   this.rolSeleccionado.emit(this.rol);
  }
}

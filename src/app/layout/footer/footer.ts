import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  anio: number;

  constructor(){
    this.anio = new Date().getFullYear();
  }
}

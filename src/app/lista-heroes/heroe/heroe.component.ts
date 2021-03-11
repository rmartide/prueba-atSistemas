import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroe } from '../../model/Heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent {

  @Input()
  heroe!: Heroe;

  @Output()
  eliminarHeroe = new EventEmitter<Heroe>()
}

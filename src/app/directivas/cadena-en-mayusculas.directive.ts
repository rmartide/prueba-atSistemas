import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCadenaEnMayusculas]',
})
export class CadenaEnMayusculasDirective {
  constructor() {}
  @HostListener('input', ['$event']) onInput($event: any) {
    $event.target.value = $event.target.value.toUpperCase();
  }
}

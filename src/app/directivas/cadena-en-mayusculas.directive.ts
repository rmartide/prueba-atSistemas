import { Directive, HostListener, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appCadenaEnMayusculas]',
})
export class CadenaEnMayusculasDirective {
  @Input() control:any;
  constructor() {}
  @HostListener('input', ['$event']) onInputChange($event: any) {
    (this.control as FormControl).setValue($event.srcElement.value.toUpperCase());
  }
}

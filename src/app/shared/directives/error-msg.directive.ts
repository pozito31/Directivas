import { Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective {

  texto1: string = 'Jessica Pozo';
  color : string = 'green';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required ]
  });

  constructor( private fb: FormBuilder ) { }

  tieneError( campo: string ): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }


  cambiarNombre() {
    this.texto1 = Math.random().toString();
  }

  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  public form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    kind: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
  })

  public save(): void {
    if (this.form.valid) {
      console.log(this.form.value)
    } else {
      alert('Formulário Inválido')
    }
  }
}
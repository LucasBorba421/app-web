import { Component, OnInit } from '@angular/core';
import { RecommendationModel } from '../../models/recommendation.model';
import { dataset } from '../../data/recommendations';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit{
  public recommendations: RecommendationModel[] = dataset;

  public kinds: string[] = []

  ngOnInit(): void {
    dataset.forEach((item) => {
      if (!this.kinds.includes(item.kind)){
        this.kinds.push(item.kind);
      }
    })
  }

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
import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../models/category.model';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit{
 constructor( private httpClient: HttpClient, private router: Router){}

  public categories: CategoryModel[] = []


  public form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    kind: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
  })

  
  public ngOnInit(): void {
    this.loadCategories();
  }

  public save(): void {

    if (this.form.valid) {
      console.log(this.form.value)
    } else {
      alert('Formulário Inválido')
    }
  }
}
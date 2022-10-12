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

  public categories: CategoryModel[] = [];
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
    const url = 'https://jp-recommendations-api.herokuapp.com/recommendation';

    if (this.form.valid) {
     this.httpClient.post(url, this.form.value).toPromise().then((_) => {
       this.router.navigateByUrl('');
     }).catch((response) => {
       alert(response.error.error);
     });
    } else {
      alert('Formulário Inválido')
    }
  }

  private loadCategories(): void {
    const url = 'https://jp-recommendations-api.herokuapp.com/categories';
    this.httpClient.get<CategoryModel[]>(url).toPromise().then((data) => {
        //this.categories = data;
      });
  }
}
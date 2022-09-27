import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecommendationModel } from './../../models/recommendation.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  constructor( private route: ActivatedRoute ) {}

  }
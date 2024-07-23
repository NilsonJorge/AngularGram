import { Component } from '@angular/core';

import { MomentService } from './../../../services/moment.service';
import { Moment } from './../../../Moment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = 'http://127.0.0.1:3333/';

  //todo search

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items: any) => {
      const data = items.data;

      data.map((item: any) => {
        // item.created_at = new Date(item.created_at).toLocaleDateString('pt-BR');

      });
      this.allMoments = data;
      this.moments = data;
    });
  }
}

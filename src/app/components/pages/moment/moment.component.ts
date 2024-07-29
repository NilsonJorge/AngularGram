import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MomentService } from './../../../services/moment.service';
import { Moment } from './../../../Moment';
import { CommonModule } from '@angular/common';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-moment',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
templateUrl: './moment.component.html',
  styleUrl: './moment.component.css',
})
export class MomentComponent {
  moment?: Moment;
  baseApiUrl = 'http://127.0.0.1:3333/';

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService
      .getMoment(id)
      .subscribe((item) => (this.moment = item.data));
  }
}

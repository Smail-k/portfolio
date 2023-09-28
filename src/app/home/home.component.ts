import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import profileData from '../data/profile.json';
import projectData from '../data/projects.json';
import { trigger, transition, style, animate ,keyframes} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1500ms', style({ opacity: 1 })),
  ]),
]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.scss'],
  animations : [fadeIn]
})
export class HomeComponent implements OnInit {

  public profileData;
  public projectData;

  constructor(
    private appservice: ServiceService,
    private route: ActivatedRoute,
    private router: Router  
  ) {
    this.profileData = profileData;
    this.projectData = projectData;
  }

  ngOnInit() {
  }

  
}

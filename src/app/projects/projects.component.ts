import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import profileData from '../data/profile.json';
import projectData from '../data/projects.json';
import { trigger, transition, style, animate ,keyframes} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1000ms', style({ opacity: 1 })),
  ]),
]);
export const rotateAnimation = trigger('rotateAnimation', [
  transition(':enter', [
    animate('500ms', keyframes([
      style({ transform: 'rotate(0deg)', offset: 0 }),
      style({ transform: 'rotate(90deg)', offset: 0.25 }),
      style({ transform: 'rotate(180deg)', offset: 0.5 }),
      style({ transform: 'rotate(270deg)', offset: 0.75 }),
      style({ transform: 'rotate(360deg)', offset: 1 }),
    ])),
  ]),
]);
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [fadeIn,rotateAnimation], // Include your animation trigger here
})
export class ProjectsComponent implements OnInit {

  public profileData:any;
  public projectData:any;

  constructor(
    private appservice: ServiceService,
    private route:ActivatedRoute
    ) {
      this.profileData = profileData;
      this.projectData = projectData;  
  }

  ngOnInit() {
    //this.projectData = this.appservice.getProjectData();
    console.log(this.route.snapshot.params)
    this.route.params.subscribe(param => {
      let val:string = this.route.snapshot.params["category"];

      if (val == 'java') {
        this.projectData=projectData['java'];
      } else if (val == 'js') {
        this.projectData=projectData['js'];
      } else if (val == 'devops') {
        this.projectData=projectData['devops'];
      }
    })
    
    //this.projectData=projectData;
    console.log(this.projectData)
  }

  toggleProject(val : any) {
    
    //this.router.navigateByUrl("/projects")// (['/projects', { category: val }]);
   // this.router.navigate(['/projects', { category: val }]);

  }
}

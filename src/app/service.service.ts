import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public projectData:any;
  
  constructor() { }

  setProjectData(data:any) {
    this.projectData = data;
  }

  getProjectData() {
    return this.projectData;
  }
}

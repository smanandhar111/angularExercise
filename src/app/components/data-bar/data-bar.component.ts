import { Component, OnInit } from '@angular/core';
import {EmployeeDataModel, StatusBarModel} from './statusBar.model';

@Component({
  selector: 'app-data-bar',
  templateUrl: './data-bar.component.html',
  styleUrls: ['./data-bar.component.scss']
})
export class DataBarComponent implements OnInit {
  counter = 0;
  statusBar: StatusBarModel[] = [
    {title: 'status', iconClass: 'fa-heartbeat', status: 'active'},
    {title: 'share', iconClass: 'fa-share-alt', status: 'active'},
    {title: 'filter', iconClass: 'fa-filter', status: 'active'},
    {title: 'calendar', iconClass: 'fa-calendar-o', status: 'active'},
  ];
  dataFlow: any = [
    {label: 'data', content: [
        {iconClass: 'fa-download'},
        {iconClass: 'fa-upload'},
        {iconClass: 'fa-refresh'}
      ]
    }
  ];
  employeeDataModel: EmployeeDataModel[] = [
    {name: 'John Doe', age: 34, favLang: 'Frontend Developer'},
    {name: 'Mike Milder', age: 32, favLang: 'Backend Developer'},
    {name: 'Joe Burns', age: 25, favLang: 'Frontend Developer'},
    {name: 'Shelly Khan', age: 26, favLang: 'DevOps Engineer'},
    {name: 'Kim Lin', age: 28, favLang: 'UX Designer'},
    {name: 'Sunny Mitchell', age: 43, favLang: 'Backend Developer'},
    {name: 'Bob Zone', age: 36, favLang: 'Lead Frontend Developer'},
    {name: 'Bill Write', age: 40, favLang: 'Business Owner'},
    {name: 'Papa Johns', age: 26, favLang: 'Frontend Developer'},
    {name: 'Jones Pale', age: 21, favLang: 'Quality Analyst'},
    {name: 'Adam Lipton', age: 26, favLang: 'Frontend Developer'},
    {name: 'Randy Box', age: 32, favLang: 'Quality Analyst'},
  ];
  constructor() { }
  countDown(): void {
    this.counter--;
  }
  countUp(): void {
    this.counter++;
  }
  ngOnInit(): void {
  }
  updateStatus(title: string): void {
    this.statusBar.forEach((s) => {
      if (title === s.title) {
        switch (s.status) {
          case 'active':
            s.status = 'selected';
            break;
          case 'selected':
            s.status = 'super';
            break;
          case 'super':
            s.status = 'inactive';
            break;
          case 'inactive':
            s.status = 'active';
            break;
        }
      }
    });
  }

}

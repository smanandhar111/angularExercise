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
    {name: 'John Doe', age: 41, favLang: 'Java'},
    {name: 'Mike Milder', age: 41, favLang: 'JavaScript'},
    {name: 'Joe Burns', age: 41, favLang: 'C+'},
    {name: 'Shelly Khan', age: 41, favLang: 'HTML'},
    {name: 'Kim Lin', age: 41, favLang: 'SCSS'},
    {name: 'Sunny Mitchell', age: 41, favLang: 'Java'},
    {name: 'Bob Zone', age: 41, favLang: 'JavaScript'},
    {name: 'Bill Write', age: 41, favLang: 'HTML'},
    {name: 'Papa Johns', age: 41, favLang: 'SCSS'},
    {name: 'Jones Pale', age: 41, favLang: 'C+'},
    {name: 'Adam Lipton', age: 41, favLang: 'Java'},
    {name: 'Randy Box', age: 41, favLang: 'Java'},
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

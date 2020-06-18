import {Component, OnInit, ViewChild} from '@angular/core';
import {TabsetComponent} from 'ngx-bootstrap/tabs';
import {TabsModel} from './tabs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-exercise';
  @ViewChild('tabset', {static: false}) tabset: TabsetComponent;
  TabSet: TabsModel[] = [
    {value: 'Tab1'},
    {value: 'Tab2'},
    {value: 'Tab3'},
  ];
  status = 'Status ?';

  dropDownList: TabsModel[] = [
    {value: 'Happy :)'},
    {value: 'Sad :('},
    {value: 'Excited :D'},
    {value: 'Crying :\'('}
  ];
  ngOnInit(): void {

  }

  dropdownClicked(val: string): void {
    this.status = val;
  }
}

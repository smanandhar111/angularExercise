import {Component, OnInit, ViewChild} from '@angular/core';
import {TabsetComponent} from 'ngx-bootstrap/tabs';
import {TabsModel} from './tabs.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-exercise';
  status = 'Status ?';
  currentTab: string;
  @ViewChild('tabset', {static: false}) tabset: TabsetComponent;
  tabSet: TabsModel[] = [
    {value: 'Tab1'},
    {value: 'Tab2'},
    {value: 'Tab3'},
  ];
  dropDownList: TabsModel[] = [
    {value: 'Happy :)'},
    {value: 'Sad :('},
    {value: 'Excited :D'},
    {value: 'Bored :|'}
  ];
  ngOnInit(): void {
    this.currentTab = 'Tab1';
  }
  tabSelected(tab: string): void {
    this.currentTab = tab;
  }
  dropdownClicked(val: string): void {
    this.status = val;
  }
  routeToTabOne(event): void {
    this.tabset.tabs[event].active = true;
  }
}

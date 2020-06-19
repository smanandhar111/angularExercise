import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnChanges {
  @Output() routeToTab: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  @Input() currentTab: string;
  loadingTab: string;
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadingTab = changes.currentTab.currentValue;
  }
  routeToTabOne(id: number): void {
    this.routeToTab.emit(id);
  }
}

import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';
import {ForCastDataModel} from './forcastData.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  constructor() { }
  forCastData: ForCastDataModel[] = [
    {day: 'Sunday', highTemp: 93, lowTemp: 78},
    {day: 'Monday', highTemp: 97, lowTemp: 77},
    {day: 'Tuesday', highTemp: 87, lowTemp: 76},
    {day: 'Wednesday', highTemp: 93, lowTemp: 79},
    {day: 'Thursday', highTemp: 97, lowTemp: 78},
    {day: 'Friday', highTemp: 98, lowTemp: 82},
    {day: 'Saturday', highTemp: 97, lowTemp: 80}];
  myChart: any = null;
  unit = 'fahrenheit';
  chartInfo = `Highs and lows temperatures for next week in Irving, Tx in`;
  switchBtnText = 'Convert to';
  ngOnInit(): void {
    this.initChart();
  }

  initChart() {
    this.myChart = echarts.init((document.getElementById('chart')) as any);
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}'
      },
      xAxis: {
        type: 'category',
        data: this.getForCast(0),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.getForCast(1),
          type: 'bar',
        },
        {
          data: this.getForCast(2),
          type: 'bar',
        },
      ],
    };
    this.myChart.setOption(option);
  }
  getForCast(src: number): Array<string> {
    const keys = [];
    this.forCastData.forEach((x) => {
      let abc;
      abc = Object.values(x)[src];
      keys.push(abc);
    });
    return keys;
  }
  switchTemp(): void {
    this.forCastData = this.forCastData.map((o) => {
      return ({
        ...o,
        highTemp: this.convertUnit(o.highTemp),
        lowTemp: this.convertUnit(o.lowTemp)
      });
    });
    const option = {
      xAxis: {
        type: 'category',
        data: this.getForCast(0),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.getForCast(1),
          type: 'bar',
        },
        {
          data: this.getForCast(2),
          type: 'bar',
        },
      ],
    };
    this.myChart.setOption(option);
    (this.unit === 'fahrenheit') ? this.unit = 'celsius' : this.unit = 'fahrenheit';
  }
  convertUnit(temp: number): number {
    if (this.unit === 'fahrenheit') {
      return this.convertToCelsius(temp);
    } else {
      return this.convertToFahrenheit(temp);
    }
  }
  convertToCelsius(temp: number): number {
    return Math.floor((temp - 32) * (5 / 9));
  }
  convertToFahrenheit(temp: number): number {
    return Math.floor((temp * (9 / 5) + 32));
  }
  getUnits(unit: string): string {
    if (unit === 'fahrenheit') {
      return 'celsius';
    } else {
      return 'fahrenheit';
    }
  }

  OnElem1Mouseover() {
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 1,
    });
  }

  OnElem1Mouseout() {
    this.myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 1,
    });
  }

  OnElem2Mouseover() {
    this.myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
    });
  }

  OnElem2Mouseout() {
    this.myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
    });
  }
}

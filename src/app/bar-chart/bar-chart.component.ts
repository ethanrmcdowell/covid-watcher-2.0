import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  public chart: any;
  @Input() chartData: any;
  dates: string[] = [];
  caseNumbers: string[] = [];


  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.dates, 
	       datasets: [
          {
            label: "Total Cases",
            data: this.caseNumbers,
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
    });
  }

  ngOnInit() {
    this.dates = Object.keys(this.chartData.cases);;
    this.caseNumbers = Object.values(this.chartData.cases);

    console.log("dates:", this.dates);
    console.log("cases:", this.caseNumbers);

    this.createChart();
  }
}

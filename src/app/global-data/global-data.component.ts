import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-global-data',
  templateUrl: './global-data.component.html',
  styleUrls: ['./global-data.component.css']
})
export class GlobalDataComponent implements OnInit {
  public chart: any;
  @Input() chartData: any;
  dates: string[] = [];
  caseNumbers: string[] = [];


  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        // dates along x-axis
        labels: this.dates, 
        datasets: [
          {
            // case numbers along y-axis
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
    this.dates = Object.keys(this.chartData.cases);
    this.caseNumbers = Object.values(this.chartData.cases);

    console.log("global data ->", this.chartData);

    this.createChart();
  }
}

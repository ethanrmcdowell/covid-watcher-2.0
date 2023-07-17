import { Component, OnInit, Input } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-us-data',
  templateUrl: './us-data.component.html',
  styleUrls: ['./us-data.component.css']
})
export class UsDataComponent {
  public chart: any;
  @Input() chartData: any;
  cases!: string;
  recoveries!: string;
  deaths!: string;


  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'doughnut',
      data: {
        labels: ['Cases', 'Recoveries', 'Deaths'], 
	       datasets: [
          {
            data: [this.cases, this.recoveries, this.deaths],
            backgroundColor: ['#7A9D54', '#F2EE9D', '#8C3333'],
          }  
        ]
      },
      options: {
        responsive: true,
      }
    });
  }

  ngOnInit() {
    console.log("us data ->", this.chartData);
    this.cases = this.chartData.cases;
    this.recoveries = this.chartData.recovered;
    this.deaths = this.chartData.deaths;

    this.createChart();
  }
}

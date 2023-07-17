import { Component, OnInit } from '@angular/core';
import { DataService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-stats';
  dataFetched: boolean = false;
  data: any;
  tabSelected: any = 1;
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData()
      .then(data => {
        console.log("data", data);
        this.data = data;
        if (this.data) this.dataFetched = true;
      })
      .catch(error => console.error('Error:', error));
  }

  selectTab(num: any) {
    this.tabSelected = num;
  }
}

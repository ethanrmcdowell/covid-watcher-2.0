import { Component, OnInit } from '@angular/core';
import { DataService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covid-stats';
  dataFetched = false;
  data: any;
  initData: any;
  tabSelected: any = 1;
  apiUrl!: string;
  
  constructor(private dataService: DataService) {}

  async ngOnInit() {
     this.onInitData();
    this.getApiUrl();
  }

  selectTab(num: any) {
    this.dataFetched = false;
    this.data = null;
    this.tabSelected = num;
    this.getApiUrl();
  }

  getApiUrl() {
    try {
      if (this.tabSelected === 2) {
        this.apiUrl = "https://disease.sh/v3/covid-19/countries/usa";
      } else if (this.tabSelected === 3) {
        this.apiUrl = "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1";
      } else {
        this.apiUrl = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";
      }
    } finally {
      this.fetchData();
    }
  }

  async onInitData() {
    // const initApi = "https://disease.sh/v3/covid-19/all";
    // try {
    //   this.initData = await this.dataService.getData(initApi);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  }

  async fetchData() {
    try {
      this.data = await this.dataService.getData(this.apiUrl);
      this.dataFetched = true;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private apiUrl = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";

    getData() {
        return axios.get(`${this.apiUrl}`)
            .then(response => response.data)
            .catch(error => {
                console.error('Error:', error);
                throw error;
            });
    }
}
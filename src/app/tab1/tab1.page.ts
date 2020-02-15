import { Component, OnInit, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  hotflashchart: any;
  sleepdatachart: any;


  constructor() {}

  ngOnInit() {
    const dataPoints = [{
      x: 1,
      y: 10
    }, {
      x: 2,
      y: 20
    },
    {
      x: 3,
      y: 0
    }];
    const labels = ['a','b', 'c'];

    this.hotflashchart = new Chart('hotflashes', {
      type: 'bar',
      data: {
        labels: labels, // your labels array
        datasets: [
          {
            data: dataPoints, // your data array
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.sleepdatachart = new Chart('sleepdata', {
      type: 'line',
      data: {
        labels: labels, // your labels array
        datasets: [
          {
            data: dataPoints, // your data array
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}

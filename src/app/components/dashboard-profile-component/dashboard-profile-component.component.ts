import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-profile-component',
  templateUrl: './dashboard-profile-component.component.html',
  styleUrls: ['./dashboard-profile-component.component.css']
})
export class DashboardProfileComponentComponent implements OnInit {

  categories = ['Programming', 'History', 'Politics'];
  chartData = [12, 19, 10];
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.chart(this.chartData);
  }

  log(x: any) {
    console.log(x);
  }


  chart(chartData: number[]) {
    Chart.defaults.global.elements.rectangle.borderWidth = 2;
    const ctx = this.elementRef.nativeElement.querySelector(`#myChart`);
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Green', 'Blue'],
        datasets: [{
          data: chartData,
          backgroundColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 0, 255, 1)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(0, 0, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        animation: {
          animateRotate: true,
          animateScale: true
        },
        legend: {
          display: true,
          position: 'right',
          labels: {
            padding: 20,
            usePointStyle: true
          }
        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
          }
        }
      }
    });
  }
}

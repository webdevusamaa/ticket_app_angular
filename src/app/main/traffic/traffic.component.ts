import { NgFor } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-traffic',
  standalone: true,
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css'],
  imports: [NgFor]
})
export class TrafficComponent implements OnInit, OnDestroy {
  dummyTrafficData = [
    { id: 'd1', value: 133 },
    { id: 'd2', value: 260 },
    { id: 'd3', value: 290 },
    { id: 'd4', value: 410 },
    { id: 'd5', value: 397 },
    { id: 'd6', value: 880 },
    { id: 'd47', value: 589 },
  ];

  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  trafficUpdateSubscription: Subscription | null = null;  // Initialize with null

  ngOnInit() {
    // Update traffic data every 2 seconds (2000 milliseconds)
    this.trafficUpdateSubscription = interval(2000).subscribe(() => {
      this.updateTrafficData();
    });
  }
  
  ngOnDestroy() {
    // Clean up the subscription when the component is destroyed
    if (this.trafficUpdateSubscription) {
      this.trafficUpdateSubscription.unsubscribe();
    }
  }

  updateTrafficData() {
    // Randomly update the values to simulate changing traffic data
    this.dummyTrafficData = this.dummyTrafficData.map((data) => ({
      ...data,
      value: data.value + Math.floor(Math.random() * 1150) - 25, // Random change between -25 and +25
    }));

    // Update the max value for scaling the chart
    this.maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
  }
}

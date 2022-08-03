/* eslint-disable no-var */
import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import  Bellcurve from 'highcharts/modules/histogram-bellcurve';
Bellcurve(Highcharts);

var data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4,
    4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2,
    3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3,
    3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3,
    2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3,
    2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3,
    2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6,
    3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2,
    2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7,
    3.2, 3.3, 3, 2.5, 3, 3.4, 3];

@Component({
  selector: 'app-highchart4',
  templateUrl: './highchart4.component.html',
  styleUrls: ['./highchart4.component.scss'],
})



export class Highchart4Component implements OnInit {
  @ViewChild('highChart4', {static:true}) highChart4;
  myChart4: any;
  showThumbsUp = true;
  constructor() { }

  ngOnInit() {
    this.plotBellChart();
  }

  plotBellChart() {
    this.myChart4 = new Highcharts.Chart('highcharts4', {
    chart:{
      type: 'bellcurve',
      zoomType: 'xy',
      scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1,
        }
    },
  title: {
        text: 'Sales & Exports'
    },
      navigation: {
        menuStyle: {
            background: '#EDE7FF',
        }
    },

    xAxis: [{
      scrollbar: {
        enabled: true
    },
        title: {
            text: 'Sales & Exports'
        },
        alignTicks: false
    }, {
        title: {
            text: 'Sales & Exports'
        },
        alignTicks: false,
        opposite: true
    }],

    yAxis: [{
        title: { text: 'Data' },
        scrollbar: {
          enabled: true,
      }
    },
     {
        title: { text: 'Bell curve' },
        opposite: true
    }],
    credits:{
      enabled:false
    },
    series: [{
        name: 'Bell curve',
        type: 'bellcurve',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 1,
        zIndex: -1
    }, {
        name: 'Sales & Exports',
        type: 'scatter',
        data,
        accessibility: {
            exposeAsGroupOnly: true
        },
        marker: {
            radius: 1.5
        }
    }]


});

document.getElementById('inverted4').addEventListener('click', () => {
    this.myChart4.update({
        chart: {
            inverted:true,
        },
        subtitle: {
            text: 'Inverted'
        }
    });
});

}
update2(){
  console.log(this.myChart4.type);
  this.myChart4= new Highcharts.Chart('highcharts4', {
    chart:{
      type: 'bellcurve',
      zoomType: 'xy',
      scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
    },
  title: {
        text: 'Exports'
    },
      navigation: {
        menuStyle: {
            background: '#EDE7FF',
        }
    },

    xAxis: [{
        title: {
            text: 'Sales & Exports'
        },
        alignTicks: false
    }, {
        title: {
            text: 'Sales & Exports'
        },
        alignTicks: false,
        opposite: true
    }],

    yAxis: [{
        title: { text: 'Data' }
    }, {
        title: { text: 'Sales & Exports' },
        opposite: true
    }],
    credits:{
      enabled:false
    },
    series: [{
        name: 'Bell curve',
        type: 'bellcurve',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 1,
        zIndex: -1
    }, {
        name: 'Data',
        type: 'scatter',
        data,
        accessibility: {
            exposeAsGroupOnly: true
        },
        marker: {
            radius: 1.5
        }
    }]
});
  }

  showchart(){
  const highcharts = this.myChart4.renderTo;
  if (highcharts.style.display === 'block') {
    highcharts.style.display = 'none';
    this.myChart4.viewData();
  }
  else {
    highcharts.style.display = 'block';
    this.myChart4.hideData();
  }
  }

  toggleThumb() {
    if (this.showThumbsUp) {
      this.showThumbsUp = false;
    } else {
      this.showThumbsUp = true;
    }
  }
}

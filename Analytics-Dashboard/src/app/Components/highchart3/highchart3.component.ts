/* eslint-disable max-len */
import { Component, OnInit, ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-highchart3',
  templateUrl: './highchart3.component.html',
  styleUrls: ['./highchart3.component.scss'],
})
export class Highchart3Component implements OnInit {
  @ViewChild('highChart3', {static:true}) highChart3;
  myChart3: any;
  showThumbsUp = true;
  constructor() { }

    ngOnInit() {
    this.plotSimpleCombiChart();
  }

  plotSimpleCombiChart() {
    this.myChart3 = new Highcharts.Chart('highcharts3', {
            chart:{
            type: 'pie',
        zoomType: 'xy',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        },
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0,
        }
        },
        navigation: {
        menuStyle: {
            background: '#EDE7FF',
        }
    },

    title: {
        text: 'Chart.update'
    },
    subtitle: {
        text: 'Plain'
    },
    xAxis: {
        categories: ['Chrome', 'Internet Explorer', 'Firefox', 'Edge', 'Safari', 'Sogou Explorer', 'Opera', 'QQ', 'Other']
    },

        plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 45,
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    credits:{
    enabled: false
    },

    series: [{
        type: undefined,
        colorByPoint: true,
        name: 'Brands',
        data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Sogou Explorer',
            y: 1.64
        }, {
            name: 'Opera',
            y: 1.6
        }, {
            name: 'QQ',
            y: 1.2
        }, {
            name: 'Other',
            y: 2.61
        }]
    }]
});

    document.getElementById('pie3').addEventListener('click', () => {
    this.myChart3.update({
        chart: {
            type: 'pie'
        },
        subtitle: {
            text: 'Polar'
        }
    });
});

  document.getElementById('polar3').addEventListener('click', () => {
    this.myChart3.update({
        chart: {
          type: 'column',
        },
        subtitle: {
            text: 'Inverted'
        }
    });
});

document.getElementById('spline3').addEventListener('click', () => {
    this.myChart3.update({
        chart: {
          type: 'spline',
        },
        subtitle: {
            text: 'Inverted'
        }
    });
});

}

  showchart(){
  const highcharts = this.myChart3.renderTo;
  if (highcharts.style.display === 'block') {
    highcharts.style.display = 'none';
    this.myChart3.viewData();
  }
  else {
    highcharts.style.display = 'block';
    this.myChart3.hideData();
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

import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
exporting(Highcharts);
import HC_exportData from 'highcharts/modules/export-data';
HC_exportData(Highcharts);
import { PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-highchart1',
  templateUrl: './highchart1.component.html',
  styleUrls: ['./highchart1.component.scss'],
})
export class Highchart1Component implements OnInit{
  @ViewChild('highChart1', {static:true}) highChart1;
  myChart: any;
  buttonIcon = 'home';
  showThumbsUp = true;

  constructor(private popover: PopoverController, public nav: NavController) { }

  ngOnInit() {
    this.plotSimpleBarChart();
}

  plotSimpleBarChart() {
    this.myChart =  Highcharts.chart('highcharts', {
        chart:{
        zoomType: 'xy',
        styledMode: true,
            scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }

      },

title: {
text: 'Employment Growth'
},
xAxis: {
categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
},
credits:{
        enabled: false
      },
series: [{
type: 'column',
colorByPoint: true,
data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
showInLegend: true
}],


});

  document.getElementById('inverted').addEventListener('click', () => {
    this.myChart.update({
        chart: {
            inverted:true,
            polar: false
        },
        subtitle: {
            text: 'Inverted'
        }
    });
      this.myChart.redraw();
});

}
  update2(){
  console.log(this.myChart.type);
  this.myChart= new Highcharts.Chart('highcharts', {
      chart: {
        type: 'column',
        zoomType: 'xy',
        styledMode: true,
            scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
      },

      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
        type: 'column',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        showInLegend: true
        }],
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      credits:{
        enabled: false
      },
      navigation: {
        menuStyle: {
            background: '#EDE7FF',
        }
    },

    exporting: {
      accessibility:{
        enabled: true,
      },
    },
    });
        this.myChart.redraw();
  }


  update3(){
  console.log(this.myChart.type);
  this.myChart= new Highcharts.Chart('highcharts', {
      chart: {
        type: 'line',
        zoomType: 'xy',
        styledMode: true,
            scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
      },
      credits:{
        enabled: false
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
        type: 'line',
        colorByPoint: true,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        showInLegend: true
        }],
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
    navigation: {
        menuStyle: {
            background: '#EDE7FF',
        }
    },

    exporting: {
      accessibility:{
        enabled: true,
      },
    },
    });
        this.myChart.redraw();
  }


showchart(){
  const highcharts = this.myChart.renderTo;
  if (highcharts.style.display === 'block') {
    highcharts.style.display = 'none';
    this.myChart.viewData();
  }
  else {
    highcharts.style.display = 'block';
    this.myChart.hideData();
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












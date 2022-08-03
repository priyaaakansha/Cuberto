import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-highchart2',
  templateUrl: './highchart2.component.html',
  styleUrls: ['./highchart2.component.scss'],
})
export class Highchart2Component implements OnInit {
  @ViewChild('highChart2', {static:true}) highChart2;
  myChart2: any;
  showThumbsUp = true;

  constructor() { }

  ngOnInit() {
    this.plotSimpleLineChart();
  }

  plotSimpleLineChart() {
    this.myChart2 = new Highcharts.Chart('highcharts2', {
      chart: {
        type: 'line',
        zoomType: 'xy',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
      },
      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        type: undefined,
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        type: undefined,
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        type: undefined,
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        type: undefined,
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        type: undefined,
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],
      navigation: {
        menuStyle: {
            background: '#EDE7FF',
        }
    },
      credits:{
        enabled: false
      },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 1000
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }],
},
    });


  document.getElementById('inverted2').addEventListener('click', () => {
    this.myChart2.update({
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
  console.log(this.myChart2.type);
  this.myChart2= new Highcharts.Chart('highcharts2', {
      chart: {
        type: 'column',
        zoomType: 'xy',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
      },
      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        type: undefined,
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        type: undefined,
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        type: undefined,
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        type: undefined,
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        type: undefined,
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],
      navigation: {
        menuStyle: {
            background: '#EDE7FF',
        }
    },
      credits:{
        enabled: false
      },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 1000
            },
            chartOptions: {
                legend: {
                    layout: 'vertical',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }],
},
    });
  }

  update3(){
  console.log(this.myChart2.type);
  this.myChart2= new Highcharts.Chart('highcharts2', {
      chart: {
        type: 'line',
        zoomType: 'xy',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
      },
      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        type: undefined,
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        type: undefined,
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        type: undefined,
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        type: undefined,
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        type: undefined,
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],
      navigation: {
        menuStyle: {
            background: '#EDE7FF',
        }
    },
      credits:{
        enabled: false
      },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 1000
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }],
},
    });
  }

  showchart(){
  const highcharts = this.myChart2.renderTo;
  if (highcharts.style.display === 'block') {
    highcharts.style.display = 'none';
    this.myChart2.viewData();
  }
  else {
    highcharts.style.display = 'block';
    this.myChart2.hideData();
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


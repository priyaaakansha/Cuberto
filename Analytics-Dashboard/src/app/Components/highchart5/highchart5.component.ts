import { Component, OnInit , ViewChild} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highchart5',
  templateUrl: './highchart5.component.html',
  styleUrls: ['./highchart5.component.scss'],
})
export class Highchart5Component implements OnInit {

  @ViewChild('highChart5', {static:true}) highChart5;
  myChart5: any;
  showThumbsUp = true;

  constructor() { }

  ngOnInit() {
    this.plotBellChart();
  }

  plotBellChart() {
    this.myChart5 = new Highcharts.Chart('highcharts5', {
      chart: {
        type: 'areaspline',
        zoomType: 'xy',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1,
            scrollPositionY: 1
        }
      },
      title: {
        text: 'Sales Growth by Sector, 2018-2021'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2018 to 2021'
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
        name: 'TCS',
        type: undefined,
        data: [43904, 90503, 45177, 89658, 90031, 189931, 130033, 190175]
    }, {
        name: 'Indiana Jones',
        type: undefined,
        data: [24900, 78064, 90742, 29231, 37890, 39082, 32321, 40904]
    }, {
        name: 'USA',
        type: undefined,
        data: [19044, 12322, 18905, 19901, 20121, 28377, 66147, 39387]
    }, {
        name: 'Bangalore',
        type: undefined,
        data: [null, 10203, 7988, 12909, 15112, 21152, 90200, 34227]
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


  document.getElementById('inverted5').addEventListener('click', () => {
    this.myChart5.update({
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
  console.log(this.myChart5.type);
  this.myChart5= new Highcharts.Chart('highcharts5', {
      chart: {
        type: 'column',
        zoomType: 'xy',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
      },
      title: {
        text: 'Sales Growth by Sector, 2018-2021'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2018 to 2021'
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
        name: 'TCS',
        type: undefined,
        data: [43904, 90503, 45177, 89658, 90031, 189931, 130033, 190175]
    }, {
        name: 'Indiana Jones',
        type: undefined,
        data: [24900, 78064, 90742, 29231, 37890, 39082, 32321, 40904]
    }, {
        name: 'USA',
        type: undefined,
        data: [19044, 12322, 18905, 19901, 20121, 28377, 66147, 39387]
    }, {
        name: 'Bangalore',
        type: undefined,
        data: [null, 10203, 7988, 12909, 15112, 21152, 90200, 34227]
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

  update3(){
  console.log(this.myChart5.type);
  this.myChart5= new Highcharts.Chart('highcharts5', {
      chart: {
        type: 'areaspline',
        zoomType: 'xy',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
      },
      title: {
        text: 'Sales Growth by Sector, 2018-2021'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2018 to 2021'
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
        name: 'TCS',
        type: undefined,
        data: [43904, 90503, 45177, 89658, 90031, 189931, 130033, 190175]
    }, {
        name: 'Indiana Jones',
        type: undefined,
        data: [24900, 78064, 90742, 29231, 37890, 39082, 32321, 40904]
    }, {
        name: 'USA',
        type: undefined,
        data: [19044, 12322, 18905, 19901, 20121, 28377, 66147, 39387]
    }, {
        name: 'Bangalore',
        type: undefined,
        data: [null, 10203, 7988, 12909, 15112, 21152, 90200, 34227]
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
  const highcharts = this.myChart5.renderTo;
  if (highcharts.style.display === 'block') {
    highcharts.style.display = 'none';
    this.myChart5.viewData();
  }
  else {
    highcharts.style.display = 'block';
    this.myChart5.hideData();
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

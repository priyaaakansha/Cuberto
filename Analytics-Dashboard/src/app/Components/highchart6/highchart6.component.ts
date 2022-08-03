import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-highchart6',
  templateUrl: './highchart6.component.html',
  styleUrls: ['./highchart6.component.scss'],
})
export class Highchart6Component implements OnInit {
  @ViewChild('highChart6', {static:true}) highChart6;
  myChart6: any;
  showThumbsUp = true;
  constructor() { }

  ngOnInit() {
    this.plotBellChart();
  }

  plotBellChart() {
    this.myChart6 = new Highcharts.Chart('highcharts6', {
      chart: {
        type: 'column',
        zoomType: 'xy',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
      },
      title: {
        text: 'Sales Production 2005-2021'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2005 to 2021'
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
        name: 'Word of Mouth',
        type: undefined,
        data: [43890, 52123, 59077, 60058, 98931, 1131, 137233, 151175]
    }, {
        name: 'Social Media',
        type: undefined,
        data: [24912, 24094, 29742, 223851, 32433, 30222, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        type: undefined,
        data: [11744, 17782, 1905, 19771, 22285, 20077, 32189, 39087]
    }, {
        name: 'Project Development',
        type: undefined,
        data: [null,890, 7908, 11269, 112, 222, 34420, 32227]
    }, {
        name: 'Other',
        type: undefined,
        data: [12992, 5928, 8005, 10048, 8089, 11006, 10074, 18111]
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

  document.getElementById('inverted6').addEventListener('click', () => {
    this.myChart6.update({
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
  console.log(this.myChart6.type);
  this.myChart6= new Highcharts.Chart('highcharts6', {
      chart: {
        type: 'column',
        zoomType: 'xy',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
      },
      title: {
        text: 'Sales Production 2005-2021'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2005 to 2021'
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
        name: 'Word of Mouth',
        type: undefined,
        data: [43890, 52123, 59077, 60058, 98931, 1131, 137233, 151175]
    }, {
        name: 'Social Media',
        type: undefined,
        data: [24912, 24094, 29742, 223851, 32433, 30222, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        type: undefined,
        data: [11744, 17782, 1905, 19771, 22285, 20077, 32189, 39087]
    }, {
        name: 'Project Development',
        type: undefined,
        data: [null,890, 7908, 11269, 112, 222, 34420, 32227]
    }, {
        name: 'Other',
        type: undefined,
        data: [12992, 5928, 8005, 10048, 8089, 11006, 10074, 18111]
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
  console.log(this.myChart6.type);
  this.myChart6= new Highcharts.Chart('highcharts6', {
      chart: {
        type: 'line',
        zoomType: 'xy',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
      },
      title: {
        text: 'Sales Production 2005-2021'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2005 to 2021'
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
        name: 'Word of Mouth',
        type: undefined,
        data: [43890, 52123, 59077, 60058, 98931, 1131, 137233, 151175]
    }, {
        name: 'Social Media',
        type: undefined,
        data: [24912, 24094, 29742, 223851, 32433, 30222, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        type: undefined,
        data: [11744, 17782, 1905, 19771, 22285, 20077, 32189, 39087]
    }, {
        name: 'Project Development',
        type: undefined,
        data: [null,890, 7908, 11269, 112, 222, 34420, 32227]
    }, {
        name: 'Other',
        type: undefined,
        data: [12992, 5928, 8005, 10048, 8089, 11006, 10074, 18111]
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
  const highcharts = this.myChart6.renderTo;
  if (highcharts.style.display === 'block') {
    highcharts.style.display = 'none';
    this.myChart6.viewData();
  }
  else {
    highcharts.style.display = 'block';
    this.myChart6.hideData();
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

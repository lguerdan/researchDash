
$(function () {
      Highcharts.setOptions({
         colors: ['#FF9655' , '#adfc71', '#dd616e', '#454545', '#b3aee5', '#64E572', '#FFF263', '#6AF9C4']
      });

    $('#surveys').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Surveys Complete'
        },
        xAxis: {
            categories: [
                'User 1',
                'User 2',
                'User 3',
                'User 4',
                'User 5',
                'User 6',
                'User 7',
                'User 8',
                'User 9',
                'User 9',
                'User 10',
                'User 11'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'surveys complete ',
            color: Highcharts.getOptions().colors[2],
            data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54]}]
    });
});

$(function () {
    $('#days').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Number of Days in Study'
        },
        xAxis: {
            categories: ['Patients'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Days',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' days'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'days',
            color: Highcharts.getOptions().colors[3],
            data: [23, 31, 18, 9, 27, 26, 25, 24, 18 , 13, 10, 16]
        }]
    });
});


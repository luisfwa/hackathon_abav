/*
 *  Document   : base_comp_charts.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Charts Page
 */

var BaseCompCharts = function() {
    // Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
    var initChartsChartJS = function () {
        // Get Chart Containers
        //var $chartLinesCon  = jQuery('.js-chartjs-lines')[0].getContext('2d');
        //var $chartBarsCon   = jQuery('.js-chartjs-bars')[0].getContext('2d');
        //var $chartRadarCon  = jQuery('.js-chartjs-radar')[0].getContext('2d');
        //var $chartPolarCon  = jQuery('.js-chartjs-polar')[0].getContext('2d');
        var $chartPieCon    = jQuery('.js-chartjs-pie')[0].getContext('2d');
        //var $chartDonutCon  = jQuery('.js-chartjs-donut')[0].getContext('2d');

        // Set Chart and Chart Data variables
        var $chartLines, $chartBars, $chartRadar, $chartPolar, $chartPie, $chartDonut;
        var $chartLinesBarsRadarData, $chartPolarPieDonutData;

        // Set global chart options
        var $globalOptions = {
            scaleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            scaleFontColor: '#999',
            scaleFontStyle: '600',
            tooltipTitleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            tooltipCornerRadius: 3,
            maintainAspectRatio: false,
            responsive: true
        };

        // Lines/Bar/Radar Chart Data
        var $chartLinesBarsRadarData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'Last Week',
                    fillColor: 'rgba(220,220,220,.3)',
                    strokeColor: 'rgba(220,220,220,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: [30, 32, 40, 45, 43, 38, 55]
                },
                {
                    label: 'This Week',
                    fillColor: 'rgba(171, 227, 125, .3)',
                    strokeColor: 'rgba(171, 227, 125, 1)',
                    pointColor: 'rgba(171, 227, 125, 1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(171, 227, 125, 1)',
                    data: [15, 16, 20, 25, 23, 25, 32]
                }
            ]
        };

        // Polar/Pie/Donut Data
        var $chartPolarPieDonutData = [
            {
                value: 56,
                color: 'rgba(171, 227, 125, 1)',
                highlight: 'rgba(171, 227, 125, .75)',
                label: 'Earnings'
            },
            {
                value: 22,
                color: 'rgba(250, 219, 125, 1)',
                highlight: 'rgba(250, 219, 125, .75)',
                label: 'Sales'
            },
            {
                value: 22,
                color: 'rgba(117, 176, 235, 1)',
                highlight: 'rgba(117, 176, 235, .75)',
                label: 'Tickets'
            }
        ];

        // Init Charts
        //$chartLines = new Chart($chartLinesCon).Line($chartLinesBarsRadarData, $globalOptions);
        //$chartBars  = new Chart($chartBarsCon).Bar($chartLinesBarsRadarData, $globalOptions);
        //$chartRadar = new Chart($chartRadarCon).Radar($chartLinesBarsRadarData, $globalOptions);
        //$chartPolar = new Chart($chartPolarCon).PolarArea($chartPolarPieDonutData, $globalOptions);
        $chartPie   = new Chart($chartPieCon).Pie($chartPolarPieDonutData, $globalOptions);
        //$chartDonut = new Chart($chartDonutCon).Doughnut($chartPolarPieDonutData, $globalOptions);
    };

    // jQuery Sparkline Charts, for more examples you can check out http://omnipotent.net/jquery.sparkline/#s-docs
    var initChartsSparkline = function(){
       

        // Pie Charts
        var $pieCharts = {
            type: 'pie',
            width: '50px',
            height: '50px',
            sliceColors: ['#fadb7d','#faad7d', '#75b0eb','#abe37d'],
            tooltipPrefix: '',
            tooltipSuffix: ' Tickets',
            tooltipFormat: '{{prefix}}{{value}}{{suffix}}'
        };
        jQuery('.js-slc-pie1').sparkline('html', $pieCharts);

        $pieCharts['tooltipPrefix'] = '$ ';
        $pieCharts['tooltipSuffix'] = '';
        jQuery('.js-slc-pie2').sparkline('html', $pieCharts);

        $pieCharts['tooltipPrefix'] = '';
        $pieCharts['tooltipSuffix'] = ' Sales';
        jQuery('.js-slc-pie3').sparkline('html', $pieCharts);

    };

    // Randomize Easy Pie Chart values
    var initRandomEasyPieChart = function(){
        jQuery('.js-pie-randomize').on('click', function(){
            jQuery(this)
                .parents('.block')
                .find('.pie-chart')
                .each(function() {
                    var $random = Math.floor((Math.random() * 100) + 1);

                    jQuery(this)
                        .data('easyPieChart')
                        .update($random);
                });
        });
    };

    // Flot charts, for more examples you can check out http://www.flotcharts.org/flot/examples/
    var initChartsFlot = function(){
        // Get the elements where we will attach the charts
        var $flotPie        = jQuery('.js-flot-pie');

        // Demo Data
        var $dataEarnings    = [[1, 2500], [2, 2300], [3, 3200], [4, 2500], [5, 4500], [6, 2800], [7, 3900], [8, 3100], [9, 4600], [10, 3200], [11, 4200], [12, 5700]];
        var $dataSales       = [[1, 1100], [2, 700], [3, 1300], [4, 900], [5, 1900], [6, 950], [7, 1700], [8, 1250], [9, 1800], [10, 1300], [11, 1750], [12, 2900]];

        var $dataSalesBefore = [[1, 500], [4, 390], [7, 1000], [10, 600], [13, 800], [16, 1050], [19, 1200], [22, 750], [25, 980], [28, 900], [31, 1350], [34, 1200]];
        var $dataSalesAfter  = [[2, 650], [5, 600], [8, 1400], [11, 900], [14, 1300], [17, 1200], [20, 1420], [23, 1650], [26, 1300], [29, 1120], [32, 1550], [35, 1650]];

        var $dataMonths      = [[1, 'Jan'], [2, 'Feb'], [3, 'Mar'], [4, 'Apr'], [5, 'May'], [6, 'Jun'], [7, 'Jul'], [8, 'Aug'], [9, 'Sep'], [10, 'Oct'], [11, 'Nov'], [12, 'Dec']];
        var $dataMonthsBars  = [[2, 'Jan'], [5, 'Feb'], [8, 'Mar'], [11, 'Apr'], [14, 'May'], [17, 'Jun'], [20, 'Jul'], [23, 'Aug'], [26, 'Sep'], [29, 'Oct'], [32, 'Nov'], [35, 'Dec']];

        // Pie Chart
        jQuery.plot($flotPie,
            [
                {
                    label: 'Sales',
                    data: 22
                },
                {
                    label: 'Tickets',
                    data: 22
                },
                {
                    label: 'Earnings',
                    data: 56
                }
            ],
            {
                colors: ['#fadb7d', '#75b0eb', '#abe37d'],
                legend: {show: false},
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        label: {
                            show: true,
                            radius: 2/3,
                            formatter: function(label, pieSeries) {
                                return '<div class="flot-pie-label">' + label + '<br>' + Math.round(pieSeries.percent) + '%</div>';
                            },
                            background: {
                                opacity: .75,
                                color: '#000000'
                            }
                        }
                    }
                }
            }
        );
    };

    return {
        init: function () {
            // Init all charts

            // Randomize Easy Pie values functionality
            initRandomEasyPieChart();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BaseCompCharts.init(); });
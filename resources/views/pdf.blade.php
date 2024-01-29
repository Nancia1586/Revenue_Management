<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>CodePen - Chart.js - Download Multiple Charts as PDF</title>
    <link rel="stylesheet" href="/jspdf/style.css">

</head>

<body>
    <!-- partial:index.partial.html -->
    <a href="#" id="downloadPdf">Download Report Page as PDF</a>
    <br /><br />
    <div id="reportPage">
        <div id="chartContainer" style="width: 30%;float: left;">
            <canvas id="myChart"></canvas>
        </div>

        <div style="width: 30%; float: left;">
            <canvas id="myChart2">
            </canvas>
            <div class="col-lg-0">
                <div class="card">
                    <div class="card-body">
                        {{-- <h5 class="card-title">Column Chart</h5> --}}
    
                        <!-- Column Chart -->
                        <div id="columnChart"></div>
    
                        <script>
                            document.addEventListener("DOMContentLoaded", () => {
                                new ApexCharts(document.querySelector("#columnChart"), {
                                    series: [{
                                        name: 'Net Profit',
                                        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
                                    }, {
                                        name: 'Revenue',
                                        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
                                    }, {
                                        name: 'Free Cash Flow',
                                        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
                                    }],
                                    chart: {
                                        type: 'bar',
                                        height: 350
                                    },
                                    plotOptions: {
                                        bar: {
                                            horizontal: false,
                                            columnWidth: '55%',
                                            endingShape: 'rounded'
                                        },
                                    },
                                    dataLabels: {
                                        enabled: false
                                    },
                                    stroke: {
                                        show: true,
                                        width: 2,
                                        colors: ['transparent']
                                    },
                                    xaxis: {
                                        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                                    },
                                    yaxis: {
                                        title: {
                                            text: '$ (thousands)'
                                        }
                                    },
                                    fill: {
                                        opacity: 1
                                    },
                                    tooltip: {
                                        y: {
                                            formatter: function(val) {
                                                return "$ " + val + " thousands"
                                            }
                                        }
                                    }
                                }).render();
                            });
                        </script>
                        <!-- End Column Chart -->
    
                    </div>
                </div>
            </div>
        </div>

        <br /><br /><br />

        <div style="width: 30%; height: 400px; clear: both;">
            <canvas id="myChart3" style="width: 40%"></canvas>
        </div>
    </div>
    <script></script>
    <!-- partial -->
    <script src='/jspdf/jquery.min.js'></script>
    <script src='/jspdf/Chart.min.js'></script>
    <script src='/jspdf/jspdf.debug.js'></script>
    <script src="/jspdf/script.js"></script>

<script src="/assets/vendor/apexcharts/apexcharts.min.js"></script>
<script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="/assets/vendor/chart.js/chart.min.js"></script>
<script src="/assets/vendor/echarts/echarts.min.js"></script>
<script src="/assets/vendor/quill/quill.min.js"></script>
<script src="/assets/vendor/simple-datatables/simple-datatables.js"></script>
<script src="/assets/vendor/tinymce/tinymce.min.js"></script>
<script src="/assets/vendor/php-email-form/validate.js"></script>

</body>

</html>

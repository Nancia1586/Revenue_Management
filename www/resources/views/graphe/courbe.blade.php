@extends('header')
@section('content')
    {{-- <main id="main" class="main"> --}}
    {{--  --}}
    {{-- <section class="section"> --}}
    <div class="row">

        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Line Chart</h5>

                    <!-- Line Chart -->
                    <div id="lineChart"></div>

                    <script>
                        document.addEventListener("DOMContentLoaded", () => {
                            new ApexCharts(document.querySelector("#lineChart"), {
                                series: [{
                                    name: "Desktops",
                                    data: [
                                        @for ($i=0;$i<9;$i++)
                                            '{{ rand(200, 1200) }}',
                                        @endfor                                    ]
                                }],
                                chart: {
                                    height: 350,
                                    type: 'line',
                                    zoom: {
                                        enabled: false
                                    }
                                },
                                dataLabels: {
                                    enabled: false
                                },
                                stroke: {
                                    curve: 'straight'
                                },
                                grid: {
                                    row: {
                                        colors: ['#f3f3f3',
                                        'transparent'], // takes an array which will be repeated on columns
                                        opacity: 0.5
                                    },
                                },
                                xaxis: {
                                    categories: ['Jan', 'Feb', 'Mars', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                                }
                            }).render();
                        });
                    </script>
                    <!-- End Line Chart -->

                </div>
            </div>
        </div>



        <div class="col-lg-0">
            <div class="card">
                <div class="card-body">
                    {{-- <h5 class="card-title">Column Chart</h5> --}}

                    <!-- Column Chart -->
                    {{-- <div id="columnChart"></div> --}}

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

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Bar Chart</h5>

                    <!-- Bar Chart -->
                    <div id="barChart"></div>

                    <script>
                        document.addEventListener("DOMContentLoaded", () => {
                            new ApexCharts(document.querySelector("#barChart"), {
                                series: [{
                                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                                }],
                                chart: {
                                    type: 'bar',
                                    height: 350
                                },
                                plotOptions: {
                                    bar: {
                                        borderRadius: 4,
                                        horizontal: true,
                                    }
                                },
                                dataLabels: {
                                    enabled: false
                                },
                                xaxis: {
                                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy',
                                        'France', 'Japan',
                                        'United States', 'China', 'Germany'
                                    ],
                                }
                            }).render();
                        });
                    </script>
                    <!-- End Bar Chart -->

                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Pie Chart</h5>

                    <!-- Pie Chart -->
                    <div id="pieChart"></div>

                    <script>
                        document.addEventListener("DOMContentLoaded", () => {
                            new ApexCharts(document.querySelector("#pieChart"), {
                                series: [44, 55, 13, 43, 22],
                                chart: {
                                    height: 350,
                                    type: 'pie',
                                    toolbar: {
                                        show: true
                                    }
                                },
                                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
                            }).render();
                        });
                    </script>
                    <!-- End Pie Chart -->

                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Donut Chart</h5>

                    <!-- Donut Chart -->
                    <div id="donutChart"></div>

                    <script>
                        document.addEventListener("DOMContentLoaded", () => {
                            new ApexCharts(document.querySelector("#donutChart"), {
                                series: [44, 55, 13, 43, 22],
                                chart: {
                                    height: 350,
                                    type: 'donut',
                                    toolbar: {
                                        show: true
                                    }
                                },
                                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                            }).render();
                        });
                    </script>
                    <!-- End Donut Chart -->

                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Radar Chart</h5>

                    <!-- Radar Chart -->
                    <div id="radarChart"></div>

                    <script>
                        document.addEventListener("DOMContentLoaded", () => {
                            new ApexCharts(document.querySelector("#radarChart"), {
                                series: [{
                                    name: 'Series 1',
                                    data: [80, 50, 30, 40, 100, 20],
                                }],
                                chart: {
                                    height: 350,
                                    type: 'radar',
                                },
                                xaxis: {
                                    categories: ['January', 'February', 'March', 'April', 'May', 'Junsse']
                                }
                            }).render();
                        });
                    </script>
                    <!-- End Radar Chart -->

                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Polar Area Chart</h5>

                    <!-- Polar Area Chart -->
                    <div id="polarAreaChart"></div>

                    <script>
                        document.addEventListener("DOMContentLoaded", () => {
                            new ApexCharts(document.querySelector("#polarAreaChart"), {
                                series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
                                chart: {
                                    type: 'polarArea',
                                    height: 350,
                                    toolbar: {
                                        show: true
                                    }
                                },
                                stroke: {
                                    colors: ['#fff']
                                },
                                fill: {
                                    opacity: 0.8
                                }
                            }).render();
                        });
                    </script>
                    <!-- End Polar Area Chart -->

                </div>
            </div>
        </div>

        <div class="col-lg-0">
            <div class="card">
                <div class="card-body">
                    {{-- <h5 class="card-title">Radial Bar Chart</h5> --}}

                    <!-- Radial Bar Chart -->
                    {{-- <div id="radialBarChart"></div> --}}

                    <script>
                        document.addEventListener("DOMContentLoaded", () => {
                            new ApexCharts(document.querySelector("#radialBarChart"), {
                                series: [44, 55, 67, 83],
                                chart: {
                                    height: 350,
                                    type: 'radialBar',
                                    toolbar: {
                                        show: true
                                    }
                                },
                                plotOptions: {
                                    radialBar: {
                                        dataLabels: {
                                            name: {
                                                fontSize: '22px',
                                            },
                                            value: {
                                                fontSize: '16px',
                                            },
                                            total: {
                                                show: true,
                                                label: 'Total',
                                                formatter: function(w) {
                                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                                    return 249
                                                }
                                            }
                                        }
                                    }
                                },
                                labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
                            }).render();
                        });
                    </script>
                    <!-- End Radial Bar Chart -->

                </div>
            </div>
        </div>


    </div>

    </div>
    </section>

    </main><!-- End #main -->
    {{-- <section class="section">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                            <h5 class="card-title">Recette, dépense, bénéfice de l'année</h5>
                            <div style="max-height: 600px;" id="reportsChart"></div>
                            <script>
                                document.addEventListener("DOMContentLoaded", () => {
                                    new ApexCharts(document.querySelector("#reportsChart"), {
                                        series: [{
                                            name: 'Bénéfice',
                                            data: [
                                                @foreach ($vehicule as $row)
                                                    {{ rand($row->id, 200) }},
                                                @endforeach
                                            ]
                                        }],
                                        chart: {
                                            height: 350,
                                            type: 'bar',
                                            toolbar: {
                                                show: false
                                            },
                                        },
                                        markers: {
                                            size: 4
                                        },
                                        colors: ['#4154f1'],
                                        fill: {
                                            type: "gradient",
                                            gradient: {
                                                shadeIntensity: 1,
                                                opacityFrom: 0.3,
                                                opacityTo: 0.4,
                                                stops: [0, 90, 100]
                                            }
                                        },
                                        dataLabels: {
                                            enabled: true
                                        },
                                        stroke: {
                                            curve: 'smooth',
                                            width: 2
                                        },
                                        xaxis: {
                                            type: 'text',
                                            categories: [
                                                @foreach ($vehicule as $row)
                                                    '{{ $row->matricule }}',
                                                @endforeach
                                            ]
                                        }
                                    }).render();
                                });
                            </script>

                        </div>

                    </div>
                </div>

            </div>

        </div>
        </div><!-- End Left side columns -->


    </section> --}}
@endsection

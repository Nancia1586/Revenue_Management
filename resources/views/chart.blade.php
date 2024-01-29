@extends('header')
@section('content')
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>CodePen - Chart.js - Download Multiple Charts as PDF</title>
    </head>

    <body>
        <a href="#" id="downloadPdf">Download Repossrt Page as PDF</a>
        <br /><br />
            <div style="width: 30%; height: 400px; clear: both;">
                <canvas id="fromage" style="width: 40%"></canvas>
            </div>

        @include('util.importchart');
        <script>
            var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
            var yValues = [55, 49, 44, 24, 158];
            var barColors = [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
                "#1e7145"
            ];

            new Chart("fromage", {
                type: "pie",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "World Wide Wine Production 2018"
                    }
                }
            });
            // 
        </script>
        //
        <script>
            // const xValues = ["100dd", "asd200", "30dsad0", "40dasd0", "50dasd0", "6dasd00", "7dasd00", "800dasd", "dsad900",
            //     "1dasd000"
            // ];
            // var myChart = new Chart(document.getElementById("myChart__"), {
            //     type: "bar",
            //     data: {
            //         labels: xValues,
            //         datasets: [{
            //             data: [860, 1140, 1060, 10, 1070, 1110, 1330, 2210, 7830, 2478],
            //             borderColor: "red",
            //             fill: false
            //         }]
            //     },
            //     options: {
            //         legend: {
            //             display: false
            //         }
            //     }
            // });


            $('#downloadPdf').click(function(event) {
                // get size of report page
                var reportPageHeight = 1300; //$('#reportPage').innerHeight();
                var reportPageWidth = 630; // $('#reportPage').innerWidth();

                // create a new canvas object that we will populate with all other canvas objects
                var pdfCanvas = $('<canvas />').attr({
                    id: "canvaspdf",
                    width: reportPageWidth,
                    height: reportPageHeight
                });

                // keep track canvas position
                var pdfctx = $(pdfCanvas)[0].getContext('2d');
                var pdfctxX = 100;
                var pdfctxY = 199;
                var buffer = 100;

                // for each chart.js chart
                $("canvas").each(function(index) {
                    // get the chart height/width
                    var canvasHeight = $(this).innerHeight();
                    var canvasWidth = $(this).innerWidth();

                    // draw the chart into the new canvas
                    pdfctx.drawImage($(this)[0], pdfctxX, pdfctxY, canvasWidth, canvasHeight);
                    pdfctxX += canvasWidth + buffer;

                    // our report page is in a grid pattern so replicate that in the new canvas
                    if (index % 2 === 1) {
                        pdfctxX = 0;
                        pdfctxY += canvasHeight + buffer;
                    }
                });

                // create new pdf and add our new canvas as an image
                var pdf = new jsPDF('l', 'pt', [reportPageWidth, reportPageHeight]);
                pdf.addImage($(pdfCanvas)[0], 'PNG', 0, 0);

                pdf.text(20, 20, 'This is a title');

                pdf.setFontSize(16);
                pdf.text(20, 30, 'This is some normal sized text underneath.');

                pdf.save('filename.pdf');
            });
        </script>

    </body>

    </html>
@endsection

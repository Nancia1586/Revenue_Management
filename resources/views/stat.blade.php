{{-- @extends('header')
@section('content') --}}
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>CodePen - Chart.js - Download Multiple Charts as PDF</title>
        
    <script src='/fromage/jquery.min.js'></script>
    <script src='/fromage/Chart.min.js'></script>
    <link rel="stylesheet" href="/fromage/style.css">
    </head>
    <script>
      function clik(){
        window.print();
      }
    </script>

    <body>
        <button onclick="clik()">
CLIKK
        </button>
        <a href="#" id="downloadPdf">Download Repossrt Pages as PDF</a>
        <br /><br />
            <div style="width: 30%; height: 400px; clear: both;">
                <canvas id="fromage" style="width: 40%"></canvas>
            </div>
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
                        text: "Repartition des depenses"
                    }
                }
            });
        </script>
     
    </body>
  
    </html>
{{-- @endsection     --}}

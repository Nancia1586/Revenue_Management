
<?php 
// $path='E:\ITU\Evalutaion\MyProject\public\test.png' ;
// $type=pathinfo($path,PATHINFO_EXTENSION);
// $data=file_get_contents($path);
// $base64='data:image/'.$type.';base64,'.base64_encode($data);
?>
<style>
    table {
        margin-bottom: 1em;
    }

    table td {
        padding: 3px;
    }

    .table1 {
        border: 1px solid rgb(255, 255, 255);
    }

    .table2,
    .table2 td {
        border: 1px solid silver;
        border-collapse: collapse;
    }

    .table2 td:first-child {
        background-color: lightblue;
    }

    .di-table {
        margin: 0px;
        padding: 0px;
        width: 100%;
        box-shadow: 10px 10px 5px #888888;
        border: 1px solid #000000;
        -moz-border-radius-bottomleft: 0px;
        -webkit-border-bottom-left-radius: 0px;
        border-bottom-left-radius: 0px;
        -moz-border-radius-bottomright: 0px;
        -webkit-border-bottom-right-radius: 0px;
        border-bottom-right-radius: 0px;
        -moz-border-radius-topright: 0px;
        -webkit-border-top-right-radius: 0px;
        border-top-right-radius: 0px;
        -moz-border-radius-topleft: 0px;
        -webkit-border-top-left-radius: 0px;
        border-top-left-radius: 0px;
    }

    .di-table table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
    }

    .di-table tr:last-child td:last-child {
        -moz-border-radius-bottomright: 0px;
        -webkit-border-bottom-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    .di-table table tr:first-child td:first-child {
        -moz-border-radius-topleft: 0px;
        -webkit-border-top-left-radius: 0px;
        border-top-left-radius: 0px;
    }

    .di-table table tr:first-child td:last-child {
        -moz-border-radius-topright: 0px;
        -webkit-border-top-right-radius: 0px;
        border-top-right-radius: 0px;
    }

    .di-table tr:last-child td:first-child {
        -moz-border-radius-bottomleft: 0px;
        -webkit-border-bottom-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }

    .di-table tr:hover td {}

    .di-table tr:nth-child(odd) {
        background-color: #f1f1ff;
    }

    .di-table tr:nth-child(even) {
        background-color: #ffffff;
    }

    .di-table td {
        vertical-align: middle;
        border: 1px solid #000000;
        border-width: 0px 1px 1px 0px;
        text-align: left;
        padding: 7px;
        font-size: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: normal;
        color: #000000;
    }

    .di-table tr:last-child td {
        border-width: 0px 1px 0px 0px;
    }

    .di-table tr td:last-child {
        border-width: 0px 0px 1px 0px;
    }

    .di-table tr:last-child td:last-child {
        border-width: 0px 0px 0px 0px;
    }

    .di-table tr:first-child td {
        background: -o-linear-gradient(bottom, #ff7f00 5%, #bf5f00 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ff7f00), color-stop(1, #bf5f00));
        background: -moz-linear-gradient(center top, #ff7f00 5%, #bf5f00 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff7f00", endColorstr="#bf5f00");
        background: -o-linear-gradient(top, #ff7f00, bf5f00);
        background-color: #bfd2fc;
        border: 0px solid #000000;
        text-align: center;
        border-width: 0px 0px 1px 1px;
        font-size: 14px;
        font-family: Arial;
        font-weight: bold;
        color: #ffffff;
    }

    .di-table tr:first-child:hover td {
        background: -o-linear-gradient(bottom, #ff7f00 5%, #bf5f00 100%);
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ff7f00), color-stop(1, #bf5f00));
        background: -moz-linear-gradient(center top, #ff7f00 5%, #bf5f00 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff7f00", endColorstr="#bf5f00");
        background: -o-linear-gradient(top, #ff7f00, bf5f00);
        background-color: #ff7f00;
    }

    .di-table tr:first-child td:first-child {
        border-width: 0px 0px 1px 0px;
    }

    .di-table tr:first-child td:last-child {
        border-width: 0px 0px 1px 1px;
    }
</style>

<body style="font-family:Arial, Helvetica, sans-serif">
    <div class="row">

        <div class="col-md-12">
            <h3 style="text-align:center;font-size:30px;background-color: aquamarine">
                <u>
                    MIKOLO
                </u>
            </h3>

            <h3 style="text-align:right;">Total de vente par mois</h3>
           
            <h2  style="text-align:left;">
                Point de vente:{{$nom}}
            </h2>
            <table class="di-table" style="" border="1px">
                <tr >
                    <th>MOIS</th>
                    <th>Total</th>

                </tr>

                @foreach ($liste as $row)
                    <tr style="font-size:29px">
                        <td>{{ $row->mois }}</td>
                        <td>{{ Util::format($row->total)." " }}Ar</td>

                    </tr>
                @endforeach

            </table>
        </div>
    </div>
    {{-- <img src="{{$base64}}"/> --}}
</body>

</html>

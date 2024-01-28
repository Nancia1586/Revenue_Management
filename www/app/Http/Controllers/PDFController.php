<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// namespace App\Http\Controllers;
use Barryvdh\DomPDF\Facade\Pdf;



// use Barryvdh\DomPDF\PDF;
// use Barryvdh\DomPDF\Facade as PDF;



class PDFController extends Controller

{

    /**

     * Display a listing of the resource.

     *

     * @return \Illuminate\Http\Response

     */

    public function generatePDF()

    {

        $data = [

            'title' => 'Welcome to ItSolutionStuff.com',

            'date' => date('m/d/Y')

        ];
        $pdf = Pdf::loadView('myPDF', $data);
        return $pdf->download('itsolutionstuff.pdf');
    }
    public function voir()
    {


        return view('myPDF', [

            'title' => 'Welcome to ItSolutionStuff.com',

            'date' => date('m/d/Y')

        ]);
    }
}

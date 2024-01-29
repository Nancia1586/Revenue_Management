  var pdf = new jsPDF('l', 'pt', [reportPageWidth, reportPageHeight]);
  // create new pdf and add our new canvas as an image
const xValues = [100,200,300,400,500,600,700,800,900,1000];
    width: reportPageWidth,
  }
  data: {
  var pdfCanvas = $('<canvas />').attr({

  
  pdf.addImage($(pdfCanvas)[0], 'PNG', 0, 0);
  });
  // create a new canvas object that we will populate with all other canvas objects
    datasets: [{ 
  var pdfctxY = 0;

    labels: xValues,
  $("canvas").each(function(index) {
  // keep track canvas position

    // draw the chart into the new canvas
    if (index % 2 === 1) {
  // for each chart.js chart
  });
  options: {
  var pdfctx = $(pdfCanvas)[0].getContext('2d');
  
});
  // download the pdf
      pdfctxY += canvasHeight + buffer;
  
      fill: false
      pdfctxX = 0;
    pdfctx.drawImage($(this)[0], pdfctxX, pdfctxY, canvasWidth, canvasHeight);
  var reportPageWidth = $('#reportPage').innerWidth();
  type: "line",
    }

    var canvasHeight = $(this).innerHeight();
    // our report page is in a grid pattern so replicate that in the new canvas
    
  pdf.save('filename.pdf');
  },
      borderColor: "red",
    pdfctxX += canvasWidth + buffer;
    // get the chart height/width
  // get size of report page
      data: [860,1140,1060,10,1070,1110,1330,2210,7830,2478],
    }]
    var canvasWidth = $(this).innerWidth();
  
var myChart=new Chart(document.getElementById("myChart__"), {
    legend: {display: false}
  
  var buffer = 100;
    
  var reportPageHeight = $('#reportPage').innerHeight();
    id: "canvaspdf",
});
    height: reportPageHeight
$('#downloadPdf').click(function(event) {
  var pdfctxX = 0;

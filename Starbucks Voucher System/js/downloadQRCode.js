
var logged_numcard = localStorage.getItem("logged_numcard");

console.log(logged_numcard);


function generate(){
// $(function () {
//      $('#generate').click(function () {
          let finalURL =
               'https://chart.googleapis.com/chart?cht=qr&chl=' +
               htmlEncode(logged_numcard) +
               '&chs=160x160&chld=L|0'
          // Replace the src of the image with the QR code image 
          $('.qr-code').attr('src', finalURL);
//      });
// });
}

function exportHTML() {
     var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
          "xmlns:w='urn:schemas-microsoft-com:office:word' " +
          "xmlns='http://www.w3.org/TR/REC-html40'>" +
          "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
     var footer = "</body></html>";

     var source = 'data:application/vnd.ms-word;charset=utf-8,' + "Your discount code is : " + encodeURIComponent(logged_numcard);
     var fileDownload = document.createElement("a");
     document.body.appendChild(fileDownload);
     fileDownload.href = source;
     fileDownload.download = 'document.doc';
     fileDownload.click();
     document.body.removeChild(fileDownload);
}
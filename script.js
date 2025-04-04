import pdfUrl from './pdf/access.pdf';

// Set the src attribute of the embed tag to the PDF file URL
document.getElementById('pdf-viewer').src = pdfUrl;

// Add event listener to the button
document.getElementById('open-pdf-button').addEventListener('click', function() {
    // Open the PDF file in a new tab
    window.open(pdfUrl, '_blank');
});

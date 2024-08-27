import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const  downloadPdf = (ele) => {
 
   try {
    if(!ele) {
      throw new Error('Element not found');
    }
     html2canvas(ele, { scale: 1 }).then((canvas) => {
         const imgData = canvas.toDataURL("image/png");
         const pdf = new jsPDF("p", "mm", "a4");
         const imgWidth = 210;
         const imgHeight = (canvas.height * imgWidth) / canvas.width;
   
         pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
         pdf.save("download.pdf");
       });
   } catch (error) {
      console.log(error.message)
   }
}
export default downloadPdf

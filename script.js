function scrollToElement(elementSelector, instance = 0) {
   const elements = document.querySelectorAll(elementSelector);
   if (elements.length > instance) {
      elements[instance].scrollIntoView({ behavior: 'smooth' });
   }
}
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const link5 = document.getElementById('link5');
link1.addEventListener('click', () => {
   scrollToElement('.sobre-mim');
})
link2.addEventListener('click', () => {
   scrollToElement('.container-skills');
})
link3.addEventListener('click', () => {
   scrollToElement('.projetos');
})

link4.addEventListener('click', () => {
   scrollToElement('.teste');
})

link5.addEventListener('click', () => {
   scrollToElement('.contatos');
})

document.getElementById("openPdfButton").addEventListener("click", function() {
   // URL do arquivo PDF
   const pdfUrl = "Currículo Profissional Simples.pdf";
   
   // Abre o PDF em uma nova guia
   window.open(pdfUrl, '_blank');
});

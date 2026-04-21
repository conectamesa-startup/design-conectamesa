const fs = require('fs');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function extractPDF() {
    const data = new Uint8Array(fs.readFileSync('./Conecta_Mesa_Especificacao_UI_UX.pdf'));
    const doc = await pdfjsLib.getDocument({ data }).promise;
    
    console.log('Total pages:', doc.numPages);
    
    let fullText = '';
    
    for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        fullText += pageText + '\n\n--- PAGE ' + i + ' END ---\n\n';
    }
    
    fs.writeFileSync('./ui_ux_raw.txt', fullText, 'utf-8');
    console.log('Text extracted successfully! Length:', fullText.length);
}

extractPDF().catch(err => console.error('Error:', err));

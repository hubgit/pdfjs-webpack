import * as PDFJS from 'pdfjs-dist'

PDFJS.GlobalWorkerOptions.workerPort = new Worker(new URL('pdfjs-dist/build/pdf.worker.mjs', import.meta.url))

const doc = await PDFJS.getDocument({
  url: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
}).promise

console.log(doc.numPages)

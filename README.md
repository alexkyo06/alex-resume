# Alex Resume

Polished bilingual resume site for Alex Xu, with:

- A visual landing page for GitHub and portfolio sharing
- A one-page English resume in HTML and PDF
- A one-page Chinese resume in HTML and PDF

## Pages

- [Landing page](./index.html)
- [English resume](./resume-en.html)
- [Chinese resume](./resume-zh.html)

## PDF exports

- [English PDF](./pdf/Alex-Xu-Resume-EN.pdf)
- [Chinese PDF](./pdf/Alex-Xu-Resume-ZH.pdf)

## Structure

- `index.html`: portfolio-style overview page
- `resume-en.html`: English resume for international applications
- `resume-zh.html`: Chinese resume for domestic applications
- `css/site.css`: landing page styles
- `css/resume.css`: print-friendly resume styles
- `js/script.js`: shared print behavior
- `scripts/export-pdf.ps1`: local PDF export helper

## Export PDFs locally

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\export-pdf.ps1
```

The script uses headless Microsoft Edge to export fresh PDF files into `pdf/`.

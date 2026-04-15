$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$pdfDir = Join-Path $root "pdf"

if (-not (Test-Path -LiteralPath $pdfDir)) {
  New-Item -ItemType Directory -Path $pdfDir | Out-Null
}

$edgeCandidates = @(
  "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
  "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
)

$edge = $edgeCandidates | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1

if (-not $edge) {
  throw "Microsoft Edge not found."
}

$enHtml = (Resolve-Path (Join-Path $root "resume-en.html")).Path
$zhHtml = (Resolve-Path (Join-Path $root "resume-zh.html")).Path
$enPdf = Join-Path $pdfDir "Alex-Xu-Resume-EN.pdf"
$zhPdf = Join-Path $pdfDir "Alex-Xu-Resume-ZH.pdf"

& $edge --headless --disable-gpu --print-to-pdf-no-header --print-to-pdf="$enPdf" "file:///$($enHtml -replace '\\','/')"
& $edge --headless --disable-gpu --print-to-pdf-no-header --print-to-pdf="$zhPdf" "file:///$($zhHtml -replace '\\','/')"

Write-Host "Exported:"
Write-Host $enPdf
Write-Host $zhPdf

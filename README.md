# Spær Studio — version 1.0

To selvstændige sider i lyst tema, bygget med Three.js:

- `index.html`: spærberegner med sadeltag/pulttag, spændvidde, længde, hældning, maksimal spærafstand og udhæng.
- `opmaaling.html`: digital afstandsmåling mellem modellens grønne knudepunkter.

Projektets geometri gemmes lokalt i browseren og deles mellem siderne. Opmålinger gælder den aktuelle session og kan eksporteres med projektet som JSON. Eksport understøtter ikke genimport i version 1. Browserudskrift er tilgængelig.

## Beregningsgrundlag

Geometrisk model med rektangulær bygning og symmetrisk sadeltag eller pulttag. Højden beregnes over rem. Tagarealet inkluderer det vandrette udhæng på sider og gavle. Antal spærpositioner er `ceil(længde / maksimal afstand) + 1`, med jævn fordeling inkl. begge gavle. Den viste bygningshøjde er illustrativt 2,6 m. Spærprofiler og gitre er illustrative, ikke produktionsgeometri.

Værktøjet beregner **ikke bæreevne, laster, samlinger, materialedimensioner, pris eller statisk godkendelse**. Opmålingen er baseret på indtastede modelmål; den foretager ikke fysisk scanning eller fotoopmåling.

## Udvikling

Node.js 22 eller nyere:

```
npm ci
npm test
npm run build
npx vite --host 0.0.0.0
```

## GitHub Pages

Workflowet `.github/workflows/pages.yml` tester og bygger begge sider og publicerer `dist` ved push til `main` eller manuel start. Vælg **GitHub Actions** som Source under Settings → Pages. Relative assetstier understøtter repository-stien `/spaer/`. Ingen hemmeligheder kræves.

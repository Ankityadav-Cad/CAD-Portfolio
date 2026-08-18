# Ankit // Mechanical Design Portfolio

A dark engineering/CAD portfolio for an SPM Design Engineer.

## GitHub-only workflow

This site is intentionally static. There is no Supabase, database, login, or browser-local project editor.

### Add a new project

1. Put the project image in `assets/images/`.
2. If you have a web-viewable 3D model, put a **GLB** file in `assets/models/`.
3. Open `script.js`.
4. Add an object to the `projects` array:

```js
{
  id: 5,
  title: 'MY NEW MACHINE',
  desc: 'Short explanation of what I designed and what the project does.',
  tags: 'SPM DESIGN · SOLIDWORKS · FIXTURE',
  image: 'assets/images/my-machine.jpg',
  model: 'assets/models/my-machine.glb'
}
```

5. Commit/push to GitHub.
6. GitHub Pages will serve the updated portfolio after deployment refreshes.

### Image recommendations

Use JPG/WebP for normal renders and photos. Keep filenames simple: lowercase, hyphen-separated, no spaces.

### 3D model recommendations

Use **GLB** whenever possible. It packages geometry, materials and textures into one file and works well with the browser's `<model-viewer>` component.

Native SolidWorks/Fusion 360 files such as `.SLDASM`, `.SLDPRT`, `.F3D` are not directly viewable in the browser. Export a web-friendly GLB copy for the portfolio.

## Existing CAD work

The repository also retains the existing project folders for BMW M8, Connecting Rod, Constant Mesh Gearbox and Single Cylinder Steam Engine. The new homepage can link to or showcase those projects as the portfolio develops.

## Public vs private work

Do not upload confidential company/customer drawings, proprietary machine dimensions, internal documents, or restricted CAD files. Use sanitized renders and descriptions for professional work where necessary.

## 3D viewer

The portfolio uses Google's `<model-viewer>` web component loaded from a public CDN. Visitors can rotate, zoom and inspect supported GLB/GLTF models directly in the browser.

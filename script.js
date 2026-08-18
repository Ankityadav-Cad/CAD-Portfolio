/* GITHUB-ONLY PROJECT DATABASE
   Add/edit projects here. Put images in assets/images/ and GLB models in assets/models/.
   Example paths: assets/images/my-project.jpg and assets/models/my-project.glb
*/
const projects = [
  {
    id: 1,
    title: 'A1AN WINKER DRIVER TESTING PANEL + FIXTURE',
    desc: 'Special Purpose Machine project involving mechanical design and fixture development for testing applications. Public portfolio version intentionally excludes confidential production details.',
    tags: 'SPM DESIGN · CAD · FIXTURE',
    image: '',
    model: ''
  },
  {
    id: 2,
    title: 'CONNECTING ROD',
    desc: 'Mechanical component modelling project developed in AutoCAD with focus on engineering geometry and drawing practice.',
    tags: 'AUTOCAD · COMPONENT',
    image: '',
    model: ''
  },
  {
    id: 3,
    title: 'CONSTANT MESH GEARBOX',
    desc: '3D gearbox modelling and assembly study in Fusion 360, including mechanical components and animation.',
    tags: 'FUSION 360 · ASSEMBLY',
    image: '',
    model: ''
  },
  {
    id: 4,
    title: 'BMW M8 — SURFACE MODEL',
    desc: 'Automotive surface-modelling exercise in Fusion 360 using Patch Mode to study complex curves and form development.',
    tags: 'FUSION 360 · SURFACE',
    image: '',
    model: ''
  }
];

const grid = document.querySelector('#projectGrid');
const heroModel = document.querySelector('#heroModel');

function renderProjects() {
  grid.innerHTML = projects.map((p, i) => `
    <article class="project ${i === 0 ? 'featured' : ''}">
      <div class="visual">
        ${p.image ? `<img src="${p.image}" alt="${p.title}" loading="lazy">` : `<div class="placeholder"><b>PROJECT IMAGE</b><span>Add a CAD render in assets/images/</span><small>Then set the image path in script.js</small></div>`}
        <span class="tag">${p.tags.split(' · ')[0] || 'PROJECT'}</span>
        <span class="drawing">PROJECT_${String(p.id).padStart(3, '0')}</span>
      </div>
      <div class="info">
        <p>PROJECT_${String(p.id).padStart(3, '0')}</p>
        <h3>${p.title}</h3><em></em>
        <p class="desc">${p.desc}</p>
        <div class="meta">${p.tags}</div>
        ${p.model ? `<div class="project-model"><model-viewer src="${p.model}" camera-controls auto-rotate rotation-per-second="12deg" environment-image="neutral" exposure="1.1" shadow-intensity="0.7" alt="Interactive 3D model of ${p.title}"></model-viewer></div>` : ''}
      </div>
    </article>`).join('');
}

renderProjects();

// Optional featured model: uncomment/set a path when you have a GLB.
// heroModel.src = 'assets/models/featured-project.glb';
if (heroModel && heroModel.getAttribute('src') === null) heroModel.style.display = 'none';

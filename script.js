/* GITHUB-ONLY PROJECT DATABASE
   Add/edit projects here.
   Put images in assets/images/ and GLB models in assets/models/.
   The paths below are already prepared for the Automatic Screw Feeder project.
*/
const projects = [
  {
    id: 1,
    title: 'AUTOMATIC SCREW FEEDER',
    desc: 'Reverse-engineered an automatic screw feeder system to study its mechanical architecture, component geometry, assembly relationships and feeding mechanism, then recreated the system in CAD.',
    tags: 'REVERSE ENGINEERING · SPM DESIGN · SOLIDWORKS',
    image: 'assets/images/automatic-screw-feeder-01.png',
    gallery: [
      'assets/images/automatic-screw-feeder-01.png',
      'assets/images/automatic-screw-feeder-02.png',
      'assets/images/automatic-screw-feeder-03.png',
      'assets/images/automatic-screw-feeder-04.png',
      'assets/images/automatic-screw-feeder-05.png'
    ],
    model: 'assets/models/automatic-screw-feeder.glb'
  },
  {
    id: 2,
    title: 'A1AN WINKER DRIVER TESTING PANEL + FIXTURE',
    desc: 'Special Purpose Machine project involving mechanical design and fixture development for testing applications.',
    tags: 'SPM DESIGN · CAD · FIXTURE',
    image: '',
    gallery: [],
    model: ''
  },
  {
    id: 3,
    title: 'CONNECTING ROD',
    desc: 'Mechanical component modelling project developed in AutoCAD with focus on engineering geometry and drawing practice.',
    tags: 'AUTOCAD · COMPONENT',
    image: '',
    gallery: [],
    model: ''
  },
  {
    id: 4,
    title: 'CONSTANT MESH GEARBOX',
    desc: '3D gearbox modelling and assembly study in Fusion 360, including mechanical components and animation.',
    tags: 'FUSION 360 · ASSEMBLY',
    image: '',
    gallery: [],
    model: ''
  },
  {
    id: 5,
    title: 'BMW M8 — SURFACE MODEL',
    desc: 'Automotive surface-modelling exercise in Fusion 360 using Patch Mode to study complex curves and form development.',
    tags: 'FUSION 360 · SURFACE',
    image: '',
    gallery: [],
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
        ${p.gallery?.length ? `<div class="project-gallery">${p.gallery.map(src => `<img src="${src}" alt="${p.title} project view" loading="lazy">`).join('')}</div>` : ''}
        ${p.model ? `<div class="project-model"><model-viewer src="${p.model}" camera-controls auto-rotate rotation-per-second="12deg" environment-image="neutral" exposure="1.1" shadow-intensity="0.7" alt="Interactive 3D model of ${p.title}"></model-viewer></div>` : ''}
      </div>
    </article>`).join('');
}

renderProjects();

// The Automatic Screw Feeder GLB is used as the hero model once the file is uploaded.
if (heroModel) {
  heroModel.src = 'assets/models/automatic-screw-feeder.glb';
  heroModel.style.display = 'block';
}

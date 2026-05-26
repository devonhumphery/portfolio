/* ─── Case study data ─── */
const studies = [
  {
    emoji:'🔬', bg:'#E1F5EE',
    tags:['Usability Research','Heuristic Evaluation','Survey Design'],
    title:'Obsidian note-linking usability study',
    sub:'Evaluating how intuitively users create, navigate, and leverage linked notes in a non-linear knowledge management tool.',
    client:'Ball State University', year:'2024', role:'Lead Researcher',
    problem:'Obsidian offers a powerful graph-based note system, but its linking mechanics presented a steep learning curve. The study asked: does the interface support users in organizing complex information, or does its flexibility become a barrier? Survey participants reported fragmented notes across multiple tools and desired unified, searchable systems — a baseline Obsidian promises but doesn\'t always deliver.',
    process:'I distributed surveys via Microsoft Teams, Slack, and in-person at Ball State, targeting students and professionals aged 18–35. Survey questions probed pain points, ideal tool features, and organization habits. I then conducted a structured heuristic evaluation of Obsidian using Nielsen\'s 10 usability heuristics across the note-linking workflow. Data was collected in Qualtrics and analyzed in Excel. Three user personas emerged: the fragmented multi-tool user, the power user seeking deeper integration, and the casual note-taker overwhelmed by complexity.',
    outcome:'Key findings showed Obsidian\'s linking system lacked visual feedback on link creation, had no undo/redo affordance in certain contexts, and offered no onboarding for new users. Recommendations included contextual tooltips, link confirmation cues, and a guided first-use tutorial. The evaluation provided a concrete foundation for a redesign proposal prioritizing progressive disclosure over feature exposure.',
    stats:[{n:'3',l:'Personas developed'},{n:'10',l:'Heuristics evaluated'},{n:'4',l:'Key friction points identified'}],
    media: null
  },
  {
    emoji:'🐝', bg:'#FDF4FF',
    tags:['Interactive Narrative','Python / Ren\'Py','IDN Theory'],
    title:'Busy Bees — interactive digital narrative',
    sub:'A dystopian Ren\'Py game where four tracked variables — agency, suspicion, hive trust, and obedience — shape player experience across three branching story tracks.',
    client:'Ball State University', year:'2026', role:'Solo Developer &amp; Designer',
    problem:'The challenge was building an interactive narrative that felt consequential without explicit score displays. The game places players inside a collapsing hive society where bees are disappearing and their life force is being extracted. Tension had to emerge through environmental storytelling and implication — not overt conflict. Players needed to feel the weight of compliance versus resistance without being told which to choose.',
    process:'I developed the full game in Python using the Ren\'Py visual novel engine, coding four tracked variables that dynamically adjusted dialogue, scene access, and narrative outcomes. The architecture followed Koenitz\'s IDN framework: authorship distributed between system and player, with procedural storytelling emerging from accumulated behavioral patterns rather than single decisions. Following usability testing, I added character assets for key NPCs, narrative pop-ups for system feedback, and early low-stakes choices to establish player agency before higher-consequence moments.',
    outcome:'Usability testing revealed that players needed earlier agency cues to understand the system was tracking their choices. Post-revision playthroughs showed stronger narrative investment and clearer moral tension at the Chapter 3 climax. The project demonstrates that consequence-driven storytelling — where endings reflect cumulative patterns, not single choices — creates more authentic player reflection. Published and downloadable on itch.io.',
    stats:[{n:'3',l:'Narrative endings'},{n:'4',l:'Tracked player variables'},{n:'3',l:'Chapters with branching paths'}],
    media: null
  },
  {
    emoji:'🌿', bg:'#FAEEDA',
    tags:['Transmedia Storytelling','Strategic Communication','Campaign Design'],
    title:'Sola: Light in a Polluted Industry',
    sub:'A transmedia storytelling campaign built around a fictional sustainable apparel brand, designed to close the attitude–behavior gap in environmental consumer decision-making.',
    client:'Ball State University · EMDD 640', year:'2026', role:'Co-Executive Producer',
    problem:'Seven in ten Americans say nature is important to their health, yet the $17B outdoor apparel industry routinely uses PFAS — chemicals that persist in ecosystems and human bodies. The gap isn\'t ignorance; it\'s a system that obscures consequence. Brands promote sustainability messaging while continuing harmful production. Consumers want to act responsibly but lack clarity. Sola was designed to make the invisible visible.',
    process:'Working with co-producer Annie Young, I designed a transmedia storyworld across four narrative nodes: a founder documentary, an investigative editorial, a behind-the-scenes design feature, and Sola: The Supply Chain — a card-based strategy game where players balance Integrity, Profit, and Trust over six rounds. Distribution used boutique fitness studios as high-trust entry points, Google search capture for intent-driven discovery, and community events with QR-linked educational hubs. Testing included think-aloud protocols, empathy interviews, A/B caption testing, and platform analytics.',
    outcome:'The campaign mapped audience movement from passive awareness to active advocacy through four stages. The AR experience "Trace the Fabric" extended the storyworld into users\' physical environments, scanning garments to reveal supply chain origins and PFAS detection overlays. The project was structured for real-world brand application, with a producer network spanning sustainability scientists, fashion leaders, and media strategists.',
    stats:[{n:'4',l:'Transmedia story nodes'},{n:'6',l:'Week deployment arc'},{n:'3',l:'Media channel strategy'}],
    media: null
  },
  {
    emoji:'🏛️', bg:'#E6F1FB',
    tags:['Government Affairs','Policy Research','Legislative Operations'],
    title:'Indiana legislative operations &amp; policy research',
    sub:'Legislative intern to senior House leadership during Indiana\'s $44B budget session — policy research, constituent liaison, and civic communication across state and federal offices.',
    client:'Indiana House of Representatives · Ball State University · Office of Sen. Jim Banks', year:'2025–2026', role:'Legislative Intern → Grad Assistant → Congressional Intern',
    problem:'State legislative offices operate under intense time pressure with high information volume. During the 2025 Budget Session, leadership staff needed reliable, fast policy synthesis across committees including Courts and Criminal Code and Judiciary. Simultaneously, Ball State\'s Office of Governmental Relations needed someone who could track higher education legislation, interpret budget implications, and represent the university\'s interests to state and federal policymakers.',
    process:'At the Indiana House of Representatives, I supported Speaker Todd Huston, Majority Caucus Chair Greg Steuerwald, the Director of Legislative Operations, and the Deputy Director — researching bills, preparing policy briefs, serving as governmental liaison with advocacy groups and agencies, and delivering civic awareness presentations to groups of 30–70. At Ball State, I tracked and interpreted legislation across higher education, research funding, student aid, and workforce development. Currently in the Congressional office of U.S. Senator Jim Banks, conducting policy research on emerging technology, geopolitics, AI, and national security.',
    outcome:'Named Intern of the Year (Verizon Scholar) by the Indiana General Assembly — selected by caucus members, legislative staff, and fellow interns. Expanded the Alcuin Study Center Student Advisory Board from 10 to 30+ active members as Student President. Contributed to Ball State\'s recruitment pipeline for the General Assembly internship program.',
    stats:[{n:'$44B',l:'Budget session supported'},{n:'3×',l:'Legislative offices served'},{n:'30+',l:'Advisory board members grown'}],
    media: null
  },
  {
    emoji:'💡', bg:'#FEF9EE',
    tags:['Capstone Research','Prototyping','Usability'],
    title:'Breaking Brightness — experiential study of unnecessary interface innovation',
    sub:'A design-research capstone asking: does innovation in the interface actually improve usability? Participants completed brightness adjustment tasks using intentionally unconventional controls across low- and mid-fidelity prototypes.',
    client:'Ball State University · EMDD 680 Capstone', year:'2026', role:'Sole Researcher &amp; Designer',
    problem:'Existing HCI research critiques poor interface design through expert review and post-hoc analysis — but rarely lets users experience the consequences of unnecessary innovation for themselves. Brightness control is the ideal domain: a single, universally standardized task where any deviation from the familiar linear slider produces measurable cognitive and affective responses. The study asked: when does redesign help, and when does it just introduce friction?',
    process:'I designed a low-fidelity paper prototype featuring five metaphorical brightness controls: manual panels, a resizable sun, lamps, a candle cursor, and an alarm clock. Four participants completed tasks using sticky-note interactivity to simulate screen state changes while I recorded task completion time, failure attempts, and frustration ratings. Post-testing interviews surfaced key insights about mental model alignment. Findings directly informed a mid-fidelity digital prototype built in Ren\'Py, which reduced interaction variants, added structured onboarding, and improved system feedback.',
    outcome:'Interactions aligned with real-world metaphors (the sun, the alarm clock) were rated most intuitive. Abstract controls with unclear mapping caused consistent confusion regardless of learnability. An unexpected finding: some "broken" interactions were described as engaging or game-like, suggesting intentionally flawed systems hold value as reflective design education tools. The project produced a framework for evaluating when innovation is beneficial — and when restraint is the more user-centered choice.',
    stats:[{n:'5',l:'Unconventional controls tested'},{n:'2',l:'Prototype fidelity stages'},{n:'4',l:'Participants, 10 min avg session'}],
    media: {
      type:'photos',
      slots:[
        'Low-fi prototype hub — paper cardstock layout',
        'Sticky-note interaction simulation in testing',
        'Mid-fi Ren\'Py screen — manual brightness panels',
        'Mid-fi Ren\'Py screen — lamp interaction'
      ]
    }
  },
  {
    emoji:'💰', bg:'#EAF3DE',
    tags:['Technical Development','Python / Ren\'Py','Client Work','Financial Literacy'],
    title:'EAC: Get Real — financial literacy game',
    sub:'Lead technical developer on a Ren\'Py financial literacy experience for the Economic Awareness Council, teaching foster youth and young adults how everyday decisions shape long-term financial outcomes.',
    client:'Economic Awareness Council · Ball State University', year:'2026', role:'Lead Technical Developer',
    problem:'The Economic Awareness Council needed to digitize their Money Matters financial literacy program — converting a formerly physical resource into a scalable, interactive digital experience. The game needed to simulate real financial decisions (earning, spending, banking, social pressure) through an accessible narrative format that could reach a nationwide audience without requiring prior financial knowledge.',
    process:'I led technical development in Python using the Ren\'Py engine across a 6-week sprint, designing and implementing all core back-end systems: a bank system with paycheck mechanics (gross pay, tax deduction, net amount, overdraft logic at line 448 of global.rpy), a relationship/stats system tracking character standing across close/neutral/distant tiers, location-based branching across seven scenes (home, school, work, bank, mall, friends\' house, library), and a random unexpected expense system introducing real-world financial variability. I also authored full technical documentation covering all editable systems — audio, text, images, characters, bank logic, and relationship mechanics — structured so non-developer EAC staff could maintain and expand the game after handoff.',
    outcome:'Delivered a functional mid-fidelity prototype with three narrative endings determined by cumulative financial and relationship choices. The technical documentation enabled clean handoff to the client team. The game is positioned for nationwide implementation as a scalable digital financial literacy resource for the Economic Awareness Council\'s 20th anniversary program.',
    stats:[{n:'7',l:'Playable locations built'},{n:'3',l:'Narrative endings'},{n:'6',l:'Core systems documented'}],
    media: {
      type:'mixed',
      slots:[
        'Game map hub — location selection screen',
        'Bank system mechanics — paycheck and overdraft logic',
        'Relationship stats — character interaction scene'
      ],
      video: 'Full walkthrough of the Get Real experience'
    }
  }
];

/* ─── Icon SVGs (inline, no external dependency) ─── */
const iconPhoto = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;
const iconVideo = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;

/* ─── Navigation ─── */
function go(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  const el = document.getElementById('nav-' + name);
  if (el) el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─── Case study renderer ─── */
function cs(i) {
  const s = studies[i];

  let mediaHTML = '';
  if (s.media) {
    mediaHTML += `<div class="cs-sec"><h3>Project media</h3></div>`;
    if (s.media.slots && s.media.slots.length) {
      mediaHTML += `<div class="media-grid">`;
      s.media.slots.forEach(label => {
        mediaHTML += `
          <div class="media-slot">
            ${iconPhoto}
            <span>${label}</span>
          </div>`;
      });
      mediaHTML += `</div>`;
    }
    if (s.media.video) {
      mediaHTML += `
        <div class="media-grid">
          <div class="media-slot media-slot-full">
            ${iconVideo}
            <span style="font-size:13px">${s.media.video}</span>
          </div>
        </div>`;
    }
  }

  document.getElementById('cs-content').innerHTML = `
    <button class="cs-back" onclick="go('home')">← Back to work</button>
    <div class="cs-hero">
      <div class="tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <h1 class="cs-title">${s.title}</h1>
      <p class="cs-sub">${s.sub}</p>
      <div class="cs-meta">
        <div class="cs-meta-item">
          <span class="cs-meta-label">Client / Context</span>
          <span class="cs-meta-val">${s.client}</span>
        </div>
        <div class="cs-meta-item">
          <span class="cs-meta-label">Year</span>
          <span class="cs-meta-val">${s.year}</span>
        </div>
        <div class="cs-meta-item">
          <span class="cs-meta-label">Role</span>
          <span class="cs-meta-val">${s.role}</span>
        </div>
      </div>
    </div>
    <div class="cs-body">
      <div class="cs-img" style="background:${s.bg}">${s.emoji}</div>
      <div class="cs-sec"><h3>The problem</h3><p>${s.problem}</p></div>
      <div class="cs-sec"><h3>Process</h3><p>${s.process}</p></div>
      <div class="stats">
        ${s.stats.map(x => `
          <div class="stat">
            <div class="stat-num">${x.n}</div>
            <div class="stat-label">${x.l}</div>
          </div>`).join('')}
      </div>
      <div class="cs-sec"><h3>Outcome</h3><p>${s.outcome}</p></div>
      ${mediaHTML}
    </div>
  `;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-cs').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─── Contact form ─── */
function send() {
  const n = document.getElementById('fn').value.trim();
  const e = document.getElementById('fe').value.trim();
  const m = document.getElementById('fm').value.trim();
  if (!n || !e || !m) { alert('Please fill in your name, email, and message.'); return; }

  /*
   * TO WIRE UP EMAIL (Formspree — free, no code):
   * 1. Go to formspree.io and create a free form
   * 2. Replace the fetch URL below with your Formspree endpoint
   * 3. Delete the setTimeout mock and uncomment the fetch block
   *
   * fetch('https://formspree.io/f/YOUR_FORM_ID', {
   *   method: 'POST',
   *   headers: { 'Content-Type': 'application/json' },
   *   body: JSON.stringify({ name: n, email: e, type: document.getElementById('ft').value, message: m })
   * }).then(() => showSuccess());
   */

  showSuccess();
}

function showSuccess() {
  document.getElementById('form-fields').style.display = 'none';
  document.getElementById('form-ok').style.display = 'block';
}

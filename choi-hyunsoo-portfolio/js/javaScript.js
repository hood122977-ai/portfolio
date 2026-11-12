/* =====================================================================
   최현수 PORTFOLIO — javaScript.js
===================================================================== */

const GENRE_COLORS = {
  "RPG":        { color: "#e05c3a", dim: "#6b2d1d" },
  "FPS":        { color: "#b3322f", dim: "#5c1d1c" },
  "HORROR":     { color: "#9b27af", dim: "#4a1257" },
  "ACTION":     { color: "#d8a13a", dim: "#7a5c22" },
  "PLATFORMER": { color: "#3fc6c2", dim: "#1f5e5c" },
  "CASUAL":     { color: "#4caf50", dim: "#245226" },
  "VR":         { color: "#5b8cff", dim: "#2a4488" },
  "AR":         { color: "#c05bff", dim: "#5a2488" },
  "SHOOTER":    { color: "#b3322f", dim: "#5c1d1c" },
  "SIMULATION": { color: "#b6a4ef", dim: "#514679" },
};

function getGenreStyle(genre) {
  const key = Object.keys(GENRE_COLORS).find(k => genre.toUpperCase().startsWith(k));
  return key ? GENRE_COLORS[key] : { color: "#8b8a94", dim: "#3a3a42" };
}

const PPT_LINK = "https://drive.google.com/file/d/1ZkqO6krQcRDRn0GF6qaUnhPpE0w2JiKg/view?usp=sharing";

const PROJECTS = [
  // ===== 핵심 =====
  {
    num: "01", title: "DARK RPG", genre: "RPG", featured: true,
    desc: "다크 판타지 액션 RPG. 적 AI 추적, Kill Count 기반 레벨업·스탯 스케일링, 씬 전환 데이터 유지 구조 직접 구현. Dark Souls·Dark and Darker 영감.",
    tags: ["Unity", "C#", "Singleton", "NavMesh", "Animation"],
    repo: "https://github.com/hood122977-ai/DARK-RPG",
    video: "https://youtu.be/oiTIDupdAc4?si=6r6Vfkws95jvHY1s",
  },
  {
    num: "02", title: "3DAY FPS", genre: "FPS / HORROR", featured: true,
    desc: "3일 만에 완성한 호러 FPS. '우는 천사' 컨셉 몬스터, 총기 장전 시스템을 애니메이션 이벤트로 정교하게 처리.",
    tags: ["Unity", "ShaderLab", "Animation Event", "C#"],
    repo: "https://github.com/hood122977-ai/3DAY-FPS-GAME",
    video: "https://youtu.be/UQ7QnASjjsk?si=RI9C8txJ3LkbPtt3",
  },
  {
    num: "03", title: "LITTLESWORD", genre: "2D ACTION", featured: true,
    desc: "2D 탑다운 멀티플레이어 액션. FSM 기반 적 AI(IDLE→CHASE→ATTACK→DIE), 아처 유도화살 타겟팅, 스킬 쿨타임 시스템. Netcode for GameObjects 적용.",
    tags: ["Unity", "C#", "FSM AI", "Netcode", "Tilemap"],
    repo: "https://github.com/hood122977-ai/LittleSword",
    video: "https://youtu.be/H72-wP83fDU?si=xq2ICT8n76FVk_2D",
  },
  {
    num: "04", title: "STICKMAN GAME", genre: "PLATFORMER", featured: true,
    desc: "스틱맨 플랫포머. 문제 풀이 → 에너지볼 전투 → 클리어 조건까지 이어지는 단계형 게임 구조 설계.",
    tags: ["Unity", "C#", "Physics", "2D"],
    repo: "https://github.com/hood122977-ai/Stickman-Game",
    video: "https://youtu.be/1Bq-46IXB68?si=yLC52L3Vv7oOVBXx",
  },
  {
    num: "05", title: "TIME ATTACK", genre: "CASUAL", featured: true,
    desc: "생태전환 타임어택. 60초 안에 분리수거 미션 클리어. 22개 스폰포인트 랜덤 셔플 오브젝트 시스템 직접 구현.",
    tags: ["Unity", "Random System", "ShaderLab", "C#"],
    repo: "https://github.com/hood122977-ai/Time-Attack-Game",
    video: "https://youtu.be/kMnn2jxZ5D0?si=sCAdFkX6NPH1WbpV",
  },
  {
    num: "06", title: "VR GAME", genre: "VR", featured: true,
    desc: "VR 공포게임. XR Interaction Toolkit 기반. 문·열쇠 인터랙션, 몬스터 트리거, 라이팅 이벤트, 엔딩 시퀀스 직접 구현. 서강대 미래유망 최우수상(4년 만의 만점) 수상작.",
    tags: ["Unity", "XR Toolkit", "VR", "Lighting", "C#"],
    repo: "https://github.com/hood122977-ai/VR-GAME-and-AR-GAME",
    video: "https://youtu.be/Yv0uMQnI9FA?si=iKD1gIjUMWP03L6e",
    video2: "https://youtu.be/4OrgmNjRztM?si=ePV-I8vSErWKvrD6",
    video2Label: "ENDING",
  },
  {
    num: "07", title: "AR GAME", genre: "AR", featured: true,
    desc: "AR 모바일게임. FPS 방식 AR 오브젝트 사격 게임. 서강대 미래유망 최우수상 수상작.",
    tags: ["Unity", "AR", "Mobile", "C#"],
    repo: "https://github.com/hood122977-ai/VR-GAME-and-AR-GAME",
    video: "https://youtube.com/shorts/QZA1_-i-72I?si=VbvOt8r03mFjbTAT",
  },
  {
    num: "14", title: "BUS GAME", genre: "SIMULATION", featured: true,
    desc: "노선 선택, 교통카드 태그, 착석을 체험하는 버스 이용 시뮬레이션. 착석한 플레이어가 버스와 함께 움직이도록 프레임별 이동량을 적용. 2026년 게임소프트웨어과 3학년 재활 게임 대표 발표작.",
    tags: ["Unity", "C#", "Rigidbody", "Simulation"],
    repo: "https://github.com/hood122977-ai/Bus-Game",
    video: "https://youtu.be/wZ7ZvyPmsuI",
  },
  // ===== 추가 =====
  {
    num: "08", title: "GUN GAME", genre: "FPS", featured: false,
    desc: "첫 1인 개발 FPS. 유튜브 참고 없이 처음으로 혼자 기획·개발한 게임.",
    tags: ["Unity", "C#", "FPS", "2D"],
    repo: "https://github.com/hood122977-ai/Gun-game",
    video: "https://www.youtube.com/watch?si=J64FPfrm8j2jzr2o&v=NxILp4Oaymw&feature=youtu.be",
  },
  {
    num: "09", title: "제라드", genre: "PLATFORMER", featured: false,
    desc: "스틱맨 게임과는 전혀 다른 스타일·느낌으로 제작한 플랫포머.",
    tags: ["Unity", "C#", "2D", "Platformer"],
    repo: "https://github.com/hood122977-ai/Gerad-Game",
    video: "https://youtu.be/2CYDfCo_4hE?si=9CAqNx2OX44zMK4r",
  },
  {
    num: "10", title: "ZIGZAG", genre: "CASUAL", featured: false,
    desc: "지그재그 캐주얼 게임.",
    tags: ["Unity", "C#", "2D"],
    repo: "https://github.com/hood122977-ai/Zigzag",
    video: "https://www.youtube.com/watch?v=i0zdgrc7X3U",
  },
  {
    num: "11", title: "점프캣", genre: "CASUAL", featured: false,
    desc: "캐주얼 점프 게임.",
    tags: ["Unity", "C#", "2D"],
    repo: "https://github.com/hood122977-ai/ClimbCloud-cat",
    video: null,
  },
  {
    num: "12", title: "1950", genre: "SHOOTER", featured: false,
    desc: "1950년대 배경 세로 스크롤 슈팅 게임. 보스, 레벨업, 코인 시스템 포함.",
    tags: ["Unity", "C#", "Scroll Shooter", "2D"],
    repo: "https://github.com/hood122977-ai/Shooting_Game",
    video: null,
  },
  {
    num: "13", title: "BALL GAME", genre: "CASUAL", featured: false,
    desc: "첫 3D 게임 도전작. 유튜브를 참고하되 여러 기능을 직접 가져와 구현한 3D 볼 게임.",
    tags: ["Unity", "C#", "3D", "Physics"],
    repo: "https://github.com/hood122977-ai/Ball-Game",
    video: null,
  },
];

let currentFilter = "ALL";
let showAll = false;

function renderFilterBar() {
  const bar = document.getElementById("filterBar");
  if (!bar) return;
  const genres = ["ALL", "RPG", "FPS", "ACTION", "PLATFORMER", "CASUAL", "VR", "AR", "SHOOTER", "SIMULATION"];
  bar.innerHTML = genres.map(g => {
    const s = g !== "ALL" ? getGenreStyle(g) : null;
    const styleAttr = s ? `style="--gc:${s.color};--gd:${s.dim}"` : "";
    return `<button class="filter-btn ${g === currentFilter ? 'is-active' : ''}" data-genre="${g}" ${styleAttr}>${g}</button>`;
  }).join("");

  bar.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.genre;
      showAll = false;
      bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderStages();
    });
  });
}

function matchFilter(p) {
  if (currentFilter === "ALL") return true;
  return p.genre.toUpperCase().includes(currentFilter.toUpperCase());
}

function renderStages() {
  const grid = document.getElementById("stageGrid");
  const moreBtn = document.getElementById("moreBtn");
  if (!grid) return;

  const featured = PROJECTS.filter(p => p.featured && matchFilter(p));
  const extra    = PROJECTS.filter(p => !p.featured && matchFilter(p));
  const toShow   = (showAll || currentFilter !== "ALL") ? [...featured, ...extra] : featured;

  grid.innerHTML = toShow.map(p => {
    const gs = getGenreStyle(p.genre);
    const watchBtns = (() => {
      const btns = [];
      if (p.video) {
        btns.push(`<a class="btn btn--watch-active" href="${p.video}" target="_blank" rel="noopener">WATCH ▶</a>`);
      } else {
        btns.push(`<span class="btn btn--watch">WATCH (준비중)</span>`);
      }
      if (p.video2) {
        btns.push(`<a class="btn btn--watch-active btn--watch2" href="${p.video2}" target="_blank" rel="noopener">${p.video2Label || "WATCH2"} ▶</a>`);
      }
      return btns.join("");
    })();

    return `
    <article class="stagecard" data-genre="${p.genre}">
      <div class="stagecard__top">
        <span class="stagecard__num">STAGE ${p.num}</span>
        <span class="stagecard__genre" style="color:${gs.color};border-color:${gs.dim}">${p.genre}</span>
      </div>
      <h3 class="stagecard__title">${p.title}</h3>
      <p class="stagecard__desc">${p.desc}</p>
      <p class="stagecard__tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</p>
      <div class="stagecard__actions">
        <a class="btn btn--play" href="${p.repo}" target="_blank" rel="noopener">PLAY ▶</a>
        ${watchBtns}
      </div>
    </article>`;
  }).join("");

  if (moreBtn) {
    const hasExtra = extra.length > 0;
    moreBtn.style.display = (hasExtra && currentFilter === "ALL" && !showAll) ? "flex" : "none";
    moreBtn.textContent = `+ ${extra.length}개 더 보기`;
  }

  document.querySelectorAll(".stagecard").forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.04}s`;
    requestAnimationFrame(() => el.classList.add("is-visible"));
  });
}

// PPT 다운로드 버튼 렌더
function renderPptBtn() {
  const el = document.getElementById("pptBtn");
  if (!el) return;
  if (PPT_LINK) {
    el.href = PPT_LINK;
    el.style.display = "inline-flex";
  } else {
    el.style.display = "none";
  }
}

// 달성 업적 카드 등장 — .achcard는 정적 HTML이라 renderStages()를 안 타서
// is-visible이 붙을 일이 없었음. 그래서 opacity:0인 채로 영구히 안 보였음.
function initAchievementsReveal() {
  document.querySelectorAll(".achcard").forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
    requestAnimationFrame(() => el.classList.add("is-visible"));
  });
}

function initHpBar() {
  const fill = document.getElementById("hpbarFill");
  if (!fill) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initNavHighlight() {
  const links = document.querySelectorAll(".nav__link");
  const ids = ["top","status","stages","achievements","guild","contact"];
  const sections = ids.map(id => document.getElementById(id));
  window.addEventListener("scroll", () => {
    let current = "top";
    sections.forEach(sec => {
      if (sec && window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(l => l.classList.toggle("is-active", l.getAttribute("href") === "#" + current));
  }, { passive: true });
}

function initMoreBtn() {
  const btn = document.getElementById("moreBtn");
  if (!btn) return;
  btn.addEventListener("click", () => { showAll = true; renderStages(); });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilterBar();
  renderStages();
  renderPptBtn();
  initAchievementsReveal();
  initHpBar();
  initNavHighlight();
  initMoreBtn();
});

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>BGMI Esports Hub</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header class="site-header">
  BGMI Esports Hub
  <span class="beta-badge">BETA v0.1</span>
</header>


  <nav>
  <button onclick="show('home')">Home</button>
  <button onclick="show('teams')">Teams</button>
  <button onclick="show('tournaments')">Tournaments</button>
  <button onclick="show('about')">About</button>
</nav>

<div class="search-fixed">
  <input
    type="text"
    id="searchInput"
    placeholder="Search team or player"
    oninput="doSearch()"
    autocomplete="off"
    spellcheck="false"
  />
</div>

<div id="searchResults"></div>
   
</div>
</nav>

<!-- HOME -->
<section id="home" class="page home-future">

  <h1 class="hero-title">
    India’s BGMI Esports Hub
  </h1>

  <p class="hero-sub">
    Teams • Players • Tournaments <br>
    All BGMI esports data in one place
  </p>

  <div class="hero-actions">
    <button onclick="show('teams')" class="hero-btn primary">
      Explore Teams
    </button>
    <button onclick="show('about')" class="hero-btn secondary">
      About Project
    </button>
  </div>

  <div class="hero-stats">
    <div class="stat-card">
      <h2>6+</h2>
      <p>Teams</p>
    </div>
    <div class="stat-card">
      <h2>20+</h2>
      <p>Players</p>
    </div>
    <div class="stat-card">
      <h2>2+</h2>
      <p>Tournaments</p>
    </div>
  </div>
<div class="home-extra-menu">

  <div class="extra-card" onclick="show('news')">
    <h3>📰 News</h3>
    <p>Latest BGMI esports updates</p>
  </div>

  <div class="extra-card" onclick="show('rankings')">
    <h3>🏆 Rankings</h3>
    <p>Team & player rankings</p>
  </div>
</section>
</div>
</section>
<section id="news" class="page">
  <h2>Latest BGMI News</h2>

  <div class="news-card">
    <span class="news-date">02 Jan 2026</span>
    <h3>Krafton Rolls Out New Zone Meta for All Verified Third-Party BGMI Tournaments in 2026</h3>
    <p>
      Before, only Krafton's own tournaments used the new zone meta, while other tournaments used an older one. This caused problems because teams had to switch strategies and it wasn't always fair. There was even a controversy where a team refused toplay because of the old zone settings.
The new zone meta changes how quickly the safe zone shrinks in the game. This means players have to move around more often and be more aggressive, leading to more exciting matches. The updates affect how fast the zones change in different stages of the game on maps like Erangel and Miramar.With all approved tournaments now using the same zone settings, it will create a more consistent and fair competitive environment for BGMI players and teams in India. This should help reduce arguments and make the future of BGMI esports stronger.
    </p>
  </div>

  <div class="news-card">
    <span class="news-date">08 Jan 2026</span>
    <h3>Roster Changes Across Top Teams</h3>
    <p>
      Several BGMI teams are experimenting with new lineups ahead of
      the next major events.
    </p>
  </div>

  <div class="news-card">
    <span class="news-date">02 Jan 2026</span>
    <h3>BGMI Competitive Scene Gaining Momentum</h3>
    <p>
      The Indian BGMI esports ecosystem continues to grow with rising
      viewership and participation.
    </p>
  </div>
</section>
<section id="rankings" class="page">
  <h2>BGMI Team Rankings (till 2025)</h2>

  <div class="ranking-table">

    <div class="ranking-row header">
      <span>#</span>
      <span>Team</span>
      <span>Points</span>
    </div>

    <div class="ranking-row">
      <span>1</span>
      <span> iQOO ORANGUTAN</span>
      <span>1565</span>
    </div>

    <div class="ranking-row">
      <span>2</span>
      <span>Team Ax</span>
      <span>1300</span>
    </div>

    <div class="ranking-row">
      <span>3</span>
      <span>K9 eSports</span>
      <span>1200</span>
    </div>

    <div class="ranking-row">
      <span>4</span>
      <span>NoNx eSports </span>
      <span>1025</span>
    </div>

    <div class="ranking-row">
      <span>5</span>
      <span>iQOO Soul</span>
      <span>985</span>
    </div>
    
    <!-- TOP 5 PLAYERS BY FINISHES -->
<h3 style="margin-top:24px;">Top 5 Players (Finishes)</h3>

<div class="player-ranking-table">

  <div class="player-row header">
    <span>#</span>
    <span>Player</span>
    <span>Finishes</span>
  </div>

  <div class="player-row">
    <span>1</span>
    <span>FsLeviiii</span>
    <span>76</span>
  </div>

  <div class="player-row">
    <span>2</span>
    <span>AxDevotee0</span>
    <span>76</span>
  </div>

  <div class="player-row">
    <span>3</span>
    <span>GxdlJonaThan03</span>
    <span>88</span>
  </div>

  <div class="player-row">
    <span>4</span>
    <span>K9Ninjaboi</span>
    <span>86</span>
  </div>

  <div class="player-row">
    <span>5</span>
    <span>iQOO8bitAquaX</span>
    <span>81</span>
  </div>


</div>

  </div>
  <p class="data-source">
  Source: <a href="https://esports.battlegroundsmobileindia.com/rankings/players" target="_blank">Krafton India Esports.com</a>
</p>
</section>




</div>

<!-- TEAMS -->
<section id="teams" class="page">
  <h2>Teams</h2>
  <div id="teamsContainer"></div>
</section>

<!-- PLAYER -->
<section id="player" class="page">
  <button onclick="show('teams')">← Back to Teams</button>
  <div id="playerCard" class="team-card"></div>
</section>

<!-- ABOUT -->
<section id="about" class="page">
  <h2>About</h2>
  <p>This is a BGMI esports database made for learning and demo purposes.</p>
</section>

<footer>Made with LOVE ❤️ for BGMI Community</footer>

<!-- DATA -->
<script src="data.js"></script>

<!-- SCRIPT -->
<script>
  function show(id) {
    document.querySelectorAll('.page').forEach(p => {
      p.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
  }

  show('home');

  const teamBox = document.getElementById("teamsContainer");

  teams.forEach(team => {
    const card = document.createElement("div");
    card.className = "team-card";

    const header = document.createElement("div");
    header.innerHTML = `<div class="team-title">
  <span class="team-tag">[${team.short}]</span>
  <span class="team-name">${team.name}</span>
</div>`;
    card.appendChild(header);

    const playersDiv = document.createElement("div");
    playersDiv.style.display = "none";

    team.players.forEach(p => {
      const pl = document.createElement("div");
      pl.className = "player-line";
      pl.innerText = `${p.ign} (${p.role})`;
      pl.onclick = () => openPlayer(p, team.name);
      playersDiv.appendChild(pl);
    });

    card.onclick = () => {
      playersDiv.style.display =
        playersDiv.style.display === "none" ? "block" : "none";
    };

    card.appendChild(playersDiv);
    teamBox.appendChild(card);
  });

  function openPlayer(player, teamName) {
    const card = document.getElementById("playerCard");

    card.innerHTML = `
      <h2>${player.ign}</h2>
      <p><strong>Role:</strong> ${player.role}</p>
      <p><strong>Team:</strong> ${teamName}</p>
    `;

    show('player');
  }
  function doSearch() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  const box = document.getElementById("searchResults");
  box.innerHTML = "";

  if (!q) return;

  // Search teams
  teams.forEach(team => {
    if (team.name.toLowerCase().includes(q)) {
      const div = document.createElement("div");
      div.className = "search-item";
      div.innerHTML = `<strong>Team:</strong> ${team.name}`;
      div.onclick = () => {
        show('teams');
      };
      box.appendChild(div);
    }

    // Search players
    team.players.forEach(p => {
      if (p.ign.toLowerCase().includes(q)) {
        const div = document.createElement("div");
        div.className = "search-item";
        div.innerHTML = `
          <strong>Player:</strong> ${p.ign}
          <div style="font-size:12px;color:#94a3b8;">
            ${team.name}
          </div>
        `;
        div.onclick = () => {
          openPlayer(p, team.name);
        };
        box.appendChild(div);
      }
    });
  });
}
</script>

</body>
</html>

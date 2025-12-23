document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("contributors-grid");
  const toggleBtn = document.getElementById("theme-toggle");
  const iconContainer = document.getElementById("theme-icon");

  // ---------- THEME ----------
  const renderThemeIcon = theme => {
    iconContainer.innerHTML = `
      <i data-lucide="${theme === "dark" ? "moon" : "sun"}"></i>
    `;
    lucide.createIcons();
  };

  const setTheme = theme => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    renderThemeIcon(theme);
  };

  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark")
      ? "light"
      : "dark";
    setTheme(nextTheme);
  });

  // ---------- CONTRIBUTORS ----------
  if (!grid) return;

  fetch("data/contributors.json")
    .then(res => res.json())
    .then(contributors => {
      grid.innerHTML = "";

      contributors
        .filter(c => c.status === "active")
        .forEach(c => {
          const card = document.createElement("div");
          card.className = "contributor-card";

          card.innerHTML = `
            <img src="${c.avatar}"
                 alt="${c.name}"
                 onerror="this.src='assets/default.png'">

            <h3>${c.name}</h3>
            <p>${c.role}</p>

            <div class="socials">
              <a class="social-btn" href="${c.github}" target="_blank">
                <i data-lucide="github"></i>
              </a>
              <a class="social-btn" href="${c.linkedin}" target="_blank">
                <i data-lucide="linkedin"></i>
              </a>
            </div>
          `;

          grid.appendChild(card);
        });

      lucide.createIcons();
    })
    .catch(console.error);
});

function applyTranslations() {
  const lang = localStorage.getItem('selectedLanguage') || 'hr';
  const t = translations[lang];
  for (const id in t) {
    const el = document.getElementById(id);
    if (el) {
      if (el.placeholder !== undefined) {
        el.placeholder = t[id];
      } else if (el.tagName === "OPTION") {
        el.textContent = t[id];
      } else {
        el.innerText = t[id];
      }
    }
  }
}

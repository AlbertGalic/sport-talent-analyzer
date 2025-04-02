function applyTranslations() {
  const lang = localStorage.getItem('selectedLanguage') || 'hr';
  const t = translations[lang];
  for (const id in t) {
    const el = document.getElementById(id);
    if (el) el.placeholder ? el.placeholder = t[id] : el.innerText = t[id];
  }
}

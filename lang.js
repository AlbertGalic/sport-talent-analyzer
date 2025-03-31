function applyTranslations() {
  const lang = localStorage.getItem('selectedLanguage') || 'en';
  const t = translations[lang] || translations['en'];
  for (const id in t) {
    const el = document.getElementById(id);
    if (el) el.innerText = t[id];
  }
}

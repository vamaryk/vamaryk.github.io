const themeStorageKey = 'theme';

let currentTheme = localStorage.getItem(themeStorageKey);

if (!currentTheme) {
  currentTheme = 'light';
  localStorage.setItem(themeStorageKey, currentTheme);
}

export function getTheme() {
  return currentTheme;
}

export function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem(themeStorageKey, theme);
}

export function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem(themeStorageKey, currentTheme);
}

// set at _app.tsx file
export function setDarkMode() {
  if (typeof window !== 'undefined') {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}
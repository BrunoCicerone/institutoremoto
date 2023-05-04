<script>
  const themeStyle = document.getElementById('theme-style');
  const toggleThemeBtn = document.getElementById('toggle-theme-btn');

  // Verificar si hay un tema guardado en localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    themeStyle.href = savedTheme;
  }

  toggleThemeBtn.addEventListener('click', () => {
    if (themeStyle.href.includes('tema-claro')) {
      themeStyle.href = 'tema-oscuro.css';
      // Guardar el tema seleccionado en localStorage
      localStorage.setItem('theme', 'tema-oscuro.css');
    } else {
      themeStyle.href = 'tema-claro.css';
      // Guardar el tema seleccionado en localStorage
      localStorage.setItem('theme', 'tema-claro.css');
    }
  });
</script>

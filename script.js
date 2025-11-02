/* ===================================================================
   LÓGICA DAS CONFIGURAÇÕES E TEMA
   =================================================================== */

// Espera o HTML carregar antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Selecionar os elementos
    const settingsIcon = document.getElementById('settings-trigger');
    const settingsPanel = document.getElementById('settings-panel');
    const themeToggle = document.getElementById('theme-toggle');

    // 2. Lógica para abrir/fechar o painel
    settingsIcon.addEventListener('click', (e) => {
        // Impede que o clique no ícone feche o painel imediatamente (ver passo 4)
        e.stopPropagation(); 
        settingsPanel.classList.toggle('show');
    });

    // 3. Lógica do Toggle de Tema
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            // Se está marcado = Modo Claro
            document.body.classList.add('light-mode');
            // Salva a preferência no navegador
            localStorage.setItem('theme', 'light');
        } else {
            // Se não está marcado = Modo Escuro
            document.body.classList.remove('light-mode');
            // Salva a preferência no navegador
            localStorage.setItem('theme', 'dark');
        }
    });

    // 4. Lógica para fechar o painel se clicar fora dele
    document.addEventListener('click', (e) => {
        if (settingsPanel.classList.contains('show') && !settingsPanel.contains(e.target)) {
            settingsPanel.classList.remove('show');
        }
    });

    // 5. Verificar a preferência salva ao carregar a página
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.checked = true;
    }
    // Se for 'dark' ou nulo, ele já usa o padrão (Dark Mode)
});
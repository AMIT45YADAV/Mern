
    // Initialize Feather Icons
    feather.replace();
    let selectedTitle = '';
    let selectedURL = '';
    // Toggle Navigation Menu
    function toggleNavMenu() {
      const navMenu = document.getElementById('nav-menu');
      const toggler = document.getElementById('navbar-toggler');
      navMenu.classList.toggle('show');
      toggler.classList.toggle('open');
    }
    // Select a Project
    function selectProject(title, url) {
      selectedTitle = title;
      selectedURL = url;
      const mdContent = document.getElementById('md-content');
      mdContent.innerHTML = `<h2>${title}</h2><p>Project selected. Click "Show Demo" to view.</p>`;
      // Hide iframe and show cover
      const cover = document.getElementById('cover');
      const iframe = document.getElementById('iframe-app');
      iframe.style.display = 'none';
      cover.style.display = 'flex';
      // Close the nav menu after selection
      toggleNavMenu();
    }
    // Show Demo
    function showDemo() {
      if (selectedURL) {
        const cover = document.getElementById('cover');
        const iframe = document.getElementById('iframe-app');
        cover.style.display = 'none';
        iframe.style.display = 'block';
        iframe.src = selectedURL;
      } else {
        alert('Please select a project from the menu first.');
      }
    }
  
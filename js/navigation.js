(() => {
    const views = ['home', 'program', 'memories', 'rsvp'];
    const links = document.querySelectorAll('[data-view]');
    function showView() {
        const requested = location.hash.slice(1);
        const view = views.includes(requested) ? requested : 'home';
        views.forEach(id => { document.getElementById(id).hidden = id !== view; });
        links.forEach(link => {
            const active = link.dataset.view === view;
            link.classList.toggle('active', active);
            if (active) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
        });
        window.scrollTo(0, 0);
    }
    window.addEventListener('hashchange', showView);
    showView();
})();

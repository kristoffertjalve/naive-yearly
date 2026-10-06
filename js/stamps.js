(() => {
    const home = document.getElementById('home');
    const layer = home.querySelector('.stamp-layer');
    const clear = home.querySelector('.clear-stamps');
    const limit = 250;
    home.addEventListener('click', event => {
        if (event.target.closest('a, button, input, summary')) return;
        // Ignore synthetic keyboard clicks; pointer/touch clicks carry a position.
        if (event.detail === 0) return;
        const bounds = layer.getBoundingClientRect();
        if (!bounds.width || !bounds.height) return;
        const flower = document.createElement('img');
        flower.src = 'favicon.png';
        flower.alt = '';
        flower.className = 'flower-stamp';
        flower.draggable = false;
        flower.style.left = `${Math.max(0, Math.min(100, (event.clientX - bounds.left) / bounds.width * 100))}%`;
        flower.style.top = `${Math.max(0, Math.min(100, (event.clientY - bounds.top) / bounds.height * 100))}%`;
        const size = 64;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;
        flower.style.setProperty('--rotation', `${Math.random() * 150 - 75}deg`);
        if (layer.children.length >= limit) layer.firstElementChild.remove();
        layer.appendChild(flower);
    });
    clear.addEventListener('click', () => layer.replaceChildren());
})();

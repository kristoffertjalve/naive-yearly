(() => {
    const photo = document.querySelector('.memory-photo');
    if (!photo) return;
    const photos = [
        'images/meg miller.jpg',
        'images/kristoffer tjalve.jpg',
        'images/listening.jpg',
        'images/walking with benches.jpg',
        'images/lunch.jpg'
    ];
    let current = 0;
    // Warm the cache so advancing does not leave an empty photo panel.
    photos.forEach(src => { const image = new Image(); image.src = src; });
    photo.addEventListener('click', () => {
        current = (current + 1) % photos.length;
        photo.style.backgroundImage = `url("${photos[current]}")`;
        photo.setAttribute('aria-label', `Event photo ${current + 1} of ${photos.length}. Show next photo.`);
    });
})();

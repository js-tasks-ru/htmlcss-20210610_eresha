(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');
    const overlay = document.getElementById('overlay')

    if (!close || !modalOpen || !modal) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.overflow = 'hidden';
        overlay.style.display = 'block';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.overflow = 'initial';
        overlay.style.display = 'none';
    });
})();
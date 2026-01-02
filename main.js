window.addEventListener("DOMContentLoaded", () => {
const cajas = document.querySelectorAll('.caja');

cajas.forEach(caja => {
    caja.addEventListener('click', function() {
        this.classList.toggle('zoom');
    });
});
})

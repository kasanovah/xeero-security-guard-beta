document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
        const target = document.getElementById(anchor.hash.slice(1));
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        if (anchor.closest('nav')) closeMobileMenu();
    });
});

const menuButton = document.querySelector('.mobile-menu-btn');
const navigation = document.querySelector('#mobile-navigation');

function closeMobileMenu() {
    navigation.style.removeProperty('display');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
}

menuButton.addEventListener('click', () => {
    if (navigation.style.display === 'flex') {
        closeMobileMenu();
        return;
    }

    navigation.style.display = 'flex';
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close navigation menu');
});

document.addEventListener('click', event => {
    if (
        navigation.style.display === 'flex' &&
        !menuButton.contains(event.target) &&
        !navigation.contains(event.target)
    ) {
        closeMobileMenu();
    }
});

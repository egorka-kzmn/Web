function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('.profile button'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const profile = button.parentElement;

            const isLocked = profile.querySelector('input[type="radio"][value="lock"]').checked;
            const hiddenFields = profile.querySelector('div[id$="HiddenFields"]');

            if (!isLocked) {
                if (button.textContent === 'Show more') {
                    hiddenFields.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    hiddenFields.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    });
}

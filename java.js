document.addEventListener("DOMContentLoaded", () => {
    const leisteItems = document.querySelectorAll('.leiste div');

    leisteItems.forEach(item => {
        // Selektoren für button und h2 vorab definieren
        const button = item.querySelector('button');
        const h2 = item.querySelector('h2');

        if (button) {
            item.addEventListener('mouseover', () => {
                button.style.textDecoration = 'underline';
            });

            item.addEventListener('mouseout', () => {
                if (!button.classList.contains('active')) {
                    button.style.textDecoration = 'none';
                }
            });
        }

        if (h2) {
            item.addEventListener('mouseover', () => {
                h2.style.textDecoration = 'underline';
            });

            item.addEventListener('mouseout', () => {
                if (!h2.classList.contains('active')) {
                    h2.style.textDecoration = 'none';
                }
            });
        }
    });
});

$(document).ready(function() {
    let activeClasses = [];

    $('.leiste button').click(function() {
        var targetClass = $(this).attr('class').split(' ')[0];

        if (activeClasses.includes(targetClass)) {
            activeClasses = activeClasses.filter(cls => cls !== targetClass);
            $(this).removeClass('active').css('text-decoration', 'none');
        } else {
            activeClasses.push(targetClass);
            $(this).addClass('active').css('text-decoration', 'underline');
        }

        $('.eintrag').each(function() {
            if ($(this).hasClass('hidden')) {
                $(this).css('visibility', 'hidden');
                return;
            }

            if (activeClasses.length === 0 || activeClasses.some(cls => $(this).hasClass(cls))) {
                $(this).css('visibility', 'visible');
            } else {
                $(this).css('visibility', 'hidden');
            }
        });

        // Zeige eintrag.open.matte immer an
        $('.eintrag.open.matte').css('visibility', 'visible');
    });
});
  
function redirectToInstagram() {
    window.open("https://www.instagram.com/thaiboxacademy_konstanz/?hl=de", "_blank", "noopener");
}

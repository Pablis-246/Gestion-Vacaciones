const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuButton.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function () {
        var calendarEl = document.getElementById('calendario');

        var calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: ['dayGrid'],
            defaultView: 'dayGridMonth',
            events: [
                {
                    title: 'Evento 1',
                    start: '2023-09-28',
                },
                {
                    title: 'Evento 2',
                    start: '2023-09-15',
                },
            ],
        });

        calendar.render();
    });

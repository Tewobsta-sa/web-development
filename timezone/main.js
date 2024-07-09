const timeZ = require('moment-timezone');
const moment = require('moment');

document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('open');
    const closeModalButton = document.getElementById('close');
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    const timeZoneSelect = document.getElementById('select');

    const timeZoneDiv = document.querySelector('.time-zone');
    const timeElement = document.querySelector('.time');
    const dateElement = document.querySelector('.date');

    openModalButton.addEventListener('click', () => {
        openModal(modal);
    });

    closeModalButton.addEventListener('click', () => {
        closeModal(modal);
    });

    overlay.addEventListener('click', () => {
        closeModal(modal);
    });

    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Get current date and time using Moment.js
    function updateDateTime(timeZone) {
        const mydate = new Date();
        const ti = moment(mydate).tz(timeZone).format('LTS');
        const dat = moment(mydate).tz(timeZone).format('LL');
        const day = moment(mydate).tz(timeZone).format('dddd');

        // Update HTML content
        document.getElementById('time-zone-name').textContent = timeZone;
        timeElement.textContent = ti;
        dateElement.textContent = `${day}, ${dat}`;
    }

    // Populate timezone dropdown
    const timezones = timeZ.tz.names();
    timezones.forEach(tz => {
        const option = document.createElement('option');
        option.value = tz;
        option.textContent = tz;
        timeZoneSelect.appendChild(option);
    });

    // Set initial timezone to the guessed timezone
    const initialTimeZone = timeZ.tz.guess();
    updateDateTime(initialTimeZone);

    // Update date and time based on selected timezone
    timeZoneSelect.addEventListener('change', (event) => {
        const selectedTimeZone = event.target.value;
        updateDateTime(selectedTimeZone);
        closeModal(modal); // Close modal after selection
    });
});

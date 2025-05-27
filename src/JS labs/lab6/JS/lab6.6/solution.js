function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', () => convertFrom('days'));
    document.getElementById('hoursBtn').addEventListener('click', () => convertFrom('hours'));
    document.getElementById('minutesBtn').addEventListener('click', () => convertFrom('minutes'));
    document.getElementById('secondsBtn').addEventListener('click', () => convertFrom('seconds'));

    function convertFrom(unit) {
        const daysInput = document.getElementById('days');
        const hoursInput = document.getElementById('hours');
        const minutesInput = document.getElementById('minutes');
        const secondsInput = document.getElementById('seconds');

        let value = Number(document.getElementById(unit).value);

        let days;
        switch (unit) {
            case 'days':
                days = value;
                break;
            case 'hours':
                days = value / 24;
                break;
            case 'minutes':
                days = value / 1440;
                break;
            case 'seconds':
                days = value / 86400;
                break;
        }

        daysInput.value = days;
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;
    }
}
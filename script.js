document.addEventListener('DOMContentLoaded', () => {


    const DATE_TARGET = new Date('06/13/2024 0:01 AM');

    const DAYS = document.querySelector('#days');
    const HOURS = document.querySelector('#hours');
    const MINUTES = document.querySelector('#minutes');
    const SECONDS = document.querySelector('#seconds');
    
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

    

    
    function updateCountdown() {
        
        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
        
        DAYS.textContent = REMAINING_DAYS;
        HOURS.textContent = REMAINING_HOURS;
        MINUTES.textContent = REMAINING_MINUTES;
        SECONDS.textContent = REMAINING_SECONDS;
    }

   
    updateCountdown();
    
    setInterval(updateCountdown,1000);
});

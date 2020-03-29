const pricesMonthly = document.querySelectorAll('[monthly]');
const pricesAnnually = document.querySelectorAll('[annually');
const toggleButton = document.querySelector('.toggle-button');
const toggleButtonControl = document.querySelector('.toggle-button__control');

const annuallyLabel = document.querySelector('.annually-label');
const monthlyLabel = document.querySelector('.monthly-label');

toggleButton.addEventListener('click', () => {
    
    //annually
    if (annuallyLabel.classList.contains('inactive')) {

        toggleButtonControl.style.right = '32px';
        
        pricesMonthly.forEach(price => {
            price.style.display = 'none';
        });

        pricesAnnually.forEach(price => {
            price.style.display = 'block';
        });

        annuallyLabel.classList.remove('inactive');
        annuallyLabel.classList.add('active');
        
    }
    
    // monthly
    else if (annuallyLabel.classList.contains('active')) {
        toggleButtonControl.style.right = '5px';

        pricesAnnually.forEach(price => {
            price.style.display = 'none';
        });
        pricesMonthly.forEach(price => {
            price.style.display = 'block';
        });

        annuallyLabel.classList.add('inactive');
        annuallyLabel.classList.remove('active');

    }

})


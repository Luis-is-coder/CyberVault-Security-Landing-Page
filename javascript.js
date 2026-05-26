// JavaScript to initialize popover on hover for profile details of Elena Martinez
document.addEventListener("DOMContentLoaded", function () {
  const popoverElenaMartinez = document.querySelector('#elenamartinez');

  const popover = new bootstrap.Popover(popoverElenaMartinez, {
    trigger: 'hover',
    placement: 'right', 
  });
});

// JavaScript to initialize popover on hover for profile details of James Carter
document.addEventListener("DOMContentLoaded", function () {
  const popoverJamescarter = document.querySelector('#jamescarter');

  const popover = new bootstrap.Popover(popoverJamescarter, {
    trigger: 'hover',
    placement: 'left', 
  });
});

// JavaScript to initialize popover on hover for profile details of Aisha Khan
document.addEventListener("DOMContentLoaded", function () {
  const popoverAishakhan = document.querySelector('#aishakhan');

  const popover = new bootstrap.Popover(popoverAishakhan, {
    trigger: 'hover',
    placement: 'right', 
  });
});

// JavaScript to initialize popover on hover for profile details of Michael Nguyen
document.addEventListener("DOMContentLoaded", function () {
  const popoverMichaelnguyen = document.querySelector('#michaelnguyen');

  const popover = new bootstrap.Popover(popoverMichaelnguyen, {
    trigger: 'hover',
    placement: 'left', 
  });
});

//Javascript to provide popover on hover for menu in navigation bar
document.addEventListener("DOMContentLoaded", function () {
  const popoverMenu = document.querySelector('#menu');

  const popover = new bootstrap.Popover(popoverMenu, {
    trigger: 'hover',
    placement: 'right',
  });
});


// Real-time character counter for textarea in Quary Form
const messageTextarea = document.getElementById('message');
const messageError = document.getElementById('message-error');
const messageCounter = document.getElementById('message-counter');

messageTextarea.addEventListener('input', () => {
      const length = messageTextarea.value.length;
      messageCounter.textContent = `${length}/500 characters`;
      messageCounter.style.color = length > 500 ? '#d32f2f' : '#007bff';
 });


 // Real-time urgency slider update
const urgencySlider = document.getElementById('urgency');
const urgencyValue = document.getElementById('urgency-value');

urgencySlider.addEventListener('input', () => {
  urgencyValue.textContent = `Urgency: ${urgencySlider.value}`;
});

//Modal to show notification when the form is submitted. 
// ( Will pop up only if the user fills the required information)
document.getElementById('queryForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default submission

  // Check form validity
  if (this.checkValidity()) {
    // If valid, show the modal
    const queryModal = new bootstrap.Modal(document.getElementById('queryModal'));
    queryModal.show();

    // Optionally, reset the form
    this.reset();
  } else {
    // Let the browser show validation errors
    this.reportValidity();
  }
});






// Dark mode functionality
const themeBtn = dpcument.getElementById("themeBtn");

themeBtn.addEventListener("Click", function() {

    document.body.classList.toggle("dark");

    if (document.bosyclassList.contains("dark")) {
        themeBtn.innerHTML = "☀️";        
    } else {
        themeBtn.innerHTML = "🌙";
    }
});

//Contact form functionality
const contactForm = document.getElementBuId(contactForm);

contactForm.addEvenById("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

   document.getElementById("result").innerHTML = "Thank you, " + name + "! Your message has been received.";

   contactForm.reset();
});



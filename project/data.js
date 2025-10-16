document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const tickets = document.getElementById("tickets").value;
    const type = document.getElementById("type").value;

    // Create an object to store the data
    const visitData = {
      name,
      email,
      date,
      tickets,
      type
    };

    // Save to localStorage
    localStorage.setItem("visitBooking", JSON.stringify(visitData));

    // Optional: show confirmation message
    alert("Your visit details have been saved locally!");

    // Optional: clear the form
    form.reset();
  });
});

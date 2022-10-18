let ticketType, quantity;
let totalPrice = 0;
let totalPricePlaceholder = document.getElementById("totalPrice");

// Modal & content
let modal = document.getElementById("modal");
let firstAndLastName = document.getElementById("firstAndLastName");
let emailAddress = document.getElementById("emailAddress");
let numberOfTickets = document.getElementById("numberOfTickets");
let category = document.getElementById("category");
let finalPrice = document.getElementById("finalPrice");
let span = document.getElementsByClassName("close")[0];

totalPricePlaceholder.innerHTML = totalPrice;

function calculatePrice() {
  if (ticketType && quantity) {
    switch (ticketType) {
      case "01":
        totalPricePlaceholder.innerHTML = quantity * 200 * 0.2;
        finalPrice.innerHTML = quantity * 200 * 0.2;
        category.innerHTML = "Estudiantes";
        break;
      case "02":
        totalPricePlaceholder.innerHTML = quantity * 200 * 0.5;
        finalPrice.innerHTML = quantity * 200 * 0.5;
        category.innerHTML = "Traineé";
        break;
      case "03":
        totalPricePlaceholder.innerHTML = quantity * 200 * 0.85;
        finalPrice.innerHTML = quantity * 200 * 0.85;
        category.innerHTML = "Junior";
        break;
    }
  } else {
    totalPricePlaceholder.innerHTML = 0;
  }
}

function showSelected() {
  ticketType = document.getElementById("students").value;
  calculatePrice();
}

function setQuantity() {
  quantity = document.getElementById("quantity").value;
  calculatePrice();
}

function showModal() {
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;

  if (name && lastName && email && quantity && ticketType) {
    firstAndLastName.innerHTML = `${name} ${lastName}`;
    emailAddress.innerHTML = email;
    numberOfTickets.innerHTML = quantity;
    category.innerHTML = ticketType;
    modal.style.display = "block";
  } else {
    alert("Por favor, verificá los datos ingresados.");
  }
}

// Botón que cierra el modal.
function closeModal() {
  modal.style.display = "none";
}

const navbar = document.querySelector(".navbar");
const navbarNav = document.querySelector(".navbar .navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
console.log(navbarNav);
console.log(navbar);
const mediaQuery = window.matchMedia("(max-width: 451px)");

window.onload = function () {
  if (window.innerWidth <= 450) {
    navbar.removeChild(navbarNav);

    // membuat navbar-nav baru
    const newNavbarNav = document.createElement("div");
    newNavbarNav.classList.add("navbar-nav");

    // membuat link menu
    // HOME
    const home = document.createElement("a");
    home.textContent = "Home";
    home.setAttribute("href", "#home");
    newNavbarNav.appendChild(home);
    // FEATURES
    const features = document.createElement("a");
    features.textContent = "Features";
    features.setAttribute("href", "#features");
    newNavbarNav.appendChild(features);
    // OURHAPPYCLIENT
    const ourhappyclient = document.createElement("a");
    ourhappyclient.textContent = "Our Happy Client";
    ourhappyclient.setAttribute("href", "#ourhappyclient");
    newNavbarNav.appendChild(ourhappyclient);
    // CONTACT
    const contact = document.createElement("a");
    contact.textContent = "Contact";
    contact.setAttribute("href", "#contact");
    newNavbarNav.appendChild(contact);

    document.body.appendChild(navbarNav);
  }
};

mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    // console.log(navbarNav);
    // membuat navbar-nav baru
    const newNavbarNav = document.createElement("div");
    newNavbarNav.classList.add("navbar-nav");

    // membuat link menu
    // HOME
    const home = document.createElement("a");
    home.textContent = "Home";
    home.setAttribute("href", "#home");
    newNavbarNav.appendChild(home);
    // FEATURES
    const features = document.createElement("a");
    features.textContent = "Features";
    features.setAttribute("href", "#features");
    newNavbarNav.appendChild(features);
    // OURHAPPYCLIENT
    const ourhappyclient = document.createElement("a");
    ourhappyclient.textContent = "Our Happy Client";
    ourhappyclient.setAttribute("href", "#ourhappyclient");
    newNavbarNav.appendChild(ourhappyclient);
    // CONTACT
    const contact = document.createElement("a");
    contact.textContent = "Contact";
    contact.setAttribute("href", "#contact");
    newNavbarNav.appendChild(contact);

    document.body.appendChild(navbarNav);
  }
});

hamburgerMenu.addEventListener("click", function (e) {
  e.preventDefault();
  const navbarNav = document.querySelector(".navbar-nav");

  navbarNav.classList.toggle("active");
});

var data = [
  {
    id: 1,
    komentar:
      "Komentar 1 Lorem ipsum dolor sit amet consectetur adipisicing elit facere repellendus! Dolorum aliquam recusandae optio eveniet nulla ipsum officiis error maxime lor.",
    img: "img/ouzy.jpeg",
    nama: "Ouzy Maulana",
  },
  {
    id: 2,
    komentar:
      "Komentar 2 Lorem ipsum dolor sit amet consectetur adipisicing elit facere repellendus! Dolorum aliquam recusandae optio eveniet nulla ipsum officiis error maxime lor.",
    img: "img/ouzy.jpeg",
    nama: "ouzy",
  },
  {
    id: 3,
    komentar:
      "Komentar 3 Lorem ipsum dolor sit amet consectetur adipisicing elit facere repellendus! Dolorum aliquam recusandae optio eveniet nulla ipsum officiis error maxime lor.",
    img: "img/ouzy.jpeg",
    nama: "maulana",
  },
];

var clientcomment = document.querySelector(".client-comment");
function card_ourhappyclient(data) {
  return data.map(
    (result, index) =>
      `<div class="card ${index % 2 != 0 ? "middle" : ""}">
          <span>"</span>
          <p>
            ${result.komentar}
          </p>
          <div>
            <img src="${result.img}" width="25" height="25" alt="clein" />
            <p>${result.nama}</p>
          </div>
        </div>;`
  );
}
clientcomment.innerHTML = card_ourhappyclient(data);

// handel ketika form submit
const form = document.querySelector("form");
form.addEventListener("submit", function dataForm(e) {
  e.preventDefault();
  var when_submit_section = document.querySelector("#when-submit");

  console.log(when_submit_section);
  if (when_submit_section.style.display != "block") {
    when_submit_section.style.display = "block";
  }
  const nama = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const notlp = document.getElementById("no_telp").value;
  const company = document.getElementById("company").value;
  const message = document.getElementById("message").value;

  const pembungkus_card = document.querySelector(".row-data-form");

  // membuat element card
  const card = document.createElement("div");
  card.classList.add("card");

  // membuat element card header
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");

  // membuat judul yang ditempatkan didalam card header
  const judul = document.createElement("p");
  judul.innerText = "free trial client";
  cardHeader.appendChild(judul);
  card.appendChild(cardHeader);

  // membuat list
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  li1.innerText = "Nama : " + nama;
  ul.appendChild(li1);
  const li2 = document.createElement("li");
  li2.innerText = "Email : " + email;
  ul.appendChild(li2);
  const li3 = document.createElement("li");
  li3.innerText = "No telp : " + notlp;
  ul.appendChild(li3);
  const li4 = document.createElement("li");
  li4.innerText = "Company : " + company;
  ul.appendChild(li4);
  const li5 = document.createElement("li");
  li5.innerText = "Message : " + message;
  ul.appendChild(li5);

  // memasukkan ul kedalam card
  card.appendChild(ul);

  // memasukkan card kedalam parentnya
  pembungkus_card.appendChild(card);
});

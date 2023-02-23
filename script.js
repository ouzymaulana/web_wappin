const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.addEventListener("click", function (e) {
  e.preventDefault();
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

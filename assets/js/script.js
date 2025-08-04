// 
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Library
const books = [
  {
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    status: "Available",
  },
  {
    title: "Bumi Manusia",
    author: "Pramoedya A.T.",
    status: "Borrow",
  },
  {
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    status: "Available",
  },
];

// forEach: tampilkan semua buku
let output = document.getElementById("output");

function allBook() {
  output.innerHTML = "";
  books.forEach((item) => {
    output.innerHTML += `<div class="item-buku">
        <strong>${item.title}</strong> by ${item.author}
        <span class="status ${item.status.toLowerCase()}">${item.status}</span>
      </div>`;
  });
}

function borrow() {
  output.innerHTML = "";

  const borrowed = books.some((item) => {
    return item.status.toLowerCase() === "borrow";
  });
  if (borrowed) {
    output.innerHTML =
      "<div class='item-buku'>Ada buku yang sedang dipinjam.</div>";
  } else {
    output.innerHTML = "<div class='item-buku'>Semua buku tersedia.</div>";
  }
}

function available() {
  output.innerHTML = "";
  const availab = books.every((item) => {
    return item.status.toLowerCase() === "Available";
  });

  if (availab) {
    output.innerHTML = "<div class='item-buku'>Semua buku tersedia.</div>";
  } else {
    output.innerHTML =
      "<div class='item-buku'>Ada buku yang sedang dipinjam.</div>";
  }
}

function findBook() {
  const input = document.getElementById("nama").value.trim();

  const finding = books.find((item) => {
    return item.title.toLowerCase() === input.toLowerCase();
  });

  if (finding) {
    output.innerHTML = `<div class="item-buku">
          ${finding.title} by ${finding.author} is ${finding.status}
        </div>`;
  } else {
    output.innerHTML = `<div class="item-buku">Buku tidak ditemukan.</div>`;
  }
}

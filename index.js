// Fungsi sederhana untuk memberi interaksi pada tombol
function tampilPesan() {
  console.log("Menuju ke daftar menu...");
}

// Efek transisi Navbar saat di-scroll
window.onscroll = function () {
  var nav = document.querySelector("nav");
  if (window.pageYOffset > 100) {
    nav.style.background = "#1a1515";
    nav.style.padding = "10px 5%";
  } else {
    nav.style.background = "rgba(45, 36, 36, 0.95)";
    nav.style.padding = "15px 5%";
  }
};

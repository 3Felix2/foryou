const menu = document.getElementById("menu");
const hamb = document.getElementById("hamb");

function toggleMenu(){
  menu.classList.toggle("active");
  hamb.classList.toggle("active");
}

function closeMenu(){
  menu.classList.remove("active");
  hamb.classList.remove("active");
}

function kirimPesan(e){
  e.preventDefault();
  alert("Pesan berhasil dikirim!");
}
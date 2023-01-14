function openmain() {
  document.getElementById("maindiv").classList.add("aktif");
  document.getElementById("filmdiv").classList.remove("aktif");
  document.getElementById("bookdiv").classList.remove("aktif");
  document.getElementById("chardiv").classList.remove("aktif");
  document.getElementById("writerdiv").classList.remove("aktif");
  document.getElementById("aboutdiv").classList.remove("aktif");
}
function openfilm() {
  document.getElementById("maindiv").classList.remove("aktif");
  document.getElementById("filmdiv").classList.add("aktif");
  document.getElementById("bookdiv").classList.remove("aktif");
  document.getElementById("chardiv").classList.remove("aktif");
  document.getElementById("writerdiv").classList.remove("aktif");
  document.getElementById("aboutdiv").classList.remove("aktif");
}
function openbook() {
  document.getElementById("maindiv").classList.remove("aktif");
  document.getElementById("filmdiv").classList.remove("aktif");
  document.getElementById("bookdiv").classList.add("aktif");
  document.getElementById("chardiv").classList.remove("aktif");
  document.getElementById("writerdiv").classList.remove("aktif");
  document.getElementById("aboutdiv").classList.remove("aktif");
}
function openchar() {
  document.getElementById("maindiv").classList.remove("aktif");
  document.getElementById("filmdiv").classList.remove("aktif");
  document.getElementById("bookdiv").classList.remove("aktif");
  document.getElementById("chardiv").classList.add("aktif");
  document.getElementById("writerdiv").classList.remove("aktif");
  document.getElementById("aboutdiv").classList.remove("aktif");
}
function openwriter() {
  document.getElementById("maindiv").classList.remove("aktif");
  document.getElementById("filmdiv").classList.remove("aktif");
  document.getElementById("bookdiv").classList.remove("aktif");
  document.getElementById("chardiv").classList.remove("aktif");
  document.getElementById("writerdiv").classList.add("aktif");
  document.getElementById("aboutdiv").classList.remove("aktif");
}
function openabout() {
  document.getElementById("maindiv").classList.remove("aktif");
  document.getElementById("filmdiv").classList.remove("aktif");
  document.getElementById("bookdiv").classList.remove("aktif");
  document.getElementById("chardiv").classList.remove("aktif");
  document.getElementById("writerdiv").classList.remove("aktif");
  document.getElementById("aboutdiv").classList.add("aktif");
}

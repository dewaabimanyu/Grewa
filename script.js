function openPage(url) {
  // pindah ke halaman baru (fitur)
  window.location.href = url;
}

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("welcomePopup");
  const closeBtn = document.getElementById("closePopup");

  // cek apakah popup sudah muncul di sesi ini
  const popupShown = sessionStorage.getItem("popupShown");

  // kalau belum, tampilkan popup
  if (!popupShown) {
    setTimeout(() => {
      popup.classList.add("show");
    }, 700);

    sessionStorage.setItem("popupShown", "true");
  }

  // tombol tutup
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
  });
})
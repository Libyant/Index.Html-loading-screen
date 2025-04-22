// Fungsi untuk mengupdate progress bar secara dinamis
let progress = 0;
let statusText = document.getElementById('status-text');
let progressBar = document.getElementById('progress-bar');
let percentageText = document.getElementById('percentage');

function simulateDownload() {
  let downloadInterval = setInterval(() => {
    progress += 10; // Menambahkan 10% setiap interval
    if (progress <= 100) {
      progressBar.style.width = progress + '%'; // Update lebar progress bar
      percentageText.textContent = progress + '%'; // Update persentase di tengah bar
    } else {
      clearInterval(downloadInterval);
      statusText.textContent = 'Enter The New World!'; // Status selesai
      GamepadButtons[10].style.display = 'block'; // tampilkan tombol enter
    }
  }, 1000); // Update setiap 1 detik
  
}

// Memulai simulasi perpindahan//
simulateDownload();
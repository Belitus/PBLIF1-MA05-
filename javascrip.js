document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form reload halaman otomatis

    // Ambil data input jika diperlukan
    let username = document.getElementById('regUsername').value;

    // Contoh logika sederhana: langsung alihkan ke halaman dashboard
    window.location.href = "dashboard.html"; 
});
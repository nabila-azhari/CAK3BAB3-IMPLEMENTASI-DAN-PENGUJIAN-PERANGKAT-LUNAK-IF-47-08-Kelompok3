// Data profil mahasiswa
let profiles = [
  {
    id: 1,
    nama: "Bill Stephen Jacob Sembiring",
    kelas: "IF-08",
    nim: "103012330197",
    prodi: "S1 Informatika",
    keahlian: ["Web Dev", "JavaScript", "UI/UX"],
    hobi: ["Berbisnis", "Design"],
    img: "images/bill.jpg"
  },
  {
    id: 2,
    nama: "Muhammad Nayubi Adiva Ramadhan",
    kelas: "IF-08",
    nim: "103012300469",
    prodi: "S1 Informatika",
    keahlian: ["Mobile Dev", "Flutter", "Figma"],
    hobi: ["Membaca", "Menulis"],
    img: "images/nayubi.jpg"
  },
  {
    id: 3,
    nama: "Fathan Arya Maulana",
    kelas: "IF-08",
    nim: "103012300083",
    prodi: "S1 Informatika",
    keahlian: ["Python", "Data Science", "AI"],
    hobi: ["Membaca", "Menonton Film"],
    img: "images/fathan.jpg"
  },
  {
    id: 4,
    nama: "Nabila Putri Azhari",
    kelas: "IF-08",
    nim: "103012300273",
    prodi: "S1 Informatika",
    keahlian: ["Database", "PHP", "Laravel"],
    hobi: ["Traveling", "Fotografi"],
    img: "images/bila.jpg"
  },
  {
    id: 5,
    nama: "Nevan Nabiil Firmansyah Har",
    kelas: "IF-08",
    nim: "21102455",
    prodi: "S1 Informatika",
    keahlian: ["DevOps", "Linux", "Cloud"],
    hobi: ["Game", "Ngoprek"],
    img: "images/nevan.jpg"
  },
  {
    id: 6,
    nama: "Yolanda Rahma Chrysti",
    kelas: "IF-08",
    nim: "103012300150",
    prodi: "S1 Informatika",
    keahlian: ["Project Mgmt", "Testing", "HTML"],
    hobi: ["Ngoprek", "Fotografi"],
    img: "images/yola.jpg"
  },
  {
    id: 7,
    nama: "Dzaky Alfaris",
    kelas: "IF-08",
    nim: "103012300391",
    prodi: "S1 Informatika",
    keahlian: ["ReactJS", "NodeJS", "API"],
    hobi: ["Comicus"],
    img: "images/jaki.jpg"
  }
];

let nextId = 8;

// Fungsi untuk menampilkan profil
function renderProfiles() {
  document.getElementById('profileGrid').innerHTML =
    profiles.map(profile => `
      <div class="card">
        <div class="head">
          <img src="${profile.img}" alt="${profile.nama}" onerror="this.src='https://randomuser.me/api/portraits/lego/1.jpg'">
          <div>
            <div class="name">${profile.nama}</div>
            <div class="field"><span class="label">NIM:</span>${profile.nim}</div>
            <div class="field"><span class="label">Kelas:</span>${profile.kelas}</div>
          </div>
        </div>
        <div class="field"><span class="label">Prodi:</span>${profile.prodi}</div>
        <div class="field"><span class="label">Keahlian:</span>
          <span class="skills">
            ${profile.keahlian.map(k => `<span class="skill">${k}</span>`).join('')}
          </span>
        </div>
        <div class="field"><span class="label">Hobi:</span>
          <span class="skills">
            ${profile.hobi.map(h => `<span class="hobby">${h}</span>`).join('')}
          </span>
        </div>
      </div>
    `).join('');
}

// Fungsi untuk membuka modal
function openModal() {
  document.getElementById('addModal').style.display = 'block';
}

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById('addModal').style.display = 'none';
  document.getElementById('addForm').reset();
}

// Fungsi untuk menambah profil baru
function addProfile(profileData) {
  const newProfile = {
    id: nextId++,
    nama: profileData.nama,
    nim: profileData.nim,
    kelas: profileData.kelas,
    prodi: profileData.prodi,
    keahlian: profileData.keahlian.split(',').map(item => item.trim()).filter(item => item),
    hobi: profileData.hobi.split(',').map(item => item.trim()).filter(item => item),
    img: profileData.foto || `https://randomuser.me/api/portraits/lego/${Math.floor(Math.random() * 9) + 1}.jpg`
  };
  
  profiles.push(newProfile);
  renderProfiles();
}

// Event listener untuk form submit
document.addEventListener('DOMContentLoaded', function() {
  // Render profil pertama kali
  renderProfiles();
  
  // Handle form submission
  document.getElementById('addForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      nama: document.getElementById('nama').value.trim(),
      nim: document.getElementById('nim').value.trim(),
      kelas: document.getElementById('kelas').value.trim(),
      prodi: document.getElementById('prodi').value.trim(),
      keahlian: document.getElementById('keahlian').value.trim(),
      hobi: document.getElementById('hobi').value.trim(),
      foto: document.getElementById('foto').value.trim()
    };
    
    // Validasi data
    if (!formData.nama || !formData.nim || !formData.kelas || !formData.prodi) {
      alert('Mohon isi semua field yang wajib (Nama, NIM, Kelas, Prodi)!');
      return;
    }
    
    // Cek duplikat NIM
    if (profiles.some(p => p.nim === formData.nim)) {
      alert('NIM sudah terdaftar! Gunakan NIM yang berbeda.');
      return;
    }
    
    // Tambah profil dan tutup modal
    addProfile(formData);
    closeModal();
    
    // Tampilkan pesan sukses
    alert('Mahasiswa berhasil ditambahkan!');
  });
  
  // Handle modal click outside
  window.onclick = function(event) {
    const modal = document.getElementById('addModal');
    if (event.target === modal) {
      closeModal();
    }
  }
  
  // Handle ESC key untuk tutup modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('addModal').style.display === 'block') {
      closeModal();
    }
  });
});
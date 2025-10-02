// Data profil awal (Hanya akan digunakan jika Local Storage kosong)
let initialProfiles = [
  {
    id: 1,
    nama: "Bill Stephen Jacob Sembiring",
    kelas: "IF-08",
    nim: "103012330197",
    prodi: "S1 Informatika",
    keahlian: ["Web Dev", "JavaScript", "UI/UX"],
    hobi: ["Berbisnis", "Design"],
    img: "images/bill.jpg",
  },
  {
    id: 2,
    nama: "Muhammad Nayubi Adiva Ramadhan",
    kelas: "IF-08",
    nim: "103012300469",
    prodi: "S1 Informatika",
    keahlian: ["Mobile Dev", "Flutter", "Figma"],
    hobi: ["Membaca", "Menulis"],
    img: "images/nayubi.jpg",
  },
  {
    id: 3,
    nama: "Fathan Arya Maulana",
    kelas: "IF-08",
    nim: "103012300083",
    prodi: "S1 Informatika",
    keahlian: ["Python", "Data Science", "AI"],
    hobi: ["Membaca", "Menonton Film"],
    img: "images/fathan.jpg",
  },
  {
    id: 4,
    nama: "Nabila Putri Azhari",
    kelas: "IF-08",
    nim: "103012300273",
    prodi: "S1 Informatika",
    keahlian: ["Design", "Data Science", "Frontend"],
    hobi: ["Traveling", "Fotografi"],
    img: "images/bila.jpg",
  },
  {
    id: 5,
    nama: "Nevan Nabiil Firmansyah Har",
    kelas: "IF-08",
    nim: "21102455",
    prodi: "S1 Informatika",
    keahlian: ["DevOps", "Linux", "Cloud"],
    hobi: ["Game", "Ngoprek"],
    img: "images/nevan.jpg",
  },
  {
    id: 6,
    nama: "Yolanda Rahma Chrysti",
    kelas: "IF-08",
    nim: "103012300150",
    prodi: "S1 Informatika",
    keahlian: ["Project Mgmt", "Testing", "HTML"],
    hobi: ["Ngoprek", "Fotografi"],
    img: "images/yola.jpg",
  },
  {
    id: 7,
    nama: "Dzaky Alfaris",
    kelas: "IF-08",
    nim: "103012300391",
    prodi: "S1 Informatika",
    keahlian: ["ReactJS", "NodeJS", "API"],
    hobi: ["Comicus"],
    img: "images/jaki.jpg",
  },
];

// PENTING: Mengambil data dari Local Storage atau menggunakan data awal
let profiles = JSON.parse(localStorage.getItem("profiles")) || initialProfiles;

let nextId = 100;
const profileGrid = document.getElementById("profileGrid");
let currentBase64Image = null;

// --- Fungsi Helper Mode ---

function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById("mode-toggle");

  body.classList.toggle("light-mode");

  const isLight = body.classList.contains("light-mode");
  localStorage.setItem("mode", isLight ? "light" : "dark");

  toggleButton.textContent = isLight ? "🌙 Dark Mode" : "☀️ Light Mode";
}

// --- Fungsi Helper Form/Data ---

function saveProfiles() {
  localStorage.setItem("profiles", JSON.stringify(profiles));
}

window.openModal = function () {
  document.getElementById("addModal").style.display = "block";
};

window.closeModal = function () {
  document.getElementById("addModal").style.display = "none";
  document.getElementById("addForm").reset();
  currentBase64Image = null;
  document.getElementById("image-preview").style.display = "none";
  document.getElementById("image-preview").src = "";
};

window.previewImage = function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  const preview = document.getElementById("image-preview");

  reader.onloadend = function () {
    preview.src = reader.result;
    preview.style.display = "block";
    currentBase64Image = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
    preview.style.display = "none";
    currentBase64Image = null;
  }
};

// --- Fungsi Utama ---

function renderProfiles() {
  profileGrid.innerHTML = profiles
    .map(
      (profile) => `
    <div class="flip-card">
      <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="${profile.img}" alt="${profile.nama}" />
        <div class="name">${profile.nama}</div>
      </div>
      <div class="flip-card-back">
        <div class="field"><span class="label">Prodi:</span> ${
          profile.prodi
        }</div>
        <div class="field"><span class="label">NIM:</span> ${
          profile.nim
        }</div>
        <div class="field"><span class="label">Kelas:</span> ${
          profile.kelas
        }</div>
        
        <div class="field"><span class="label">Keahlian:</span> ${profile.keahlian
          .map((k) => `<span class="skill">${k}</span>`)
          .join("")}</div>
        <div class="field"><span class="label">Hobi:</span> ${profile.hobi
          .map((h) => `<span class="hobby">${h}</span>`)
          .join("")}</div>
      </div>
      </div>
    </div>
    `
    )
    .join("");

  // Re-attach event listener untuk flip
  document.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.querySelector(".flip-card-inner").classList.toggle("flipped");
    });
  });
}

function addProfile(profileData) {
  // Tentukan sumber foto: Base64 jika diupload, jika tidak, gunakan default images/new.jpg
  const defaultImagePath = "images/new.jpg";
  const photoSource = currentBase64Image || defaultImagePath;

  const newProfile = {
    id: nextId++,
    nama: profileData.nama,
    nim: profileData.nim,
    kelas: profileData.kelas,
    prodi: profileData.prodi,
    keahlian: profileData.keahlian
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item),
    hobi: profileData.hobi
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item),
    img: photoSource,
  };

  profiles.push(newProfile);
  saveProfiles();
  renderProfiles();
}

// --- Event Listener Utama ---

document.addEventListener("DOMContentLoaded", function () {
  // 1. LOGIKA MODE AWAL
  const savedMode = localStorage.getItem("mode");
  const toggleButton = document.getElementById("mode-toggle");

  if (savedMode === "light") {
    document.body.classList.add("light-mode");
    toggleButton.textContent = "🌙 Dark Mode";
  } else {
    document.body.classList.remove("light-mode");
    toggleButton.textContent = "☀️ Light Mode";
  }

  // 2. RENDER PROFIL
  renderProfiles();

  // 3. HANDLE FORM SUBMIT
  document.getElementById("addForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      nama: document.getElementById("nama").value.trim(),
      nim: document.getElementById("nim").value.trim(),
      kelas: document.getElementById("kelas").value.trim(),
      prodi: document.getElementById("prodi").value.trim(),
      keahlian: document.getElementById("keahlian").value.trim(),
      hobi: document.getElementById("hobi").value.trim(),
    };

    if (!formData.nama || !formData.nim || !formData.kelas || !formData.prodi) {
      alert("Mohon isi semua field yang wajib (Nama, NIM, Kelas, Prodi)!");
      return;
    }
    if (profiles.some((p) => p.nim === formData.nim)) {
      alert("NIM sudah terdaftar! Gunakan NIM yang berbeda.");
      return;
    }

    addProfile(formData);
    closeModal();

    alert("Mahasiswa berhasil ditambahkan!");
  });

  // 4. HANDLE MODAL CLOSE
  window.onclick = function (event) {
    const modal = document.getElementById("addModal");
    if (event.target === modal) {
      closeModal();
    }
  };
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      document.getElementById("addModal").style.display === "block"
    ) {
      closeModal();
    }
  });
});
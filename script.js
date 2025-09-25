const profiles = [
  {
    nama: "Bill Stephen Jacob Sembiring", kelas: "IF-08", nim: "103012330197", prodi: "S1 Informatika",
    keahlian: ["Web Dev", "JavaScript", "UI/UX"], hobi: ["Berbisnis", "Design"], img: "hhttps://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    nama: "Muhammad Nayubi Adiva Ramadhan", kelas: "IF-08", nim: "103012300469", prodi: "S1 Informatika",
    keahlian: ["Mobile Dev", "Flutter", "Figma"], hobi: ["Membaca", "Menulis"], img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    nama: "Fathan Arya Maulana", kelas: "IF-08", nim: "103012300083", prodi: "S1 Informatika",
    keahlian: ["Python", "Data Science", "AI"], hobi: ["Membaca", "Menonton Film"], img: "https://randomuser.me/api/portraits/men/58.jpg"
  },
  {
    nama: "Nabila Putri Azhari", kelas: "IF-08", nim: "103012300273", prodi: "S1 Informatika",
    keahlian: ["Database", "PHP", "Laravel"], hobi: ["Traveling", "Fotografi"], img: "https://randomuser.me/api/portraits/women/29.jpg"
  },
  {
    nama: "Nevan Nabiil Firmansyah Har", kelas: "IF-08", nim: "21102455", prodi: "S1 Informatika",
    keahlian: ["DevOps", "Linux", "Cloud"], hobi: ["Game", "Ngoprek"], img: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    nama: "Yolanda Rahma Chrysti", kelas: "IF-08", nim: "103012300150", prodi: "S1 Informatika",
    keahlian: ["Project Mgmt", "Testing", "HTML"], hobi: ["Ngoprek", "Fotografi"], img: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    nama: "Dzaky Alfaris", kelas: "IF-08", nim: "103012300391", prodi: "S1 Informatika",
    keahlian: ["ReactJS", "NodeJS", "API"], hobi: ["Comicus"], img: "https://randomuser.me/api/portraits/men/11.jpg"
  }
];

document.getElementById('profileGrid').innerHTML =
  profiles.map(profile => `
    <div class="card">
      <div class="head">
        <img src="${profile.img}" alt="${profile.nama}">
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

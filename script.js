const texts = [
`Ada luka yang tidak berdarah, tetapi setiap hari mengajarkan tubuh cara bertahan.`,
`Tidak semua kelelahan ingin disembuhkan, sebagian hanya ingin dimengerti.`,
`Waktu berjalan tanpa menunggu siap, lalu meninggalkan rasa bersalah di belakangnya.`,
`Ketenangan sering datang setelah menerima bahwa tidak semua hal bisa diperbaiki.`,
`Ada hari ketika diam menjadi satu-satunya bentuk keberanian.`,
`Hidup tidak selalu kejam, kadang hanya jujur tanpa belas kasihan.`,
`Yang paling melelahkan bukan jatuh, melainkan berpura-pura tidak sakit saat bangkit.`,
`Sebagian orang kuat karena terpaksa, bukan karena ingin.`,
`Kesedihan yang paling sunyi adalah yang tidak pernah sempat diceritakan.`,
`Tidak semua kehilangan berbentuk perpisahan, ada yang tinggal selamanya di ingatan.`,
`Bertahan hidup kadang berarti menerima bahwa bahagia bukan tujuan hari ini.`,
`Ada kekuatan aneh dalam mengakui bahwa diri ini lelah.`,
`Tidak semua doa meminta keajaiban, sebagian hanya meminta hari yang lebih ringan.`,
`Manusia belajar dewasa dari hal-hal yang tidak pernah diminta.`,
`Ada harapan yang tidak mati, hanya bersembunyi agar tidak disakiti lagi.`,
`Kesabaran sering lahir dari kehabisan pilihan.`,
`Tidak semua senyum berasal dari kebahagiaan, ada yang lahir dari keputusasaan.`,
`Waktu tidak menyembuhkan, ia hanya mengajarkan cara hidup dengan luka.`,
`Ada perasaan yang terlalu berat untuk dinamai.`,
`Keikhlasan sering datang setelah lelah melawan kenyataan.`,
`Ada hari ketika bernapas saja sudah termasuk pencapaian.`,
`Tidak semua perjuangan terlihat, sebagian terjadi dalam diam.`,
`Kesunyian mengajarkan hal-hal yang tidak pernah diajarkan keramaian.`,
`Ada kekosongan yang tidak bisa diisi, hanya bisa diterima.`,
`Kuat bukan berarti tidak hancur, melainkan tetap berdiri meski retak.`,
`Tidak semua hari harus dimenangkan, sebagian cukup dilewati.`,
`Hidup terus berjalan, meski hati belum sepenuhnya siap mengikutinya.`,
`Bertahan adalah bentuk harapan yang paling sunyi.`
];

let currentIndex = Math.floor(Math.random() * texts.length);
const textEl = document.getElementById("text");
let typingInterval;

/* ==== TYPE EFFECT ==== */
function typeText(text) {
  clearInterval(typingInterval);
  textEl.innerText = "";
  let i = 0;

  typingInterval = setInterval(() => {
    textEl.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(typingInterval);
  }, 75);
}

function showText(index) {
  typeText(texts[index]);
}

showText(currentIndex);

/* ==== PANAH ==== */
function safeClick(fn) {
  return function (e) {
    e.preventDefault();
    e.stopPropagation();
    fn();
  };
}

document.getElementById("prev").addEventListener("click", safeClick(() => {
  currentIndex = (currentIndex - 1 + texts.length) % texts.length;
  showText(currentIndex);
}));

document.getElementById("next").addEventListener("click", safeClick(() => {
  currentIndex = (currentIndex + 1) % texts.length;
  showText(currentIndex);
}));

/* ==== JAM ==== */
const timeEl = document.getElementById("time");
const hari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];

function updateTime() {
  const now = new Date();
  timeEl.innerText =
    `${hari[now.getDay()]}, ` +
    `${String(now.getDate()).padStart(2,"0")}-` +
    `${String(now.getMonth()+1).padStart(2,"0")}-` +
    `${now.getFullYear()} • ` +
    `${String(now.getHours()).padStart(2,"0")}:` +
    `${String(now.getMinutes()).padStart(2,"0")}:` +
    `${String(now.getSeconds()).padStart(2,"0")}`;
}

setInterval(updateTime, 1000);
updateTime();

/* ==== MUSIC ==== */
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

music.volume = 0.8;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    musicBtn.innerText = "🔊";
  } else {
    music.pause();
    musicBtn.innerText = "🔈";
  }
  isPlaying = !isPlaying;
});

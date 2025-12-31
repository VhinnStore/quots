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

`Tidak semua senyum berasal dari kebahagiaan, ada yang lahir dari keputusasaan yang rapi.`,

`Waktu tidak menyembuhkan, ia hanya mengajarkan cara hidup berdampingan dengan luka.`,

`Ada perasaan yang terlalu berat untuk dinamai, namun terlalu nyata untuk diabaikan.`,

`Keikhlasan sering datang setelah lelah melawan kenyataan.`,

`Tidak semua orang ingin dimengerti, sebagian hanya ingin tidak disalahkan.`,

`Ada hari ketika bernapas saja sudah termasuk pencapaian.`,

`Hidup menguji bukan untuk menjatuhkan, tetapi untuk melihat seberapa lama bisa bertahan.`,

`Kesunyian mengajarkan banyak hal yang tidak pernah diajarkan keramaian.`,

`Tidak semua rasa sakit membutuhkan jawaban, sebagian hanya membutuhkan waktu.`,

`Ada kekosongan yang tidak bisa diisi, hanya bisa diterima.`,

`Kuat bukan berarti tidak hancur, melainkan tetap berdiri meski retaknya terlihat.`,

`Beberapa orang tumbuh dari cinta, yang lain tumbuh dari kehilangan.`,

`Tidak semua luka ingin dilihat, sebagian hanya ingin dihormati.`,

`Ada keberanian dalam memilih untuk tetap hidup di hari yang terasa berat.`,

`Hidup tidak selalu adil, tetapi selalu konsisten dalam menguji.`,

`Kesedihan tidak selalu keras, kadang ia duduk diam di sudut pikiran.`,

`Tidak semua perjuangan terlihat, sebagian terjadi dalam diam.`,

`Ada damai yang lahir setelah menyerah pada hal yang tidak bisa diubah.`,

`Manusia sering kuat bukan karena siap, tetapi karena tidak ada pilihan lain.`,

`Waktu mengikis banyak hal, termasuk kemampuan untuk berharap tanpa takut.`,

`Tidak semua yang hilang perlu dicari kembali.`,

`Ada ketenangan dalam menerima bahwa tidak semua cerita berakhir indah.`,

`Hidup mengajarkan arti cukup lewat rasa kehilangan.`,

`Kesedihan yang dipendam terlalu lama akan mengubah cara memandang dunia.`,

`Tidak semua hari harus dimenangkan, sebagian cukup dilewati.`,

`Ada luka yang membentuk karakter, bukan menghancurkannya.`,

`Manusia belajar bertahan dari hari-hari yang tidak ingin diingat.`,

`Keheningan sering menjadi tempat paling jujur bagi perasaan.`,

`Tidak semua cahaya datang untuk menerangi, ada yang hanya memastikan tidak tersesat.`,

`Ada kekuatan dalam mengakui bahwa hari ini terasa berat.`,

`Hidup terus berjalan, meski hati belum sepenuhnya siap mengikutinya.`,

`Bertahan adalah bentuk harapan yang paling sunyi.`
];

let currentIndex = Math.floor(Math.random() * texts.length);
const textEl = document.getElementById("text");
let typingInterval;

// ==== TYPE EFFECT ====
function typeText(text) {
  clearInterval(typingInterval);
  textEl.innerText = "";
  let i = 0;

  typingInterval = setInterval(() => {
    textEl.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(typingInterval);
  }, 24);
}

function showText(index) {
  typeText(texts[index]);
}

// tampil awal
showText(currentIndex);

// ==== FIX CLICK (ANTI SCROLL) ====
function safeClick(fn) {
  return function (e) {
    e.preventDefault();
    e.stopPropagation();
    fn();
  };
}

document.getElementById("prev").addEventListener(
  "click",
  safeClick(() => {
    currentIndex = (currentIndex - 1 + texts.length) % texts.length;
    showText(currentIndex);
  })
);

document.getElementById("next").addEventListener(
  "click",
  safeClick(() => {
    currentIndex = (currentIndex + texts.length + 1) % texts.length;
    showText(currentIndex);
  })
);

// ==== JAM REAL TIME ====
const timeEl = document.getElementById("time");
const hari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];

function updateTime() {
  const now = new Date();
  const h = hari[now.getDay()];
  const d = String(now.getDate()).padStart(2, "0");
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const y = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");

  timeEl.innerText = `${h}, ${d}-${m}-${y} • ${hh}:${mm}:${ss}`;
}

setInterval(updateTime, 1000);
updateTime();
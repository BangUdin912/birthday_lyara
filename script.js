function switchScreen(from, to) {
    document.getElementById(from).classList.remove("active");
    document.getElementById(to).classList.add("active");
  }
  
  // LETTER
  document.getElementById("envelope").onclick = () => {
    switchScreen("screen-letter", "screen-game");
  };
  
  // GAME
  const questions = [
    { q: "Dimana pertama kali kita kenal?", a: "Telegram" },
    { q: "Pertama kali kita main game apa?", a: "Mobile Legend" },
    { q: "Makanan favorit kita?", a: "Sate" },
    { q: "Jarak umur kita berapa? (..tahun ..bulan)", a: "3 tahun 11 bulan" },
    { q: "Nama lengkap Mas?", a: "Nur Khoerudin" },
    { q: "Rumah Mas dimana?", a: "Purwokerto" }
  ];
  
  let currentQuestion = 0;
  
  const questionEl = document.getElementById("question");
  const answerEl = document.getElementById("answer");
  const feedbackEl = document.getElementById("feedback");
  const progressBar = document.getElementById("progress-bar");
  
  function loadQuestion() {
    questionEl.innerText = questions[currentQuestion].q;
    answerEl.value = "";
    feedbackEl.innerText = "";
    progressBar.style.width = ((currentQuestion) / questions.length) * 100 + "%";
  }
  
  loadQuestion();
  
  function submitAnswer() {
    if (answerEl.value.trim().toLowerCase() === questions[currentQuestion].a.toLowerCase()) {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        progressBar.style.width = "100%";
        setTimeout(() => {
          switchScreen("screen-game", "screen-cards");
        }, 600);
      }
    } else {
      feedbackEl.innerText = "Masih belum tepat 💭";
    }
  }
  
  // CARDS
  const opened = {};
  
  const cardMessages = {
    1: {
      title: "Lyara Verena Allya 💖",
      text: "Selamat ulang tahun ke-20 yaa sayang. Semoga selalu sehat, bahagia, dan semua yang kamu impikan pelan-pelan terwujud 🤍"
    },
    2: {
      title: "Janji Kecil ✨",
      text: "Semoga kita bisa ketawa bareng-bareng terus, bisa cerita semua hal entah kecil,besar atau bahkan random, saling jaga dan perhatian satu sama lain."
    },
    3: {
      title: "Makan-makan 🎂",
      text: "Info makan-makan nya atuhhh sayang, mas yang traktir atau kamu nii? wkwk"
    }
  };
  
  function openCard(num) {
    opened[num] = true;
    document.getElementById("cardTitle").innerText = cardMessages[num].title;
    document.getElementById("cardMessage").innerText = cardMessages[num].text;
    switchScreen("screen-cards", "screen-message");
  }
  
  function backToCards() {
    switchScreen("screen-message", "screen-cards");
  }

  function goToHangout() {
    switchScreen("screen-cards", "screen-hangout");
  }
  
  function sendToWA() {
    const place = document.getElementById("hangoutPlace").value;
    const time = document.getElementById("hangoutTime").value;
  
    if (!place || !time) {
      alert("Tempat dan waktu harus diisi ya 😊");
      return;
    }
  
    const phoneNumber = "6287721031868"; // GANTI nomor kamu
    const message = 
      `Hai mas \n\nAku mau ajak hangout \n\n Tempat: ${place}\n Waktu: ${time}\n\nAku tunggu yaa mas `;
  
    const url = 
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    window.open(url, "_blank");
  }
  
  function goToHangout() {
    switchScreen("screen-cards", "screen-hangout");
  }

  


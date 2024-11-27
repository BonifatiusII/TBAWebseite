document.addEventListener("DOMContentLoaded", () => {
  const leisteItems = document.querySelectorAll(".leiste div");

  leisteItems.forEach((item) => {
    // Selektoren für button und h2 vorab definieren
    const button = item.querySelector("button");
    const h2 = item.querySelector("h2");

    if (button) {
      item.addEventListener("mouseover", () => {
        button.style.textDecoration = "underline";
      });

      item.addEventListener("mouseout", () => {
        if (!button.classList.contains("active")) {
          button.style.textDecoration = "none";
        }
      });
    }

    if (h2) {
      item.addEventListener("mouseover", () => {
        h2.style.textDecoration = "underline";
      });

      item.addEventListener("mouseout", () => {
        if (!h2.classList.contains("active")) {
          h2.style.textDecoration = "none";
        }
      });
    }
  });
});

$(document).ready(function () {
  let activeClasses = [];

  $(".leiste button").click(function () {
    var targetClass = $(this).attr("class").split(" ")[0];

    if (activeClasses.includes(targetClass)) {
      activeClasses = activeClasses.filter((cls) => cls !== targetClass);
      $(this).removeClass("active").css("text-decoration", "none");
    } else {
      activeClasses.push(targetClass);
      $(this).addClass("active").css("text-decoration", "underline");
    }

    $(".eintrag").each(function () {
      if ($(this).hasClass("hidden")) {
        $(this).css("visibility", "hidden");
        return;
      }

      if (
        activeClasses.length === 0 ||
        activeClasses.some((cls) => $(this).hasClass(cls))
      ) {
        $(this).css("visibility", "visible");
      } else {
        $(this).css("visibility", "hidden");
      }
    });

    // Zeige eintrag.open.matte immer an
    $(".eintrag.open.matte").css("visibility", "visible");
  });
});

function redirectToInstagram() {
  window.open(
    "https://www.instagram.com/thaiboxacademy_konstanz/?hl=de",
    "_blank",
    "noopener"
  );
}

document.addEventListener("DOMContentLoaded", () => {
    const reviews = [
      {
        name: "Kai Steen.",
        detail:
          "Super Trainer, sauberes Gym, für den Monatsbeitrag eine große Auswahl an verschiedenen Kursen und die Atmosphäre ist optimal!",
        stars: 5,
      },
      {
        name: "Zoe Schäfle.",
        detail:
          "Super Training! Besonders als Frau fühlt man sich durch den respektvollen Umgang wohl. Das CrossFit Training ist besonders zu empfehlen!",
        stars: 5,
      },
      {
        name: "Lovro Videkic.",
        detail:
          "Sehr gutes Training super Trainer kann man nur empfehlen .",
        stars: 5,
      },
      {
        name: "tim sege.",
        detail:
          "Super Training tolle Leute und es wird Respekt voll umgegangen egal mit jung oder alt.",
        stars: 5,
      },
      {
        name: "Fabian Kaschura.",
        detail:
          "Sehr guter Trainer, sehr gutes Training! Nichts auszusetzen.",
        stars: 5,
      },
      {
        name: "Jonathan Koos.",
        detail:
          "Sehr gutes Training! Super Leute! Gute Atmosphäre!",
        stars: 5,
      },
      {
        name: "Majed Mousa.",
        detail:
          "Sehr starke Trainingseinheiten man kommt echt an seine Grenzen.Sehr zu empfehlen !!!",
        stars: 5,
      },
      {
        name: "Kim S.",
        detail:
          "Hammer Trainer, hammer Gym, nur empfehlenswert und alle Trainer dort sehr erfahren.",
        stars: 5,
      },
      {
        name: "Wolfgang Stumpf.",
        detail:
          "Tolle Atmosphäre tolles Team und krasse Trainer",
        stars: 5,
      },
      {
        name: "Ömer korkut.",
        detail:
          "Der Trainer Semih sehr sympathisch, nimmt sich Zeit und legt Wert auf gute Ausführung!",
        stars: 5,
      },
      {
        name: "Hamudi .82.",
        detail:
          "Der beste Club überhaupt in ganz Konstanz und Umgebung💪🏾Beste Atmosphäre und höchst professionell",
        stars: 5,
      },
      {
        name: "Denis Ebel.",
        detail:
          "Super Trainer mit viel Erfahrung und Professionalität.",
        stars: 5,
      },
      {
        name: "Mike Schmehl.",
        detail:
          "Ich Super Training. Tolle Leute. Hammer Chemiebin total begeistert. ",
        stars: 5,
      },
      {
        name: "Eric Weinhold.",
        detail: "Sehr gutes Training",
        stars: 5,
      },
      {
        name: "Frederico Silveira.",
        detail: "Super Training echt gut 🔥🔥",
        stars: 5,
      },
      {
        name: "Gustav Boldt.",
        detail:
          "Top Leute und Top Trainer was besseres gibt es nicht in Konstanz!",
        stars: 5,
      },
      {
        name: "makimiki 315.",
        detail: "Das beste Training in Konstanz nur zu empfehlen 🥊💪",
        stars: 5,
      },
    ];
  
    let currentReviewIndex = 0;
  
    const reviewDetail = document.querySelector(".review-detail");
    const reviewName = document.querySelector(".review-name");
    const reviewStars = document.querySelector(".review-stars");
  
    function displayReview() {
      const review = reviews[currentReviewIndex];
      reviewDetail.textContent = `"${review.detail}"`;
      reviewName.textContent = `- ${review.name}`;
      reviewStars.innerHTML =
        "★".repeat(review.stars) + "☆".repeat(5 - review.stars);
    }
  
    // Automatischer Wechsel alle 5 Sekunden
    setInterval(() => {
      currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
      displayReview();
    }, 5000);
  
    // Buttons für manuelles Wechseln
    const nextButton = document.querySelector(".next-review");
    const prevButton = document.querySelector(".prev-review");
  
    nextButton.addEventListener("click", () => {
      currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
      displayReview();
    });
  
    prevButton.addEventListener("click", () => {
      currentReviewIndex =
        (currentReviewIndex - 1 + reviews.length) % reviews.length;
      displayReview();
    });
  
    // Direkt beim Laden anzeigen
    displayReview();
  });
  
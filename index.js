"use strict";

/* ========================================
   MENU DATA
======================================== */

const menuData = {
  starters: {
    label: "Starters",
    introduction:
      "Begin with warming highland flavours, garden herbs and carefully prepared local ingredients.",
    items: [
      {
        name: "Nuwara Eliya Garlic Herb Soup",
        description:
          "Warm roasted garlic broth with fresh forest herbs and buttered croutons.",
        price: "LKR 1,600"
      },
      {
        name: "Highland Green Broccoli & Almond Salad",
        description:
          "Blanched garden broccoli tossed with toasted almond flakes and citrus dressing.",
        price: "LKR 2,000"
      },
      {
        name: "Lemongrass Beef Salad",
        description:
          "Thinly sliced marinated beef with sesame seeds, local greens and chilli-lime dressing.",
        price: "LKR 2,000"
      }
    ]
  },

  mains: {
    label: "Mains",
    introduction:
      "Comforting highland plates prepared with rich sauces, fresh vegetables and Sri Lankan character.",
    items: [
      {
        name: "Pattipola Beef Tenderloin",
        description:
          "Pan-seared tenderloin served over garlic mash, buttered green beans and rich meat jus.",
        price: "LKR 4,800"
      },
      {
        name: "Chef's Special Grilled Mountain Fish",
        description:
          "Fresh local catch grilled with garlic, fresh lemon juice and mild garden spices.",
        price: "LKR 3,200"
      }
    ]
  },

  desserts: {
    label: "Desserts",
    introduction:
      "A gentle finish inspired by Nuwara Eliya strawberries, local honey and warm spice.",
    items: [
      {
        name: "Highland Strawberry Cheesecake",
        description:
          "Velvety cream cheese on a buttery biscuit base, topped with fresh Nuwara Eliya strawberry coulis.",
        price: "LKR 5,500"
      },
      {
        name: "Highland Honey & Vanilla Panna Cotta",
        description:
          "Silky vanilla bean panna cotta drizzled with raw local forest honey.",
        price: "LKR 2,900"
      }
    ]
  }
};

const menuPanel = document.getElementById("menuPanel");
const menuCategoryButtons = document.querySelectorAll(
  "[data-menu-category]"
);

function renderMenu(category) {
  const menu = menuData[category];

  if (!menu || !menuPanel) {
    return;
  }

  menuPanel.classList.remove("menu-panel");
  void menuPanel.offsetWidth;
  menuPanel.classList.add("menu-panel");

  menuPanel.innerHTML = `
        <div class="menu-panel-header">
            <div>
                <p class="eyebrow">${menu.label}</p>
                <p class="menu-panel-introduction">
                    ${menu.introduction}
                </p>
            </div>

            <span class="font-display text-4xl text-[#e1ca8a]">
                ${String(menu.items.length).padStart(2, "0")}
            </span>
        </div>

        ${menu.items
      .map(
        (item) => `
                    <article class="menu-item">
                        <div class="menu-item-main">
                            <div>
                                <h3 class="menu-item-title">
                                    ${item.name}
                                </h3>

                                <p class="menu-item-description">
                                    ${item.description}
                                </p>
                            </div>

                            <span class="menu-item-price">
                                ${item.price}
                            </span>
                        </div>
                    </article>
                `
      )
      .join("")}
    `;
}

menuCategoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    menuCategoryButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    renderMenu(button.dataset.menuCategory);
  });
});

renderMenu("starters");

/* ========================================
   DOME DATA
======================================== */

const suites = {
  stargazer: {
    title: "Celestial Stargazer Dome",
    label: "Signature dome",
    price: "From LKR 155,000 / night",
    image: "assets/dome-resort.jpeg",
    description:
      "A glass-canopy retreat for starlit evenings. Settle beneath the dome apex, warm your hands by the fire and look out over a sleeping highland landscape.",
    facts: [
      "King bed beneath glass",
      "Private cedar soaking ritual",
      "Warm interior lounge"
    ]
  },

  valley: {
    title: "Misty Valley Dome",
    label: "Valley-facing suite",
    price: "From LKR 170,500 / night",
    image: "assets/misty-valley.jpeg",
    description:
      "Face the western valley as cloud banks gather across the tea slopes. A private lounge and curved panorama make the changing weather part of your stay.",
    facts: [
      "Wide mist-valley view",
      "Slow breakfast on deck",
      "Rainfall bathing space"
    ]
  },

  horizon: {
    title: "Highland Horizon Dome",
    label: "Private crest stay",
    price: "From LKR 165,000 / night",
    image: "assets/Highland-Horizon.jpeg",
    description:
      "Created for complete quiet. This elevated dome pairs expansive horizon views with a secluded deck, fireside warmth and thoughtful hosting.",
    facts: [
      "Most secluded position",
      "Extended private deck",
      "Fireside evening setup"
    ]
  }
};

const suiteContent = document.getElementById("suiteContent");
const suiteTabs = document.querySelectorAll("[data-suite]");

function renderSuite(key) {
  const suite = suites[key];

  if (!suite || !suiteContent) {
    return;
  }

  suiteContent.innerHTML = `
        <div class="suite-layout">

            <div class="suite-image">
                <img
                    src="${suite.image}"
                    alt="${suite.title}"
                    onerror="this.style.display='none'"
                >

                <div class="suite-image-overlay"></div>

                <div class="suite-image-content">
                    <p class="eyebrow">${suite.label}</p>

                    <h3 class="font-display">
                        ${suite.title}
                    </h3>
                </div>
            </div>

            <div class="suite-details glass-dark">
                <h4>The details</h4>

                <p>${suite.description}</p>

                <div class="suite-facts">
                    ${suite.facts
      .map(
        (fact) => `
                                <div class="feature-line">
                                    ${fact}
                                </div>
                            `
      )
      .join("")}
                </div>

                <div class="mt-auto pt-8">
                    <p class="eyebrow">Indicative stay rate</p>

                    <p class="font-display text-4xl text-[#e1ca8a]">
                        ${suite.price}
                    </p>

                    <button
                        type="button"
                        class="button-gold mt-5 w-full"
                        data-choose-suite="${suite.title}"
                    >
                        <span>Choose this dome</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>

        </div>
    `;

  const chooseSuiteButton = document.querySelector(
    "[data-choose-suite]"
  );

  if (chooseSuiteButton) {
    chooseSuiteButton.addEventListener("click", () => {
      selectSuite(chooseSuiteButton.dataset.chooseSuite);
    });
  }
}

function selectSuite(suiteName) {
  if (bookingSuite) {
    bookingSuite.value = suiteName;
    updateBookingSummary();
  }

  const bookingSection = document.getElementById("booking");

  if (bookingSection) {
    bookingSection.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }

  showToast(`${suiteName} selected for your stay estimate.`);
}

suiteTabs.forEach((button) => {
  button.addEventListener("click", () => {
    suiteTabs.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    renderSuite(button.dataset.suite);
  });
});

renderSuite("stargazer");

/* ========================================
   MOBILE MENU
======================================== */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const menuOpenIcon = document.getElementById("menuOpenIcon");
const menuCloseIcon = document.getElementById("menuCloseIcon");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");

    mobileMenu.classList.toggle("hidden", isOpen);
    menuOpenIcon.classList.toggle("hidden", !isOpen);
    menuCloseIcon.classList.toggle("hidden", isOpen);

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    document.body.classList.toggle("menu-open", !isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuOpenIcon.classList.remove("hidden");
      menuCloseIcon.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

/* ========================================
   SCROLL REVEAL
======================================== */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

/* ========================================
   BOOKING CONFIGURATION
======================================== */

const bookingRates = {
  "Celestial Stargazer Dome": {
    rate: 155000,
    initials: "CSD"
  },

  "Misty Valley Dome": {
    rate: 170500,
    initials: "MVD"
  },

  "Highland Horizon Dome": {
    rate: 165000,
    initials: "HHD"
  }
};

const ADDITIONAL_GUEST_RATE_PER_NIGHT = 18000;
const SERVICE_CHARGE_PERCENTAGE = 0.1;

/* ========================================
   BOOKING ELEMENTS
======================================== */

const today = new Date();

const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const guests = document.getElementById("guests");
const bookingSuite = document.getElementById("bookingSuite");
const bookingForm = document.getElementById("bookingForm");

const summaryDomeName = document.getElementById("summaryDomeName");
const summaryNights = document.getElementById("summaryNights");
const summaryGuests = document.getElementById("summaryGuests");
const summaryRate = document.getElementById("summaryRate");

const summaryAccommodationLabel = document.getElementById(
  "summaryAccommodationLabel"
);

const summaryAccommodation = document.getElementById(
  "summaryAccommodation"
);

const summaryGuestCharge = document.getElementById(
  "summaryGuestCharge"
);

const summaryServiceCharge = document.getElementById(
  "summaryServiceCharge"
);

const summaryTotal = document.getElementById("summaryTotal");
const summaryPerGuest = document.getElementById("summaryPerGuest");

/* ========================================
   DATE HELPERS
======================================== */

function formatInputDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getSafeDate(dateValue) {
  if (!dateValue) {
    return new Date();
  }

  const [year, month, day] = dateValue.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function formatDisplayDate(dateValue) {
  const date = getSafeDate(dateValue);

  return new Intl.DateTimeFormat("en-LK", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(date);
}

function formatLKR(amount) {
  const formattedAmount = Math.round(amount).toLocaleString("en-LK");

  /*
      Non-breaking space prevents:
      LKR
      310,000

      from being separated unexpectedly.
  */
  return `LKR\u00A0${formattedAmount}`;
}

/* ========================================
   DEFAULT BOOKING DATES
======================================== */

function setDefaultBookingDates() {
  const inDate = new Date(today);
  inDate.setDate(inDate.getDate() + 14);

  const outDate = new Date(inDate);
  outDate.setDate(outDate.getDate() + 2);

  const todayValue = formatInputDate(today);
  const inDateValue = formatInputDate(inDate);
  const outDateValue = formatInputDate(outDate);

  checkIn.min = todayValue;
  checkOut.min = todayValue;

  checkIn.value = inDateValue;
  checkOut.value = outDateValue;
}

setDefaultBookingDates();

/* ========================================
   BOOKING CALCULATOR
======================================== */

function getStayNights() {
  if (!checkIn.value || !checkOut.value) {
    return 1;
  }

  const startDate = getSafeDate(checkIn.value);
  const endDate = getSafeDate(checkOut.value);

  const differenceInMilliseconds = endDate - startDate;

  const calculatedNights = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  return calculatedNights > 0 ? calculatedNights : 1;
}

function getBookingCalculation() {
  const selectedDome = bookingSuite.value;
  const selectedGuests = Number(guests.value);
  const nights = getStayNights();

  const domeInfo = bookingRates[selectedDome];

  const nightlyRate = domeInfo.rate;
  const accommodationTotal = nightlyRate * nights;

  const additionalGuests = Math.max(0, selectedGuests - 2);

  const additionalGuestCharge =
    additionalGuests *
    ADDITIONAL_GUEST_RATE_PER_NIGHT *
    nights;

  const subtotal = accommodationTotal + additionalGuestCharge;

  const serviceCharge =
    subtotal * SERVICE_CHARGE_PERCENTAGE;

  const grandTotal = subtotal + serviceCharge;

  const perGuestTotal = grandTotal / selectedGuests;

  return {
    selectedDome,
    selectedGuests,
    nights,
    nightlyRate,
    accommodationTotal,
    additionalGuests,
    additionalGuestCharge,
    subtotal,
    serviceCharge,
    grandTotal,
    perGuestTotal,
    initials: domeInfo.initials
  };
}

function updateBookingSummary() {
  const calculation = getBookingCalculation();

  summaryDomeName.textContent = calculation.selectedDome;

  summaryNights.textContent =
    `${calculation.nights} ` +
    `${calculation.nights === 1 ? "night" : "nights"}`;

  summaryGuests.textContent =
    `${calculation.selectedGuests} ` +
    `${calculation.selectedGuests === 1 ? "guest" : "guests"}`;

  summaryRate.textContent =
    `${formatLKR(calculation.nightlyRate)} / night`;

  summaryAccommodationLabel.textContent =
    `Accommodation for ${calculation.nights} ` +
    `${calculation.nights === 1 ? "night" : "nights"}`;

  summaryAccommodation.textContent =
    formatLKR(calculation.accommodationTotal);

  summaryGuestCharge.textContent =
    formatLKR(calculation.additionalGuestCharge);

  summaryServiceCharge.textContent =
    formatLKR(calculation.serviceCharge);

  summaryTotal.textContent =
    formatLKR(calculation.grandTotal);

  summaryPerGuest.textContent =
    `Approximately ${formatLKR(calculation.perGuestTotal)} per guest`;

  summaryTotal.classList.remove("updated");
  void summaryTotal.offsetWidth;
  summaryTotal.classList.add("updated");
}

/* ========================================
   BOOKING INPUT EVENTS
======================================== */

checkIn.addEventListener("change", () => {
  const selectedCheckIn = getSafeDate(checkIn.value);

  const minimumCheckOut = new Date(selectedCheckIn);
  minimumCheckOut.setDate(minimumCheckOut.getDate() + 1);

  checkOut.min = formatInputDate(minimumCheckOut);

  if (
    !checkOut.value ||
    getSafeDate(checkOut.value) <= selectedCheckIn
  ) {
    checkOut.value = formatInputDate(minimumCheckOut);
  }

  updateBookingSummary();
});

checkOut.addEventListener("change", updateBookingSummary);
guests.addEventListener("change", updateBookingSummary);
bookingSuite.addEventListener("change", updateBookingSummary);

updateBookingSummary();

/* ========================================
   BOOKING REFERENCE
======================================== */

function generateBookingReference(domeInitials) {
  const randomNumber = Math.floor(
    1000 + Math.random() * 9000
  );

  return `${randomNumber}-${domeInitials}`;
}

/* ========================================
   BOOKING MODAL
======================================== */

const bookingModalElement = document.getElementById("bookingModal");
const bookingModal = new bootstrap.Modal(bookingModalElement);

const modalReference = document.getElementById("modalReference");
const modalDome = document.getElementById("modalDome");
const modalDates = document.getElementById("modalDates");
const modalNights = document.getElementById("modalNights");
const modalGuests = document.getElementById("modalGuests");
const modalAccommodation = document.getElementById(
  "modalAccommodation"
);
const modalGuestCharge = document.getElementById("modalGuestCharge");
const modalServiceCharge = document.getElementById(
  "modalServiceCharge"
);
const modalTotal = document.getElementById("modalTotal");

let currentBookingReference = "";

function populateBookingModal(calculation) {
  currentBookingReference = generateBookingReference(
    calculation.initials
  );

  modalReference.textContent = currentBookingReference;
  modalDome.textContent = calculation.selectedDome;

  modalDates.textContent =
    `${formatDisplayDate(checkIn.value)} – ` +
    `${formatDisplayDate(checkOut.value)}`;

  modalNights.textContent =
    `${calculation.nights} ` +
    `${calculation.nights === 1 ? "night" : "nights"}`;

  modalGuests.textContent =
    `${calculation.selectedGuests} ` +
    `${calculation.selectedGuests === 1 ? "guest" : "guests"}`;

  modalAccommodation.textContent =
    formatLKR(calculation.accommodationTotal);

  modalGuestCharge.textContent =
    formatLKR(calculation.additionalGuestCharge);

  modalServiceCharge.textContent =
    formatLKR(calculation.serviceCharge);

  modalTotal.textContent =
    formatLKR(calculation.grandTotal);
}

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!bookingForm.checkValidity()) {
    bookingForm.classList.add("was-validated");
    bookingForm.reportValidity();

    showToast(
      "Please complete the booking form before continuing."
    );

    return;
  }

  const calculation = getBookingCalculation();

  populateBookingModal(calculation);
  bookingModal.show();
});

/* ========================================
   COPY REFERENCE
======================================== */

const copyReferenceButton = document.getElementById(
  "copyReferenceButton"
);

copyReferenceButton.addEventListener("click", async () => {
  if (!currentBookingReference) {
    return;
  }

  try {
    await navigator.clipboard.writeText(
      currentBookingReference
    );

    copyReferenceButton.innerHTML =
      '<i class="fa-solid fa-check"></i> Reference copied';

    showToast("Reservation reference copied to clipboard.");

    window.setTimeout(() => {
      copyReferenceButton.innerHTML =
        '<i class="fa-regular fa-copy"></i> Copy reference';
    }, 2200);
  } catch (error) {
    showToast(
      `Your reference is ${currentBookingReference}`
    );
  }
});

/* ========================================
   SAVE REQUEST DEMONSTRATION
======================================== */

const modalReserveButton = document.getElementById(
  "modalReserveButton"
);

modalReserveButton.addEventListener("click", () => {
  showToast(
    `Stay request ${currentBookingReference} has been saved for demonstration.`
  );

  bookingModal.hide();
});

/* ========================================
   TOAST
======================================== */

let toastTimeout;

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(toastTimeout);

  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/* ========================================
   CURRENT YEAR
======================================== */

document.getElementById("year").textContent =
  new Date().getFullYear();
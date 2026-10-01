/* ========================================
   MENU HIGHLIGHTS DATA
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
        name: "Chef’s Special Grilled Mountain Fish",
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

  if (!menu || !menuPanel) return;

  menuPanel.classList.remove("menu-panel");

  void menuPanel.offsetWidth;

  menuPanel.classList.add("menu-panel");

  menuPanel.innerHTML = `
    <div class="mb-5 flex items-start justify-between gap-5">
      <div>
        <p class="text-[10px] font-semibold uppercase tracking-[.22em] text-[#e1ca8a]">
          ${menu.label}
        </p>

        <p class="mt-3 max-w-lg text-sm leading-7 text-white/60">
          ${menu.introduction}
        </p>
      </div>

      <span class="font-display text-3xl italic text-[#e1ca8a]">
        ${String(menu.items.length).padStart(2, "0")}
      </span>
    </div>

    <div>
      ${menu.items
      .map(
        (item) => `
            <article class="menu-item">
              <div class="flex items-start justify-between gap-5">
                <div>
                  <h4 class="menu-item-title">
                    ${item.name}
                  </h4>

                  <p class="menu-item-description mt-2 max-w-xl">
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
    </div>

    <div class="mt-5 flex items-center gap-3 border-t border-[#e1ca8a]/15 pt-5 text-[10px] uppercase tracking-[.16em] text-white/40">
      <span class="h-1.5 w-1.5 rounded-full bg-[#c6a45b]"></span>
      Seasonal availability
    </div>
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
   DOME SUITE DATA
======================================== */

const suites = {
  stargazer: {
    title: "Celestial Stargazer Dome",
    label: "Signature dome",
    price: "From LKR 155,000 / night",
    rate: 155000,
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
    rate: 170500,
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
    price: "From LKR 186,000 / night",
    rate: 186000,
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

function renderSuite(key) {
  const suite = suites[key];

  suiteContent.innerHTML = `
    <div class="image-wrap relative min-h-[390px] overflow-hidden rounded-[2rem] border border-[#e1ca8a]/20 sm:min-h-[520px] sm:rounded-[2.75rem]">
      <img
        class="image-zoom absolute inset-0 h-full w-full object-cover"
        src="${suite.image}"
        alt="${suite.title}"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-[#07110d]/85 via-[#07110d]/15 to-transparent"></div>

      <div class="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-4">
        <div>
          <p class="text-[10px] uppercase tracking-[.2em] text-[#e1ca8a]">
            ${suite.label}
          </p>

          <h3 class="mt-2 font-display text-4xl leading-none text-white sm:text-5xl">
            ${suite.title}
          </h3>
        </div>

        <span class="hidden rounded-full border border-white/20 bg-black/20 px-3 py-2 text-[9px] uppercase tracking-[.15em] text-white backdrop-blur-md sm:block">
          Private stay
        </span>
      </div>
    </div>

    <div class="glass-dark flex flex-col rounded-[2rem] p-7 sm:p-9">
      <p class="text-[10px] font-semibold uppercase tracking-[.22em] text-[#e1ca8a]">
        The details
      </p>

      <p class="mt-5 text-sm leading-8 text-white/70">
        ${suite.description}
      </p>

      <div class="mt-7">
        ${suite.facts
      .map(
        (fact) => `
              <div class="feature-line flex items-center gap-3 py-3.5 text-sm text-white/80">
                <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c6a45b]"></span>
                ${fact}
              </div>
            `
      )
      .join("")}
      </div>

      <div class="mt-auto pt-8">
        <p class="text-[10px] uppercase tracking-[.16em] text-white/45">
          Indicative stay rate
        </p>

        <p class="mt-1 font-display text-3xl text-[#e1ca8a]">
          ${suite.price}
        </p>

        <button
          class="button-gold mt-6 w-full px-5 py-3.5"
          type="button"
          onclick="selectSuite('${suite.title}')"
        >
          <span>Choose this dome</span>
        </button>
      </div>
    </div>
  `;
}

document.querySelectorAll("[data-suite]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-suite]").forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    renderSuite(button.dataset.suite);
  });
});

renderSuite("stargazer");

/* ========================================
   BOOKING DOME RATES
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
    rate: 186000,
    initials: "HHD"
  }
};

/*
  Two guests are included in the base dome price.
  Every guest after the first two is charged per night.
*/
const ADDITIONAL_GUEST_RATE_PER_NIGHT = 18000;

/*
  Service charge is a demonstration fee.
  Change this number if needed.
*/
const SERVICE_CHARGE_PERCENTAGE = 0.1;

/* ========================================
   MOBILE MENU
======================================== */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const menuOpenIcon = document.getElementById("menuOpenIcon");
const menuCloseIcon = document.getElementById("menuCloseIcon");

menuButton.addEventListener("click", () => {
  const open = !mobileMenu.classList.contains("hidden");

  mobileMenu.classList.toggle("hidden", open);
  menuOpenIcon.classList.toggle("hidden", !open);
  menuCloseIcon.classList.toggle("hidden", open);

  menuButton.setAttribute("aria-expanded", String(!open));
  document.body.classList.toggle("menu-open", !open);
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.click();
  });
});

/* ========================================
   SCROLL REVEAL
======================================== */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

/* ========================================
   BOOKING FORM ELEMENTS
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
const summaryGuestCharge = document.getElementById("summaryGuestCharge");
const summaryServiceCharge = document.getElementById(
  "summaryServiceCharge"
);
const summaryTotal = document.getElementById("summaryTotal");
const summaryPerGuest = document.getElementById("summaryPerGuest");

/* ========================================
   DATE HELPERS
======================================== */

function formatInputDate(date) {
  return date.toISOString().split("T")[0];
}

function getSafeDate(dateValue) {
  return new Date(`${dateValue}T00:00:00`);
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
  return `LKR ${Math.round(amount).toLocaleString("en-LK")}`;
}

function setDefaultBookingDates() {
  const inDate = new Date(today);
  inDate.setDate(today.getDate() + 14);

  const outDate = new Date(inDate);
  outDate.setDate(inDate.getDate() + 2);

  checkIn.min = formatInputDate(today);
  checkOut.min = formatInputDate(today);

  checkIn.value = formatInputDate(inDate);
  checkOut.value = formatInputDate(outDate);
}

setDefaultBookingDates();

/* ========================================
   STAY PRICE CALCULATOR
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
    additionalGuests * ADDITIONAL_GUEST_RATE_PER_NIGHT * nights;

  const subtotal = accommodationTotal + additionalGuestCharge;

  const serviceCharge = subtotal * SERVICE_CHARGE_PERCENTAGE;

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

  summaryNights.textContent = `${calculation.nights} night${calculation.nights > 1 ? "s" : ""
    }`;

  summaryGuests.textContent = `${calculation.selectedGuests} guest${calculation.selectedGuests > 1 ? "s" : ""
    }`;

  summaryRate.textContent = `${formatLKR(
    calculation.nightlyRate
  )} / night`;

  summaryAccommodationLabel.textContent = `Accommodation (${calculation.nights} night${calculation.nights > 1 ? "s" : ""
    })`;

  summaryAccommodation.textContent = formatLKR(
    calculation.accommodationTotal
  );

  summaryGuestCharge.textContent = formatLKR(
    calculation.additionalGuestCharge
  );

  summaryServiceCharge.textContent = formatLKR(
    calculation.serviceCharge
  );

  summaryTotal.textContent = formatLKR(calculation.grandTotal);

  summaryPerGuest.textContent = `Approximately ${formatLKR(
    calculation.perGuestTotal
  )} per guest`;

  summaryTotal.classList.remove("updated");

  void summaryTotal.offsetWidth;

  summaryTotal.classList.add("updated");
}

/* Update check-out date when check-in changes */
checkIn.addEventListener("change", () => {
  const selectedCheckIn = getSafeDate(checkIn.value);

  selectedCheckIn.setDate(selectedCheckIn.getDate() + 1);

  checkOut.min = formatInputDate(selectedCheckIn);

  if (
    !checkOut.value ||
    getSafeDate(checkOut.value) <= getSafeDate(checkIn.value)
  ) {
    checkOut.value = formatInputDate(selectedCheckIn);
  }

  updateBookingSummary();
});

checkOut.addEventListener("change", updateBookingSummary);
guests.addEventListener("change", updateBookingSummary);
bookingSuite.addEventListener("change", updateBookingSummary);

/* Initial estimate */
updateBookingSummary();

/* ========================================
   CHOOSE A DOME FROM DOMES SECTION
======================================== */

function selectSuite(name) {
  bookingSuite.value = name;

  updateBookingSummary();

  document.getElementById("booking").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  showToast(`${name} selected for your stay estimate.`);
}

/* ========================================
   BOOKING REFERENCE GENERATOR
======================================== */

function generateBookingReference(domeInitials) {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);

  return `${randomNumber}-${domeInitials}`;
}

/* ========================================
   BOOKING MODAL
======================================== */

const bookingModal = new bootstrap.Modal(
  document.getElementById("bookingModal")
);

const modalReference = document.getElementById("modalReference");
const modalDome = document.getElementById("modalDome");
const modalDates = document.getElementById("modalDates");
const modalNights = document.getElementById("modalNights");
const modalGuests = document.getElementById("modalGuests");
const modalAccommodation = document.getElementById("modalAccommodation");
const modalGuestCharge = document.getElementById("modalGuestCharge");
const modalServiceCharge = document.getElementById("modalServiceCharge");
const modalTotal = document.getElementById("modalTotal");

let currentBookingReference = "";

function populateBookingModal(calculation) {
  currentBookingReference = generateBookingReference(calculation.initials);

  modalReference.textContent = currentBookingReference;

  modalDome.textContent = calculation.selectedDome;

  modalDates.textContent = `${formatDisplayDate(
    checkIn.value
  )} – ${formatDisplayDate(checkOut.value)}`;

  modalNights.textContent = `${calculation.nights} night${calculation.nights > 1 ? "s" : ""
    }`;

  modalGuests.textContent = `${calculation.selectedGuests} guest${calculation.selectedGuests > 1 ? "s" : ""
    }`;

  modalAccommodation.textContent = formatLKR(
    calculation.accommodationTotal
  );

  modalGuestCharge.textContent = formatLKR(
    calculation.additionalGuestCharge
  );

  modalServiceCharge.textContent = formatLKR(
    calculation.serviceCharge
  );

  modalTotal.textContent = formatLKR(calculation.grandTotal);
}

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email");

  if (!bookingForm.checkValidity()) {
    bookingForm.classList.add("was-validated");
    email.focus();
    showToast("Please enter a valid email address to continue.");
    return;
  }

  const calculation = getBookingCalculation();

  populateBookingModal(calculation);

  bookingModal.show();
});

/* ========================================
   COPY BOOKING REFERENCE
======================================== */

const copyReferenceButton = document.getElementById("copyReferenceButton");

copyReferenceButton.addEventListener("click", async () => {
  if (!currentBookingReference) {
    return;
  }

  try {
    await navigator.clipboard.writeText(currentBookingReference);

    copyReferenceButton.innerHTML = `
      <i class="fa-solid fa-check"></i>
      Reference copied
    `;

    showToast("Reservation reference copied to clipboard.");

    setTimeout(() => {
      copyReferenceButton.innerHTML = `
        <i class="fa-regular fa-copy"></i>
        Copy reference
      `;
    }, 2200);
  } catch (error) {
    showToast(`Your reference: ${currentBookingReference}`);
  }
});

/* ========================================
   SAVE REQUEST DEMO BUTTON
======================================== */

document
  .getElementById("modalReserveButton")
  .addEventListener("click", () => {
    showToast(
      `Stay request ${currentBookingReference} has been saved for demonstration.`
    );

    bookingModal.hide();
  });

/* ========================================
   TOAST MESSAGE
======================================== */

let toastTimeout;

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/* ========================================
   CURRENT YEAR
======================================== */

document.getElementById("year").textContent = new Date().getFullYear();
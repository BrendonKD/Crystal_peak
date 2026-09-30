/* =========================
       MENU HIGHLIGHTS DATA
    ========================== */
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

      /* Restarts menu panel reveal animation */
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

    /* =========================
       DOME SUITE DATA
    ========================== */
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
        price: "From LKR 186,000 / night",
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
              <span>↗</span>
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

    function selectSuite(name) {
      document.getElementById("bookingSuite").value = name;
      document.getElementById("booking").scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      showToast(name + " selected for your stay request.");
    }

    /* =========================
       MOBILE MENU
    ========================== */
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

    /* =========================
       SCROLL REVEAL
    ========================== */
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

    /* =========================
       BOOKING FORM
    ========================== */
    const today = new Date();

    const formatDate = (date) => {
      return date.toISOString().split("T")[0];
    };

    const inDate = new Date(today);
    inDate.setDate(today.getDate() + 14);

    const outDate = new Date(inDate);
    outDate.setDate(inDate.getDate() + 2);

    const checkIn = document.getElementById("checkIn");
    const checkOut = document.getElementById("checkOut");

    checkIn.min = formatDate(today);
    checkOut.min = formatDate(today);

    checkIn.value = formatDate(inDate);
    checkOut.value = formatDate(outDate);

    checkIn.addEventListener("change", () => {
      const selected = new Date(checkIn.value);

      selected.setDate(selected.getDate() + 1);

      checkOut.min = formatDate(selected);

      if (
        !checkOut.value ||
        new Date(checkOut.value) <= new Date(checkIn.value)
      ) {
        checkOut.value = formatDate(selected);
      }
    });

    const bookingModal = new bootstrap.Modal(
      document.getElementById("bookingModal")
    );

    document
      .getElementById("bookingForm")
      .addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email");

        if (!event.currentTarget.checkValidity()) {
          event.currentTarget.classList.add("was-validated");
          email.focus();
          return;
        }

        const suite = document.getElementById("bookingSuite").value;

        const start = new Date(checkIn.value + "T00:00:00");
        const end = new Date(checkOut.value + "T00:00:00");

        const nights = Math.max(
          1,
          Math.round((end - start) / 86400000)
        );

        document.getElementById("bookingModalText").textContent =
          `We have prepared a demonstration request for ${nights} night${
            nights > 1 ? "s" : ""
          } in the ${suite}. In a live system, this is where availability and payment confirmation would continue.`;

        bookingModal.show();
      });

    /* =========================
       TOAST MESSAGE
    ========================== */
    let toastTimeout;

    function showToast(message) {
      const toast = document.getElementById("toast");

      toast.textContent = message;
      toast.classList.add("show");

      clearTimeout(toastTimeout);

      toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
      }, 3200);
    }

    document.getElementById("year").textContent = new Date().getFullYear();
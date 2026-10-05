# Crystal Peak

A responsive luxury hospitality landing page and interactive stay-estimation experience for **Crystal Peak**, a conceptual eco-luxury dome retreat inspired by Pattipola, Sri Lanka.

The project presents a premium accommodation website with dome stay options, restaurant highlights, experiences, an interactive booking estimator, and a reservation-request demonstration flow.

---

## Preview

Crystal Peak Igloos is designed as a modern hospitality website focused on:

- Luxury dome accommodation experiences
- Highland and nature-inspired visual design
- Interactive stay pricing estimates
- Responsive mobile and desktop layouts
- Booking request simulation
- Restaurant menu highlights
- Guest and service-charge calculations

> This is a front-end concept project. Booking availability, payments, emails, and reservation storage are currently simulated in the browser.

---

## Features

### Luxury hospitality interface

- Dark forest-inspired colour palette
- Gold accents and glassmorphism design
- Responsive hero section
- Animated mist and glow effects
- Smooth scrolling navigation
- Reveal animations on scroll
- Premium typography using display and body font combinations

### Dome stay selection

Users can explore three conceptual dome accommodation options:

- Celestial Stargazer Dome
- Misty Valley Dome
- Highland Horizon Dome

Each dome includes:

- Dome image
- Stay description
- Key features
- Indicative per-night price
- “Choose this dome” action

### Restaurant menu section

The site includes an interactive menu highlights section with categories:

- Starters
- Mains
- Desserts

Menu content updates dynamically using JavaScript without reloading the page.

### Booking calculator

The booking section allows users to select:

- Check-in date
- Check-out date
- Number of guests
- Preferred dome
- Email address

The stay estimate updates automatically and calculates:

- Number of nights
- Dome accommodation cost
- Additional guest charge
- Service charge
- Estimated total cost
- Approximate per-guest cost

### Reservation request demonstration

When a valid email address is submitted:

- A booking summary modal is displayed
- A reservation reference is generated
- The user can copy the reservation reference
- A demo “Save request” action is shown
- Toast messages provide user feedback

### Responsive design

The interface is optimized for:

- Desktop screens
- Tablets
- Mobile phones
- Small mobile devices

Mobile-specific styles prevent booking summary text, prices, and buttons from overflowing smaller screens.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic content |
| CSS3 | Styling, responsive layout, animations, glass effects |
| JavaScript | Dynamic content, booking calculator, modal behaviour |
| Bootstrap | Modal functionality and responsive utilities |
| Tailwind CSS | Utility-based layout and spacing classes |
| Font Awesome | Icons used across the interface |
| Google Fonts | Typography using Manrope and Cormorant Garamond |

---

## Project Structure

```text
CrystalPeak/
│
├── index.html
├── index.css
├── index.js
│
├── assets/
│   ├── dome-resort.jpeg
│   ├── misty-valley.jpeg
│   ├── Highland-Horizon.jpeg
│   └── ...
│
└── README.md
```

### Main files

| File | Description |
|---|---|
| `index.html` | Main page structure, sections, booking form, modal, and footer |
| `index.css` | Custom styles, responsive behaviour, animations, booking card styling |
| `index.js` | Interactive menu, dome selection, booking calculator, modal, toast messages |
| `assets/` | Project images used for the hero, dome stays, restaurant, and experiences |

---


### Using VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

The website should open automatically in your browser.

---

## Booking Price Logic

The booking calculator uses the following price structure.

### Dome rates

| Dome | Rate per Night |
|---|---:|
| Celestial Stargazer Dome | LKR 155,000 |
| Misty Valley Dome | LKR 170,500 |
| Highland Horizon Dome | LKR 165,000 |

### Additional guest policy

- The base dome rate includes **2 guests**.
- Each guest above 2 guests is charged per night.
- Additional guest rate: **LKR 18,000 per guest per night**.

### Service charge

- Service charge: **10%**
- The service charge is calculated from the accommodation total and additional guest charge.

### Calculation formula

```text
Accommodation Total = Nightly Rate × Number of Nights

Additional Guest Charge =
(Number of Guests - 2) × Additional Guest Rate × Number of Nights

Subtotal =
Accommodation Total + Additional Guest Charge

Service Charge =
Subtotal × 10%

Estimated Total =
Subtotal + Service Charge
```

### Example

For 2 guests staying 2 nights in the Celestial Stargazer Dome:

```text
Accommodation:
LKR 155,000 × 2 nights = LKR 310,000

Additional Guests:
LKR 0

Service Charge:
LKR 310,000 × 10% = LKR 31,000

Estimated Total:
LKR 341,000
```

---

## Configuration

The booking rates and charges can be changed in `index.js`.

```javascript
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
```

To change a dome price, update its `rate` value.

```javascript
rate: 155000
```

To change the additional guest fee:

```javascript
const ADDITIONAL_GUEST_RATE_PER_NIGHT = 18000;
```

To change the service charge percentage:

```javascript
const SERVICE_CHARGE_PERCENTAGE = 0.1;
```

For example, for a 12% service charge:

```javascript
const SERVICE_CHARGE_PERCENTAGE = 0.12;
```

---

##

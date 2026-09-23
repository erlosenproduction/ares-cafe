/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "Ares Cafe",
    suffix: ".",
    tagline: "Cozy Ambiance & Artisanal Eats",
    description: "Ares Cafe on Sindhubhavan Marg, Ahmedabad offering artisanal pizzas, thick shakes, frappes, mocktails, and delicious snacks in a calm, cozy atmosphere.",
    keywords: "Ares Cafe, Sindhubhavan Marg cafe, Ahmedabad cafe, pizza, shakes, mocktails, frappes, outdoor seating",
    themeColor: "#0d0e12",
    domain: "https://www.instagram.com/ares_cafe_sindhubhavan",
    ogImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmOICjjFGxJ4hTvRy39a_n5ttcab5ZPVoSCB1XGiuq3nuBpks9PZXaFe-UOrr6QIKJQK4NBbnmvyDfdjoEZLyigm54WmKhIK2lC0KQVOtmQbOYYs7AKi05PzGZFa7s4HB7nEcfk6KirG2tEF=w326-h312-n-k-no",
    faviconEmoji: "🍕",
    whatsappNumber: "917984843172"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d0e12",
      bgCard: "#15181e",
      bgLight: "#1c2028",
      primary: "#d4a373",
      primaryHover: "#faedcd",
      text: "#e0e2ec",
      textMuted: "#9aa0b4",
      accent: "#2c313c"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Welcome to Ares Cafe",
    title: "Unwind with Great Food & Cozy Vibes",
    description: "Experience our delicious artisanal pizzas, hand-crafted shakes, refreshing mocktails, and a perfect mix of indoor & outdoor seating.",
    bgImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmOICjjFGxJ4hTvRy39a_n5ttcab5ZPVoSCB1XGiuq3nuBpks9PZXaFe-UOrr6QIKJQK4NBbnmvyDfdjoEZLyigm54WmKhIK2lC0KQVOtmQbOYYs7AKi05PzGZFa7s4HB7nEcfk6KirG2tEF=w326-h312-n-k-no",
    stats: [
      { value: "4:00 PM", label: "Open Till 1:00 AM Daily" },
      { value: "100%", label: "Vegetarian Delights" },
      { value: "4.8 ★", label: "Guest Satisfaction" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "A Cozy Haven on Sindhubhavan Road",
    paragraphs: [
      "Located at Sindhubhavan Marg, Thaltej, Ares Cafe offers a calm, relaxing atmosphere with a nice blend of indoor and outdoor seating. Whether you're dropping in for a late-night craving, catching up with friends, or having a solo work session, we've got you covered.",
      "From satisfying portion sizes to delicious wood-fired-style pizzas, creamy frappes, and refreshing mocktails, we deliver memorable moments and great food every day."
    ],
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn2pM0eHwHqlM8rXnSLtb4UWHbna_H-VGBFEmQTc3cuGO7PQ6DzeJV-GMJyEVCUJmZWgmQiE6mdZn98heztXDEEEGE9PpWGWCM-XqVTMJUtKwviZ5TeTqNMl53W-CVYhosi1Ylu2LPGZl0=s680-w680-h510-rw",
    imageAlt: "Ares Cafe cozy ambiance and seating",
    experienceValue: "Late Night",
    experienceLabel: "Vibes & Comfort"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Chef's Recommendations",
    title: "Popular Specials",
    badge: "Must Try",
    description: "Hand-picked customer favorites to kickstart your night at Ares Cafe.",
    items: [
      {
        badge: "Bestseller",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        alt: "Tandoori Paneer Pizza",
        diet: "veg",
        title: "Tandoori Paneer Pizza",
        price: "₹290",
        desc: "Loaded with marinated tandoori paneer, crisp capsicum, onions, and rich mozzarella cheese."
      },
      {
        badge: "Customer Favorite",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600",
        alt: "Nutella Shake",
        diet: "veg",
        title: "Nutella Shake",
        price: "₹220",
        desc: "Rich, creamy shake blended with generous portions of original Nutella spread."
      },
      {
        badge: "Refreshing",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
        alt: "Blue Lagoon Mocktail",
        diet: "veg",
        title: "Blue Lagoon",
        price: "₹140",
        desc: "A vibrant blue citrus beverage infused with mint, lemon, and sparkling soda."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Special Deals",
    title: "Current Offers",
    items: [
      {
        tag: "EVENING HANGOUT",
        title: "Pizza & Drink Combo",
        desc: "Enjoy any gourmet pizza with a choice of Ice Tea or Mocktail at special prices.",
        code: "ARESCOMBO",
        highlight: false
      },
      {
        tag: "LATE NIGHT SPECIAL",
        title: "Flat 10% OFF on Zomato",
        desc: "Order online via Zomato for late-night cravings and enjoy flat discounts.",
        code: "ZOMATO10",
        highlight: true
      },
      {
        tag: "FRIENDS CORNER",
        title: "Buy 2 Shakes Get 1 Free",
        desc: "Available for dine-in groups on selected classic milkshake variants.",
        code: "SHAKE3",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Explore Our Menu",
    title: "Freshly Prepared Delights",
    pdfUrl: "assets/ares-cafe-menu.pdf",
    pdfFilename: "Ares_Cafe_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "pizza", label: "Pizzas", active: false },
      { id: "shakes", label: "Shakes & Frappes", active: false },
      { id: "mocktails", label: "Mocktails & Drinks", active: false }
    ],
    items: [
      // PIZZAS
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600",
        title: "Margherita Pizza",
        price: "₹190",
        diet: "veg",
        desc: "Classic tomato sauce topped with melted mozzarella cheese and oregano[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ahmedabad/ares-cafe-bodakdev"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        title: "Tandoori Paneer Pizza",
        price: "₹290",
        diet: "veg",
        desc: "Paneer coated in spiced tandoori marinade with capsicum and melted cheese[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ahmedabad/ares-cafe-bodakdev"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600",
        title: "Pesto Cottage Cheese Pizza",
        price: "₹290",
        diet: "veg",
        desc: "Rich basil pesto base topped with seasoned cottage cheese and herbs[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ahmedabad/ares-cafe-bodakdev"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
        title: "Ares S. P. Pizza",
        price: "₹300",
        diet: "veg",
        desc: "House special pizza loaded with signature toppings and secret spices[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ahmedabad/ares-cafe-bodakdev"
      },
      // SHAKES & FRAPPES
      {
        category: "shakes",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600",
        title: "Kit-Kat Shake",
        price: "₹210",
        diet: "veg",
        desc: "Thick milk shake blended with crispy Kit-Kat bars and chocolate drizzle[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ahmedabad/ares-cafe-bodakdev"
      },
      {
        category: "shakes",
        img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600",
        title: "Ferrero Rocher Shake",
        price: "₹230",
        diet: "veg",
        desc: "Indulgent shake prepared with hazelnut chocolate Ferrero Rocher[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ahmedabad/ares-cafe-bodakdev"
      },
      {
        category: "shakes",
        img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
        title: "Coffee Frappe",
        price: "₹190",
        diet: "veg",
        desc: "Chilled blended espresso coffee served with whipped topping[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ahmedabad/ares-cafe-bodakdev"
      },
      {
        category: "shakes",
        img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&q=80&w=600",
        title: "Chocolate Brownie Frappe",
        price: "₹240",
        diet: "veg",
        desc: "Cold coffee blended with soft chocolate brownie chunks[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ahmedabad/ares-cafe-bodakdev"
      },
      // MOCKTAILS & DRINKS
      {
        category: "mocktails",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
        title: "Mint Mojito",
        price: "₹140",
        diet: "veg",
        desc: "Refreshing lime, fresh mint leaves, and soda served over crushed ice[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ahmedabad/ares-cafe-bodakdev"
      },
      {
        category: "mocktails",
        img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600",
        title: "Pina Colada Mocktail",
        price: "₹170",
        diet: "veg",
        desc: "Tropical mix of creamy coconut milk and sweet pineapple juice[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ahmedabad/ares-cafe-bodakdev"
      },
      {
        category: "mocktails",
        img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600",
        title: "Peach Ice Tea",
        price: "₹130",
        diet: "veg",
        desc: "Chilled brewed black tea infused with sweet peach flavor[cite: 1].",
        swiggyUrl: "https://www.swiggy.com",
        zomatoUrl: "https://www.zomato.com/ahmedabad/ares-cafe-bodakdev"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Customer Reviews",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"A cozy café with a calm and relaxing atmosphere. The staff were polite and welcoming, which made the experience even better. The portion sizes were satisfying and worth it. We ordered a cappuccino, peri peri French fries, and a tandoori paneer pizza — all of which were delicious and well-prepared. Definitely a nice spot to unwind and enjoy good food.\"[cite: 2]",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
        name: "Rajeshwari Sinha Debnath",
        role: "Local Guide"
      },
      {
        stars: 5,
        text: "\"I recently visited Ares Cafe on Sindhubhavan Marg, Ahmedabad. From the moment I arrived, I was impressed with the overall vibe. The café offers a nice mix of indoor and outdoor seating, giving it a comfortable, relaxed atmosphere — ideal for catch-ups with friends or even a solo work session.\"[cite: 3]",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        name: "Henit Darji",
        role: "Local Guide"
      },
      {
        stars: 5,
        text: "\"I liked the ambiance, it's quite cosey. The food presentation is good, but they can still improve it. Pasta and Nachos are must try dish. Panini could have been done better. Overall it's a nice place.\"[cite: 4]",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Meghal Dave",
        role: "Local Guide"
      }
    ],
    googleCta: {
      title: "Loved your time at Ares Cafe?",
      desc: "Help others discover us on Sindhubhavan Road by sharing your experience on Google Maps!",
      url: "https://maps.google.com/?q=Ares+Cafe+Sindhubhavan+Marg+Ahmedabad"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Gallery",
    title: "Moments at Ares Cafe",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkksW4Gd4zSsAtl8-N9hxla9RC9nskce7BoGD8Mk9K6e7qaxckypnD_IJng6tuD7mpr3FcrQ4ALhZyPqkJ4Gq9h9xeDqSktQ9Pv0-GBqv4pdpRpaHlbrQbgs-uO1xS8WXeLlJqtmfatGnhA=s680-w680-h510-rw", alt: "Ares Cafe Seating View 1" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlpuJ4g3dGAflb8x0-Q08i6qF7X_RZ0tNWhG56Uj5uhryaZ_rSdz84gdhTlwW5G9KbzCZhV-Cvj2LGX6lBhD-prqEMMKxWkHt_d67bBk5i-Fn-oZ0I9H329sD4Nz7pDb55Xl2h3TOPJqmbR=s680-w680-h510-rw", alt: "Ares Cafe Ambiance View 2" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk5cvv3FOgQuwSFsARjRIQsfP4fTp00d-nGBVpA5AYqVOX2UmnkVDeVN6JK-miGGSDX-a9VNOiLKj5w63KWUmqY4g157XqJIqmE_mfAeD-N0vIGdEd2VjTW5QAEjkguTr0nL3WQzg=w141-h177-n-k-no-nu", alt: "Ares Cafe Outdoor Corner" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRa0ghdH5xZdkfEs_FGFXHmlo0jKDwGBcQ7pOuJBAZzoxsfPNoL9rasydYhBKUkl3wAETweIswHJ9K5BUKc8SGYYn6QB2HvNa4pwTb8PxcJ-jp5frmMjjIWJAamzcVL1vVKFwh=w141-h177-n-k-no-nu", alt: "Ares Cafe Indoor Space" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Location & Hours",
    title: "Visit Ares Cafe",
    description: "Located right on Sindhubhavan Marg, perfect for late evening hangs, delicious dinners, and late-night drinks with friends.",
    address: "Sindhubhavan Marg, PRL Colony, Thaltej, Ahmedabad, Gujarat 380058",
    hours: [
      "Monday - Sunday: 4:00 PM - 1:00 AM"
    ],
    email: "contact@arescafe.in",
    phone: "+91 79848 43172",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.691781216335!2d72.5028!3d23.0351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzA2LjQiTiA3MsKwMzAnMTAuMSJF!5e0!3m2!1sen!2sin!4v1614134823123!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Serving satisfying food, delicious coffee, artisanal pizzas, and rich shakes in a cozy, relaxed setting.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/ares_cafe_sindhubhavan?stkn=MTQ0eGF4ZGI4YjExNg==", iconClass: "ph-instagram-logo" },
      { platform: "zomato", url: "https://www.zomato.com/ahmedabad/ares-cafe-bodakdev?amp=1", iconClass: "ph-fork-knife" }
    ],
    copyright: "© 2026 Ares Cafe. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Ares_Cafe_Guest",
    password: "arescafe@2026"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);

const root = document.documentElement;
const panels = [...document.querySelectorAll(".panel")];
const frame = document.querySelector(".frame");
const navButtons = [...document.querySelectorAll(".frame__nav-button")];
const localeButtons = [...document.querySelectorAll(".frame__locale-button")];
const progressButton = document.getElementById("progressButton");
const progressLabel = document.getElementById("progressLabel");
const progressFill = document.querySelector(".frame__bar-fill");
const inkCanvas = document.querySelector(".ink-canvas");
const pageTitle = document.getElementById("pageTitle");
const pageDescription = document.getElementById("pageDescription");
const translatableNodes = [...document.querySelectorAll("[data-i18n]")];
const ariaNodes = [...document.querySelectorAll("[data-i18n-aria-label]")];
const breakLogo = document.getElementById("breakLogo");
const calendarButton = document.getElementById("calendarButton");
const practiceCanvas = document.getElementById("practiceCanvas");
const practiceClearButton = document.getElementById("practiceClear");
const calendarSheet = document.getElementById("calendarSheet");
const calendarSheetClose = document.getElementById("calendarSheetClose");
const calendarApple = document.getElementById("calendarApple");
const calendarGoogle = document.getElementById("calendarGoogle");
const calendarOutlook = document.getElementById("calendarOutlook");
const tickerTrack = document.querySelector(".ticker__track");
const photoButtons = [...document.querySelectorAll(".photo-card__button")];
const lightbox = document.getElementById("lightbox");
const lightboxCloseButton = document.getElementById("lightboxClose");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const mapFrame = document.getElementById("mapFrame");
const mapOpenLink = document.getElementById("mapOpenLink");
const mapRouteLink = document.getElementById("mapRouteLink");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const appConfig = window.EVENT_CONFIG || {};

const practicePalette = ["#d86e53", "#e0b15f", "#7d9b7b", "#567e88", "#b27482"];

const translations = {
  de: {
    "meta.title": "Tshela's Birthday - Shisha & Paint Night",
    "meta.description":
      "Stylischer Event-Flyer fuer Tshela's Birthday, BREAK Paint Concept und die feinSTAUB Lounge in Stuttgart.",
    "nav.hero": "Auftakt",
    "nav.schedule": "Ablauf",
    "nav.location": "Lounge",
    "nav.details": "Flyer",
    "progress.label": "durch die Nacht scrollen",
    "progress.complete": "wieder nach oben",
    "hero.eyebrow": "11.04 • Stuttgart • Shisha & Paint",
    "hero.metaLine": "Tshela x BREAK x feinSTAUB Lounge",
    "hero.titleTop": "Tshela's Birthday",
    "hero.titlePrefix": "Shisha & Paint",
    "hero.titleNight": "Night",
    "hero.titleBottom": "Shisha & Paint Night",
    "hero.brandLead": "mit",
    "hero.lede":
      "Eine Geburtstagsnacht, die gleichzeitig Kunstabend, Afro-Music-Night und Lounge-Treffen ist. BREAK bringt das Painting-Konzept, feinSTAUB die Bar-Atmosphaere, und nach Mitternacht geht die Party weiter.",
    "hero.tagOne": "Birthday Celebration",
    "hero.tagTwo": "BREAK Paint Concept",
    "hero.tagThree": "feinSTAUB Lounge",
    "hero.tagFour": "Afrobeats / Afrohouse",
    "hero.calendarButton": "In Kalender speichern",
    "calendar.eyebrow": "Kalender",
    "calendar.title": "Zu welchem Kalender moechtest du hinzufuegen?",
    "calendar.apple": "Apple Kalender",
    "calendar.google": "Google Kalender",
    "calendar.outlook": "Outlook",
    "hero.cardLabel": "Event Snapshot",
    "hero.cardDateLabel": "DATUM",
    "hero.cardDateValue": "11.04",
    "hero.cardTimeLabel": "PAINT SESSION",
    "hero.cardTimeValue": "21:00 - 00:00",
    "hero.cardPlaceLabel": "LOCATION",
    "hero.cardPlaceValue": "feinSTAUB Lounge, Stuttgart",
    "hero.cardMusicLabel": "MUSIK",
    "hero.cardMusicValue": "Afrobeats / Afrohouse",
    "hero.practiceEyebrow": "Warm-up",
    "hero.practiceTitle": "Vor der Party schon mal zeichnen.",
    "hero.practiceBody":
      "Kleine Kritzelei vorab. Einfach direkt hier malen, bevor die echte Paint Session startet.",
    "hero.practiceClear": "Flaeche leeren",
    "ticker.one": "BREAK",
    "ticker.two": "PAINT",
    "ticker.three": "SHISHA",
    "ticker.four": "AFROBEATS",
    "ticker.five": "LOUNGE",
    "ticker.six": "BIRTHDAY",
    "schedule.eyebrow": "Ablauf der Nacht",
    "schedule.heading":
      "Kunst zuerst, Drinks und Shisha danach, Musik die alles zusammenhaelt.",
    "schedule.cardOneTitle": "Paint Session",
    "schedule.cardOneTime": "21:00 - 00:00",
    "schedule.cardOneBody":
      "Es wird mit Acrylfarben und verschiedenen Materialien wie Pinseln, Tupfern, Schwämmen und Kreppband gemalt.",
    "schedule.cardTwoTitle": "Materialien",
    "schedule.materialOne": "Pinsel",
    "schedule.materialTwo": "Schwämme",
    "schedule.materialThree": "Tupfer",
    "schedule.materialFour": "Kreppband",
    "schedule.materialFive": "Schürzen",
    "schedule.cardThreeTitle": "Materialbeitrag",
    "schedule.cardThreePrice": "9€ pro Person",
    "schedule.cardThreeBody":
      "Inklusive bedrucktem Jutebeutel zum Bemalen, den jede Person mit nach Hause nehmen kann.",
    "schedule.cardFourTitle": "Nach 00:00",
    "schedule.cardFourBody":
      "Die Malecke endet, aber die Party geht in der Bar weiter - mit Musik, Drinks und Shisha bis spaeter in die Nacht.",
    "schedule.cardFourNote":
      "Getränke und Shisha werden direkt an der Bar bestellt und von jedem Gast selbst bezahlt.",
    "schedule.quote": "Art Event x Afro Music Night x Birthday Celebration",
    "location.eyebrow": "feinSTAUB Lounge",
    "location.heading":
      "Die Lounge ist nicht nur Treffpunkt, sondern Teil der Inszenierung.",
    "location.blockLabel": "Location",
    "location.name": "feinSTAUB Lounge",
    "location.addressLineOne": "Rotenwaldstraße 114",
    "location.addressLineTwo": "70197 Stuttgart",
    "location.musicLabel": "Musik",
    "location.musicValue": "Afrobeats / Afrohouse",
    "location.selfPay":
      "Getränke und Shisha werden direkt vor Ort bestellt und von jedem Gast selbst bezahlt.",
    "location.noteLabel": "Hinweis",
    "location.noteBody":
      "Tippe auf die Karte oder nutze die Buttons, um den Ort direkt in Google Maps zu oeffnen oder die Route zu starten.",
    "location.mapOpen": "In Google Maps oeffnen",
    "location.mapRoute": "Route starten",
    "details.eyebrow": "Flyertext",
    "details.heading":
      "Der finale Content ist jetzt in einer druckbaren Posterkarte gebuendelt.",
    "details.posterLabel": "TITLE",
    "details.titleTop": "Tshela's Birthday",
    "details.titleBottom": "Shisha & Paint Night",
    "details.metaDate": "📅 11.04",
    "details.metaTime": "🕘 Paint Session: 21:00 - 00:00",
    "details.metaMusic": "🎶 Afrobeats / Afrohouse",
    "details.paintLabel": "🎨 Malecke",
    "details.paintBody":
      "Es wird mit Acrylfarben und verschiedenen Materialien wie Pinseln, Tupfern, Schwämmen und Kreppband gemalt.",
    "details.priceBody": "Materialbeitrag: 9€ pro Person",
    "details.priceSub": "(Inklusive bedrucktem Jutebeutel zum Bemalen)",
    "details.apronBody":
      "Schürzen werden gestellt, um Kleidung vor Farbspritzern zu schuetzen.",
    "details.locationLabel": "📍 Location",
    "details.locationName": "feinSTAUB Lounge",
    "details.locationStreet": "Rotenwaldstraße 114",
    "details.locationCity": "70197 Stuttgart",
    "details.noteLabel": "Hinweis",
    "details.noteBody":
      "Getränke und Shisha werden direkt vor Ort bestellt und von jedem Gast selbst bezahlt.",
    "details.afterBody": "Nach 00:00 geht die Party in der Bar weiter.",
    "details.brandLabel": "Featuring",
    "details.brandOne": "Tshela's Birthday",
    "details.brandTwo": "BREAK Paint Concept",
    "details.brandThree": "feinSTAUB Lounge",
  },
  en: {
    "meta.title": "Tshela's Birthday - Shisha & Paint Night",
    "meta.description":
      "Night-event flyer for Tshela's Birthday, the BREAK paint concept, and the feinSTAUB Lounge in Stuttgart.",
    "nav.hero": "Intro",
    "nav.schedule": "Flow",
    "nav.location": "Lounge",
    "nav.details": "Flyer",
    "progress.label": "scroll through the night",
    "progress.complete": "back to top",
    "hero.eyebrow": "11.04 • Stuttgart • Shisha & Paint",
    "hero.metaLine": "Tshela x BREAK x feinSTAUB Lounge",
    "hero.titleTop": "Tshela's Birthday",
    "hero.titlePrefix": "Shisha & Paint",
    "hero.titleNight": "Night",
    "hero.titleBottom": "Shisha & Paint Night",
    "hero.brandLead": "with",
    "hero.lede":
      "A birthday night that also works as an art event, an Afro music night, and a lounge gathering. BREAK brings the painting concept, feinSTAUB brings the bar atmosphere, and after midnight the party keeps going.",
    "hero.tagOne": "Birthday Celebration",
    "hero.tagTwo": "BREAK Paint Concept",
    "hero.tagThree": "feinSTAUB Lounge",
    "hero.tagFour": "Afrobeats / Afrohouse",
    "hero.calendarButton": "Add to calendar",
    "calendar.eyebrow": "Calendar",
    "calendar.title": "Which calendar do you want to add it to?",
    "calendar.apple": "Apple Calendar",
    "calendar.google": "Google Calendar",
    "calendar.outlook": "Outlook",
    "hero.cardLabel": "Event Snapshot",
    "hero.cardDateLabel": "DATE",
    "hero.cardDateValue": "11.04",
    "hero.cardTimeLabel": "PAINT SESSION",
    "hero.cardTimeValue": "9:00 PM - 12:00 AM",
    "hero.cardPlaceLabel": "LOCATION",
    "hero.cardPlaceValue": "feinSTAUB Lounge, Stuttgart",
    "hero.cardMusicLabel": "MUSIC",
    "hero.cardMusicValue": "Afrobeats / Afrohouse",
    "hero.practiceEyebrow": "Warm-up",
    "hero.practiceTitle": "Sketch before the party starts.",
    "hero.practiceBody":
      "A quick warm-up doodle. Draw right here before the real paint session begins.",
    "hero.practiceClear": "Clear board",
    "ticker.one": "BREAK",
    "ticker.two": "PAINT",
    "ticker.three": "SHISHA",
    "ticker.four": "AFROBEATS",
    "ticker.five": "LOUNGE",
    "ticker.six": "BIRTHDAY",
    "schedule.eyebrow": "Night flow",
    "schedule.heading": "Art first, then drinks and shisha, with music tying the night together.",
    "schedule.cardOneTitle": "Paint Session",
    "schedule.cardOneTime": "9:00 PM - 12:00 AM",
    "schedule.cardOneBody":
      "Guests paint with acrylic colors and materials like brushes, dabbers, sponges, and masking tape.",
    "schedule.cardTwoTitle": "Materials",
    "schedule.materialOne": "Brushes",
    "schedule.materialTwo": "Sponges",
    "schedule.materialThree": "Dabbers",
    "schedule.materialFour": "Masking tape",
    "schedule.materialFive": "Aprons",
    "schedule.cardThreeTitle": "Contribution",
    "schedule.cardThreePrice": "9€ per person",
    "schedule.cardThreeBody":
      "Includes a printed tote bag that each guest can paint and take home.",
    "schedule.cardFourTitle": "After 00:00",
    "schedule.cardFourBody":
      "The painting corner closes, but the party continues in the bar with music, drinks, and shisha.",
    "schedule.cardFourNote":
      "Drinks and shisha are ordered at the bar and paid individually by each guest.",
    "schedule.quote": "Art Event x Afro Music Night x Birthday Celebration",
    "location.eyebrow": "feinSTAUB Lounge",
    "location.heading": "The lounge is not only the venue, it is part of the staging itself.",
    "location.blockLabel": "Location",
    "location.name": "feinSTAUB Lounge",
    "location.addressLineOne": "Rotenwaldstrasse 114",
    "location.addressLineTwo": "70197 Stuttgart",
    "location.musicLabel": "Music",
    "location.musicValue": "Afrobeats / Afrohouse",
    "location.selfPay":
      "Drinks and shisha are ordered on site and paid by each guest individually.",
    "location.noteLabel": "Note",
    "location.noteBody":
      "Tap the map or use the buttons to open the venue directly in Google Maps or start the route.",
    "location.mapOpen": "Open in Google Maps",
    "location.mapRoute": "Start route",
    "details.eyebrow": "Flyer copy",
    "details.heading": "The final content is now bundled into a poster-style card.",
    "details.posterLabel": "TITLE",
    "details.titleTop": "Tshela's Birthday",
    "details.titleBottom": "Shisha & Paint Night",
    "details.metaDate": "📅 11.04",
    "details.metaTime": "🕘 Paint Session: 9:00 PM - 12:00 AM",
    "details.metaMusic": "🎶 Afrobeats / Afrohouse",
    "details.paintLabel": "🎨 Painting Corner",
    "details.paintBody":
      "Guests paint with acrylic colors and materials like brushes, dabbers, sponges, and masking tape.",
    "details.priceBody": "Material contribution: 9€ per person",
    "details.priceSub": "(Includes a printed tote bag to paint)",
    "details.apronBody": "Aprons are provided to protect clothing from paint splashes.",
    "details.locationLabel": "📍 Location",
    "details.locationName": "feinSTAUB Lounge",
    "details.locationStreet": "Rotenwaldstrasse 114",
    "details.locationCity": "70197 Stuttgart",
    "details.noteLabel": "Note",
    "details.noteBody":
      "Drinks and shisha are ordered on site and paid by each guest individually.",
    "details.afterBody": "After 00:00, the party continues in the bar.",
    "details.brandLabel": "Featuring",
    "details.brandOne": "Tshela's Birthday",
    "details.brandTwo": "BREAK Paint Concept",
    "details.brandThree": "feinSTAUB Lounge",
  },
};

const localeState = {
  current: "de",
};

const pointer = {
  x: window.innerWidth * 0.5,
  y: window.innerHeight * 0.5,
  active: false,
};

const inkContext = inkCanvas.getContext("2d");

const inkState = {
  dpr: Math.min(window.devicePixelRatio || 1, 2),
  blobs: [],
  ripples: [],
  sectionIndex: 0,
  scrollRatio: 0,
};

const lightboxState = {
  triggerButton: null,
  isTransitioning: false,
};

const navState = {
  activeId: null,
  lockedId: null,
  lockUntil: 0,
};

const practiceState = {
  context: practiceCanvas?.getContext("2d") || null,
  dpr: Math.min(window.devicePixelRatio || 1, 2),
  drawing: false,
  lastX: 0,
  lastY: 0,
  paletteIndex: 0,
  paletteBlend: 0,
  width: 0,
  height: 0,
};

const tickerKeys = [
  "ticker.one",
  "ticker.two",
  "ticker.three",
  "ticker.four",
  "ticker.five",
  "ticker.six",
];

const venueQuery = "feinSTAUB Lounge, Rotenwaldstraße 114, 70197 Stuttgart";
const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueQuery)}`;
const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venueQuery)}`;
const calendarEvent = {
  title: "Tshela's Birthday - Shisha & Paint Night",
  location: "feinSTAUB Lounge, Rotenwaldstraße 114, 70197 Stuttgart",
  description:
    "Paint Session: 21:00-00:00. Afrobeats / Afrohouse. Materialbeitrag: 9 EUR pro Person. Inklusive bedrucktem Jutebeutel. Nach 00:00 geht die Party in der Bar weiter.",
  startLocal: "2026-04-11T21:00:00",
  endLocal: "2026-04-12T00:00:00",
  startUtc: "20260411T190000Z",
  endUtc: "20260411T220000Z",
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getTranslation(language, key) {
  return translations[language]?.[key] ?? translations.de[key] ?? key;
}

function getInitialLanguage() {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  if (queryLanguage === "en" || queryLanguage === "de") {
    return queryLanguage;
  }

  try {
    const storedLanguage = window.localStorage.getItem("bloom-language");
    if (storedLanguage === "en" || storedLanguage === "de") {
      return storedLanguage;
    }
  } catch {}

  return "de";
}

function applyTranslations(language) {
  localeState.current = language;
  document.documentElement.lang = language;

  const nextTitle = getTranslation(language, "meta.title");
  const nextDescription = getTranslation(language, "meta.description");

  pageTitle.textContent = nextTitle;
  document.title = nextTitle;
  pageDescription.setAttribute("content", nextDescription);

  translatableNodes.forEach((node) => {
    node.textContent = getTranslation(language, node.dataset.i18n);
  });

  ariaNodes.forEach((node) => {
    node.setAttribute("aria-label", getTranslation(language, node.dataset.i18nAriaLabel));
  });

  rebuildTicker();

  localeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === language);
  });

  updateProgressState(inkState.scrollRatio);
  updateFrameMetrics();

  try {
    window.localStorage.setItem("bloom-language", language);
  } catch {}
}

function updateFrameMetrics() {
  if (!frame) {
    return;
  }

  root.style.setProperty("--frame-height", `${Math.ceil(frame.getBoundingClientRect().height)}px`);
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;
  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function initCalendarLinks() {
  if (!calendarApple || !calendarGoogle || !calendarOutlook) {
    return;
  }

  const title = encodeURIComponent(calendarEvent.title);
  const details = encodeURIComponent(calendarEvent.description);
  const location = encodeURIComponent(calendarEvent.location);
  const appleUrl = new URL("./tshela-shisha-paint-night.ics", window.location.href);

  if (appleUrl.protocol === "http:" || appleUrl.protocol === "https:") {
    appleUrl.protocol = "webcal:";
  }

  calendarApple.href = appleUrl.toString();

  calendarGoogle.href =
    `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}` +
    `&dates=${calendarEvent.startUtc}/${calendarEvent.endUtc}` +
    `&details=${details}&location=${location}`;

  calendarOutlook.href =
    "https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent" +
    `&subject=${title}` +
    `&startdt=${encodeURIComponent(calendarEvent.startLocal)}` +
    `&enddt=${encodeURIComponent(calendarEvent.endLocal)}` +
    `&body=${details}` +
    `&location=${location}`;
}

function createTickerGroup(language, repetitions = 1) {
  const group = document.createElement("div");
  group.className = "ticker__group";

  for (let repeatIndex = 0; repeatIndex < repetitions; repeatIndex += 1) {
    tickerKeys.forEach((key) => {
      const token = document.createElement("span");
      token.textContent = getTranslation(language, key);
      group.append(token);
    });
  }

  return group;
}

function rebuildTicker() {
  if (!tickerTrack) {
    return;
  }

  const language = localeState.current || getInitialLanguage();
  tickerTrack.replaceChildren();

  const measureGroup = createTickerGroup(language);
  tickerTrack.append(measureGroup);

  const baseWidth = measureGroup.scrollWidth || 1;
  const minGroupWidth = Math.max(window.innerWidth * 1.5, 960);
  const repetitions = Math.max(1, Math.ceil(minGroupWidth / baseWidth));

  const primaryGroup = repetitions === 1 ? measureGroup : createTickerGroup(language, repetitions);
  const mirroredGroup = primaryGroup.cloneNode(true);

  tickerTrack.replaceChildren(primaryGroup, mirroredGroup);
}

function updateTheme(panel) {
  if (!panel) {
    return;
  }

  root.style.setProperty("--accent-1", panel.dataset.accentOne);
  root.style.setProperty("--accent-2", panel.dataset.accentTwo);
  root.style.setProperty("--accent-3", panel.dataset.accentThree);
}

function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;

  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
  };
}

function rgbToHex({ r, g, b }) {
  return `#${[r, g, b]
    .map((channel) => Math.round(clamp(channel, 0, 255)).toString(16).padStart(2, "0"))
    .join("")}`;
}

function mixHexColors(startHex, endHex, amount) {
  const start = hexToRgb(startHex);
  const end = hexToRgb(endHex);

  return rgbToHex({
    r: start.r + (end.r - start.r) * amount,
    g: start.g + (end.g - start.g) * amount,
    b: start.b + (end.b - start.b) * amount,
  });
}

function smoothStep(value) {
  return value * value * (3 - 2 * value);
}

function getPanelAccentSet(panel) {
  return [panel.dataset.accentOne, panel.dataset.accentTwo, panel.dataset.accentThree];
}

function updateThemeFromScroll() {
  if (!panels.length) {
    return;
  }

  const anchor = window.scrollY + window.innerHeight * 0.48;
  const centers = panels.map((panel) => window.scrollY + panel.getBoundingClientRect().top + panel.offsetHeight * 0.5);

  if (anchor <= centers[0]) {
    updateTheme(panels[0]);
    inkState.sectionIndex = 0;
    return;
  }

  const lastIndex = panels.length - 1;
  if (anchor >= centers[lastIndex]) {
    updateTheme(panels[lastIndex]);
    inkState.sectionIndex = lastIndex;
    return;
  }

  for (let index = 0; index < panels.length - 1; index += 1) {
    const start = centers[index];
    const end = centers[index + 1];

    if (anchor < start || anchor > end) {
      continue;
    }

    const ratio = clamp((anchor - start) / (end - start), 0, 1);
    const easedRatio = smoothStep(ratio);
    const startAccents = getPanelAccentSet(panels[index]);
    const endAccents = getPanelAccentSet(panels[index + 1]);

    root.style.setProperty("--accent-1", mixHexColors(startAccents[0], endAccents[0], easedRatio));
    root.style.setProperty("--accent-2", mixHexColors(startAccents[1], endAccents[1], easedRatio));
    root.style.setProperty("--accent-3", mixHexColors(startAccents[2], endAccents[2], easedRatio));
    inkState.sectionIndex = easedRatio < 0.5 ? index : index + 1;
    return;
  }
}

function scrollToSection(target) {
  const frameHeight = frame ? frame.getBoundingClientRect().height : 0;
  const top = window.scrollY + target.getBoundingClientRect().top - frameHeight - 12;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

function updateActiveNav(id) {
  if (!id || navState.activeId === id) {
    return;
  }

  setNavButtonState(id);
}

function setNavButtonState(activeId) {
  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.target === activeId);
  });
  navState.activeId = activeId;
}

function updateActiveNavFromScroll() {
  if (!panels.length) {
    return;
  }

  const frameHeight = frame ? frame.getBoundingClientRect().height : 0;
  const anchor = window.scrollY + frameHeight + window.innerHeight * 0.2;

  const activePanel =
    panels.find((panel) => {
      const top = panel.offsetTop;
      const bottom = top + panel.offsetHeight;
      return anchor >= top && anchor < bottom;
    }) || panels[panels.length - 1];

  if (navState.lockedId) {
    const lockExpired = Date.now() > navState.lockUntil;
    if (activePanel.id !== navState.lockedId && !lockExpired) {
      return;
    }

    navState.lockedId = null;
  }

  updateActiveNav(activePanel.id);
}

function updatePanelMotion() {
  const viewportHeight = window.innerHeight;

  panels.forEach((panel) => {
    const rect = panel.getBoundingClientRect();
    const localProgress = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height), 0, 1);

    panel.querySelectorAll(".drift").forEach((element) => {
      const speed = Number.parseFloat(element.dataset.parallax || "0.3");
      const offset = (0.5 - localProgress) * speed * 150;
      const rotate = (0.5 - localProgress) * speed * 8;
      element.style.setProperty("--drift-y", `${offset.toFixed(2)}px`);
      element.style.setProperty("--drift-r", `${rotate.toFixed(2)}deg`);
    });
  });
}

function handleScroll() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  inkState.scrollRatio = ratio;
  root.style.setProperty("--page-progress", ratio.toFixed(4));
  progressButton?.style.setProperty("--progress-ratio", ratio.toFixed(4));
  progressFill.style.transform = `scaleX(${ratio.toFixed(4)})`;
  updateThemeFromScroll();
  updateActiveNavFromScroll();
  updateProgressState(ratio);
  updatePanelMotion();
}

function updateProgressState(ratio) {
  const isComplete = ratio >= 0.985;
  progressButton.classList.toggle("is-complete", isComplete);
  progressLabel.textContent = getTranslation(
    localeState.current,
    isComplete ? "progress.complete" : "progress.label"
  );
}

function initPanelObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) {
        return;
      }

      const panel = visibleEntry.target;
      inkState.sectionIndex = panels.findIndex((item) => item === panel);
    },
    {
      threshold: [0.3, 0.45, 0.6, 0.8],
    }
  );

  panels.forEach((panel) => observer.observe(panel));
}

function createBlobs() {
  inkState.blobs = [0, 1, 2, 3, 4, 5].map((index) => {
    const panel = panels[index % panels.length];
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: 180 + Math.random() * 220,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      palette: [panel.dataset.accentOne, panel.dataset.accentTwo, panel.dataset.accentThree],
      offset: Math.random() * Math.PI * 2,
    };
  });
}

function resizeInkCanvas() {
  inkState.dpr = Math.min(window.devicePixelRatio || 1, 2);
  inkCanvas.width = Math.floor(window.innerWidth * inkState.dpr);
  inkCanvas.height = Math.floor(window.innerHeight * inkState.dpr);
  inkCanvas.style.width = `${window.innerWidth}px`;
  inkCanvas.style.height = `${window.innerHeight}px`;
  inkContext.setTransform(inkState.dpr, 0, 0, inkState.dpr, 0, 0);
}

function spawnRipple(x, y, intensity = 1) {
  inkState.ripples.push({
    x,
    y,
    radius: 14,
    alpha: 0.18 * intensity,
    growth: 1.8 + intensity * 1.2,
  });
}

function resetPracticeBoard() {
  if (!practiceCanvas || !practiceState.context) {
    return;
  }

  const context = practiceState.context;
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, practiceCanvas.width, practiceCanvas.height);
  context.fillStyle = "rgba(255, 250, 242, 0.78)";
  context.fillRect(0, 0, practiceCanvas.width, practiceCanvas.height);
  context.restore();
}

function resizePracticeBoard() {
  if (!practiceCanvas || !practiceState.context) {
    return;
  }

  const rect = practiceCanvas.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    return;
  }

  const nextDpr = Math.min(window.devicePixelRatio || 1, 2);
  const nextWidth = Math.floor(rect.width * nextDpr);
  const nextHeight = Math.floor(rect.height * nextDpr);

  if (
    nextWidth === practiceCanvas.width &&
    nextHeight === practiceCanvas.height &&
    nextDpr === practiceState.dpr
  ) {
    return;
  }

  let snapshot = null;

  if (practiceCanvas.width > 0 && practiceCanvas.height > 0) {
    snapshot = document.createElement("canvas");
    snapshot.width = practiceCanvas.width;
    snapshot.height = practiceCanvas.height;
    snapshot.getContext("2d")?.drawImage(practiceCanvas, 0, 0);
  }

  practiceState.dpr = nextDpr;
  practiceCanvas.width = nextWidth;
  practiceCanvas.height = nextHeight;
  practiceState.width = rect.width;
  practiceState.height = rect.height;
  practiceState.context.setTransform(practiceState.dpr, 0, 0, practiceState.dpr, 0, 0);
  practiceState.context.lineCap = "round";
  practiceState.context.lineJoin = "round";
  practiceState.context.lineWidth = 4.4;
  practiceState.context.strokeStyle = hexToRgba(practicePalette[0], 0.94);
  resetPracticeBoard();

  if (snapshot) {
    practiceState.context.drawImage(snapshot, 0, 0, snapshot.width, snapshot.height, 0, 0, rect.width, rect.height);
  }
}

function getPracticePoint(event) {
  const rect = practiceCanvas?.getBoundingClientRect();
  if (!rect) {
    return { x: 0, y: 0 };
  }

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function getPracticePaletteColor() {
  const current = practicePalette[practiceState.paletteIndex % practicePalette.length];
  const next = practicePalette[(practiceState.paletteIndex + 1) % practicePalette.length];
  return mixHexColors(current, next, practiceState.paletteBlend);
}

function isTouchPracticeEvent(event) {
  return event.pointerType === "touch";
}

function startPracticeStroke(event) {
  if (!practiceCanvas || !practiceState.context) {
    return;
  }

  if (!isTouchPracticeEvent(event)) {
    event.stopPropagation();
    event.preventDefault();
  }
  const point = getPracticePoint(event);
  practiceState.drawing = true;
  practiceState.lastX = point.x;
  practiceState.lastY = point.y;
  practiceState.paletteIndex = (practiceState.paletteIndex + 1) % practicePalette.length;
  practiceState.paletteBlend = 0;
  if (!isTouchPracticeEvent(event)) {
    practiceCanvas.setPointerCapture?.(event.pointerId);
  }
}

function movePracticeStroke(event) {
  if (!practiceState.drawing || !practiceState.context) {
    return;
  }

  if (!isTouchPracticeEvent(event)) {
    event.stopPropagation();
    event.preventDefault();
  }
  const point = getPracticePoint(event);
  const distance = Math.hypot(point.x - practiceState.lastX, point.y - practiceState.lastY);
  practiceState.paletteBlend += Math.max(0.015, distance * 0.0024);

  while (practiceState.paletteBlend >= 1) {
    practiceState.paletteBlend -= 1;
    practiceState.paletteIndex = (practiceState.paletteIndex + 1) % practicePalette.length;
  }

  practiceState.context.strokeStyle = hexToRgba(getPracticePaletteColor(), 0.94);
  practiceState.context.lineWidth = clamp(3.2 + distance * 0.08, 3.2, 7.2);
  practiceState.context.beginPath();
  practiceState.context.moveTo(practiceState.lastX, practiceState.lastY);
  practiceState.context.lineTo(point.x, point.y);
  practiceState.context.stroke();
  practiceState.lastX = point.x;
  practiceState.lastY = point.y;
}

function endPracticeStroke(event) {
  if (!practiceCanvas) {
    return;
  }

  if (!isTouchPracticeEvent(event)) {
    event.stopPropagation();
    event.preventDefault();
  }
  practiceState.drawing = false;
  if (!isTouchPracticeEvent(event)) {
    practiceCanvas.releasePointerCapture?.(event.pointerId);
  }
}

function initPracticeBoard() {
  if (!practiceCanvas || !practiceState.context) {
    return;
  }

  resizePracticeBoard();
  practiceCanvas.addEventListener("pointerdown", startPracticeStroke);
  practiceCanvas.addEventListener("pointermove", movePracticeStroke);
  practiceCanvas.addEventListener("pointerup", endPracticeStroke);
  practiceCanvas.addEventListener("pointerleave", endPracticeStroke);
  practiceCanvas.addEventListener("pointercancel", endPracticeStroke);
  practiceCanvas.addEventListener("click", (event) => {
    if (!isTouchPracticeEvent(event)) {
      event.preventDefault();
      event.stopPropagation();
    }
  });
  practiceClearButton?.addEventListener("click", () => {
    resetPracticeBoard();
  });
}

function drawInkFrame(time) {
  inkContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
  inkContext.globalCompositeOperation = "screen";

  inkState.blobs.forEach((blob, index) => {
    const paletteIndex = (inkState.sectionIndex + index) % blob.palette.length;
    const color = blob.palette[paletteIndex];
    const attractionX = pointer.active ? (pointer.x - blob.x) * 0.00065 : 0;
    const attractionY = pointer.active ? (pointer.y - blob.y) * 0.00065 : 0;

    blob.vx += attractionX + Math.cos(time * 0.0002 + blob.offset) * 0.006;
    blob.vy += attractionY + Math.sin(time * 0.00022 + blob.offset) * 0.006;
    blob.vx *= 0.992;
    blob.vy *= 0.992;
    blob.x += blob.vx;
    blob.y += blob.vy;

    if (blob.x < -blob.radius) blob.x = window.innerWidth + blob.radius;
    if (blob.x > window.innerWidth + blob.radius) blob.x = -blob.radius;
    if (blob.y < -blob.radius) blob.y = window.innerHeight + blob.radius;
    if (blob.y > window.innerHeight + blob.radius) blob.y = -blob.radius;

    const radius =
      blob.radius *
      (1 + Math.sin(time * 0.001 + inkState.scrollRatio * Math.PI * 4 + index) * 0.07);
    const gradient = inkContext.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, radius);

    gradient.addColorStop(0, hexToRgba(color, 0.17));
    gradient.addColorStop(0.55, hexToRgba(color, 0.08));
    gradient.addColorStop(1, hexToRgba(color, 0));

    inkContext.fillStyle = gradient;
    inkContext.beginPath();
    inkContext.arc(blob.x, blob.y, radius, 0, Math.PI * 2);
    inkContext.fill();
  });

  inkState.ripples = inkState.ripples.filter((ripple) => ripple.alpha > 0.01);

  inkState.ripples.forEach((ripple, index) => {
    ripple.radius += ripple.growth;
    ripple.alpha *= 0.965;

    const colors = [
      getComputedStyle(root).getPropertyValue("--accent-1").trim(),
      getComputedStyle(root).getPropertyValue("--accent-2").trim(),
      getComputedStyle(root).getPropertyValue("--accent-3").trim(),
    ];

    inkContext.strokeStyle = hexToRgba(colors[index % colors.length] || "#ef7a2d", ripple.alpha);
    inkContext.lineWidth = 1.8;
    inkContext.beginPath();
    inkContext.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
    inkContext.stroke();
  });

  if (!prefersReducedMotion) {
    window.requestAnimationFrame(drawInkFrame);
  }
}

function initVenueMap() {
  mapOpenLink.href = mapOpenUrl;
  mapRouteLink.href = mapDirectionsUrl;
  const embedKey = typeof appConfig.googleMapsEmbedApiKey === "string"
    ? appConfig.googleMapsEmbedApiKey.trim()
    : "";

  mapFrame.src = embedKey
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(embedKey)}&q=${encodeURIComponent(venueQuery)}&zoom=16`
    : `https://maps.google.com/maps?q=${encodeURIComponent(venueQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
}

function initBranding() {
  if (typeof appConfig.breakLogoPath === "string" && appConfig.breakLogoPath.trim()) {
    const nextLogoPath = appConfig.breakLogoPath.trim();
    if (breakLogo.getAttribute("src") !== nextLogoPath) {
      breakLogo.src = nextLogoPath;
    }
  }
}

function getImageElement(button) {
  return button?.querySelector("img") || null;
}

function getPhotoCardElement(button) {
  return button?.closest(".photo-card") || null;
}

function setPhotoCardLifted(button, isLifted) {
  const card = getPhotoCardElement(button);
  if (!card) {
    return;
  }

  card.classList.toggle("is-lifted", isLifted);
}

function createFlightImage(sourceImage, rect) {
  const flight = sourceImage.cloneNode();
  flight.className = "lightbox-flight";
  flight.style.left = `${rect.left}px`;
  flight.style.top = `${rect.top}px`;
  flight.style.width = `${rect.width}px`;
  flight.style.height = `${rect.height}px`;
  flight.style.borderRadius = getComputedStyle(sourceImage).borderRadius || "16px";
  document.body.append(flight);
  return flight;
}

async function ensureImageReady(imageElement, src) {
  if (!imageElement || !src) {
    return;
  }

  if (imageElement.src !== src) {
    imageElement.src = src;
  }

  if (typeof imageElement.decode === "function") {
    try {
      await imageElement.decode();
      return;
    } catch {}
  }

  if (imageElement.complete && imageElement.naturalWidth > 0) {
    return;
  }

  await new Promise((resolve) => {
    const finish = () => {
      imageElement.removeEventListener("load", finish);
      imageElement.removeEventListener("error", finish);
      resolve();
    };

    imageElement.addEventListener("load", finish, { once: true });
    imageElement.addEventListener("error", finish, { once: true });
  });
}

async function animateFlight({ fromRect, toRect, sourceImage, reverse = false, onStart }) {
  const flight = createFlightImage(sourceImage, fromRect);
  onStart?.(flight);
  const animation = flight.animate(
    [
      {
        left: `${fromRect.left}px`,
        top: `${fromRect.top}px`,
        width: `${fromRect.width}px`,
        height: `${fromRect.height}px`,
        borderRadius: reverse ? "14px" : getComputedStyle(sourceImage).borderRadius || "16px",
        opacity: reverse ? 1 : 0.98,
      },
      {
        left: `${toRect.left}px`,
        top: `${toRect.top}px`,
        width: `${toRect.width}px`,
        height: `${toRect.height}px`,
        borderRadius: reverse ? getComputedStyle(sourceImage).borderRadius || "16px" : "14px",
        opacity: 1,
      },
    ],
    {
      duration: reverse ? 280 : 360,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "forwards",
    }
  );

  try {
    await animation.finished;
  } catch {}

  return flight;
}

async function openLightbox(button) {
  const src = button.dataset.photoSrc;
  const caption = button.dataset.photoCaption || "";
  const image = getImageElement(button);

  if (!src || !image || lightboxState.isTransitioning) {
    return;
  }

  lightboxState.isTransitioning = true;
  lightboxState.triggerButton = button;
  lightboxImage.alt = image.alt || caption;
  lightboxCaption.textContent = caption;

  if (typeof lightbox.showModal !== "function") {
    lightboxState.isTransitioning = false;
    return;
  }

  await ensureImageReady(lightboxImage, src);

  if (prefersReducedMotion) {
    setPhotoCardLifted(button, true);
    lightbox.showModal();
    lightbox.classList.add("is-visible");
    lightboxState.isTransitioning = false;
    return;
  }

  const sourceRect = image.getBoundingClientRect();
  lightbox.classList.add("is-animating");
  lightbox.showModal();

  await new Promise((resolve) => window.requestAnimationFrame(resolve));
  await new Promise((resolve) => window.requestAnimationFrame(resolve));

  const targetRect = lightboxImage.getBoundingClientRect();
  const flight = await animateFlight({
    fromRect: sourceRect,
    toRect: targetRect,
    sourceImage: image,
    onStart: () => {
      setPhotoCardLifted(button, true);
    },
  });

  lightbox.classList.add("is-visible");
  lightbox.classList.remove("is-animating");
  await new Promise((resolve) => window.requestAnimationFrame(resolve));
  await new Promise((resolve) => window.requestAnimationFrame(resolve));
  flight.remove();
  lightboxState.isTransitioning = false;
}

async function closeLightbox() {
  if (!lightbox.open || lightboxState.isTransitioning) {
    return;
  }

  if (prefersReducedMotion) {
    lightbox.close();
    return;
  }

  const triggerImage = getImageElement(lightboxState.triggerButton);
  if (!triggerImage) {
    lightbox.close();
    return;
  }

  lightboxState.isTransitioning = true;
  lightbox.classList.add("is-closing");

  const fromRect = lightboxImage.getBoundingClientRect();
  const toRect = triggerImage.getBoundingClientRect();

  const flight = await animateFlight({
    fromRect,
    toRect,
    sourceImage: triggerImage,
    reverse: true,
  });

  flight.remove();
  lightbox.classList.remove("is-closing");
  lightbox.close();
  lightboxState.isTransitioning = false;
}

function attachGlobalEvents() {
  window.addEventListener(
    "pointermove",
    (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    },
    { passive: true }
  );

  window.addEventListener(
    "scroll",
    () => {
      handleScroll();
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    updateFrameMetrics();
    resizeInkCanvas();
    resizePracticeBoard();
    updatePanelMotion();
    rebuildTicker();
    updateActiveNavFromScroll();
  });

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);
      if (!target) {
        return;
      }

      navState.lockedId = target.id;
      navState.lockUntil = Date.now() + 1100;
      updateActiveNav(target.id);
      scrollToSection(target);
    });
  });

  localeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyTranslations(button.dataset.language);
    });
  });

  calendarButton?.addEventListener("click", () => {
    if (!calendarSheet) {
      return;
    }

    if (typeof calendarSheet.showModal === "function") {
      calendarSheet.showModal();
      return;
    }

    window.open(calendarGoogle?.href || "./tshela-shisha-paint-night.ics", "_blank", "noopener");
  });

  calendarSheetClose?.addEventListener("click", () => {
    calendarSheet?.close();
  });

  calendarSheet?.addEventListener("click", (event) => {
    if (event.target === calendarSheet) {
      calendarSheet.close();
    }
  });

  progressButton.addEventListener("click", () => {
    if (inkState.scrollRatio >= 0.985) {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      return;
    }

    window.scrollBy({
      top: Math.max(window.innerHeight * 0.88, 480),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  });

  photoButtons.forEach((button) => {
    button.addEventListener("click", () => {
      openLightbox(button);
    });
  });

  lightbox.addEventListener("click", (event) => {
    const target = event.target;
    if (target === lightbox) {
      closeLightbox();
    }
  });

  lightboxCloseButton.addEventListener("click", () => {
    closeLightbox();
  });

  lightbox.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeLightbox();
  });

  lightbox.addEventListener("close", () => {
    lightbox.classList.remove("is-animating", "is-closing", "is-visible");
    setPhotoCardLifted(lightboxState.triggerButton, false);
    lightboxImage.src = "";
    lightboxCaption.textContent = "";
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.open) {
      closeLightbox();
    }
  });
}

function init() {
  applyTranslations(getInitialLanguage());
  updateFrameMetrics();
  initBranding();
  initPracticeBoard();
  initCalendarLinks();
  initVenueMap();
  updateTheme(panels[0]);
  resizeInkCanvas();
  createBlobs();
  initPanelObserver();
  attachGlobalEvents();
  handleScroll();
  updateActiveNavFromScroll();

  if (prefersReducedMotion) {
    drawInkFrame(0);
  } else {
    window.requestAnimationFrame(drawInkFrame);
  }

  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      updateFrameMetrics();
      rebuildTicker();
      handleScroll();
    });
  }
}

init();

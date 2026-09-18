// import '../css/style.css'; // Commented out to allow native ES modules, handled via <link> natively
import { setupHero } from './components/hero.js';
import { setupHomeValue } from './components/home-value.js';
import { setupHomeServices } from './components/home-services.js?v=3';
import { setupSocialProof } from './components/home-social-proof.js';
import { setupHomeContact } from './components/home-contact.js';
import { setupMeetEnGreets } from './components/meet-en-greets.js';
import { setupBedrijven } from './components/bedrijven.js?v=3';
import { setupParticulieren } from './components/particulieren.js';
import { setupOverOns } from './components/over-ons.js';
import { setupShows } from './components/shows.js';
import { setupExtras } from './components/extras.js';
import { setupMogelijkheden } from './components/mogelijkheden.js';
import { initNavigation } from './components/navigation.js';

// Initialize UI components
initNavigation();

// Select required containers
const heroSection = document.querySelector('#hero-section');
const homeValueSection = document.querySelector('#home-value-section');
const homeServicesSection = document.querySelector('#home-services-section');
const socialProofSection = document.querySelector('#social-proof-section');
const homeContactSection = document.querySelector('#home-contact-section');

const winkelcentraSection = document.querySelector('#meet-en-greets-section');
const bedrijvenSection = document.querySelector('#bedrijven-section');
const particulierenSection = document.querySelector('#particulieren-section');
const overOnsSection = document.querySelector('#over-ons-section');
const showsSection = document.querySelector('#shows-section');
const extrasSection = document.querySelector('#extras-section');
const mogelijkhedenSection = document.querySelector('#mogelijkheden-section');

// Initialize applicable sections
if (heroSection) setupHero(heroSection);
if (homeValueSection) setupHomeValue(homeValueSection);
if (homeServicesSection) setupHomeServices(homeServicesSection);
if (socialProofSection) setupSocialProof(socialProofSection);
if (homeContactSection) setupHomeContact(homeContactSection);

if (winkelcentraSection) setupMeetEnGreets(winkelcentraSection);
if (bedrijvenSection) setupBedrijven(bedrijvenSection);
if (particulierenSection) setupParticulieren(particulierenSection);
if (overOnsSection) setupOverOns(overOnsSection);
if (showsSection) setupShows(showsSection);
if (extrasSection) setupExtras(extrasSection);
if (mogelijkhedenSection) setupMogelijkheden(mogelijkhedenSection);

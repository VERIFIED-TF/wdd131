/**
 * place.js
 * Handles:
 *  - Footer: current year and last-modified date
 *  - Wind chill calculation for Lagos, Nigeria (metric units)
 */

// ── Footer ──────────────────────────────────────────────────
const yearEl = document.getElementById('current-year');
const modEl  = document.getElementById('last-modified');

if (yearEl) yearEl.textContent = new Date().getFullYear();
if (modEl)  modEl.textContent  = document.lastModified;

// ── Wind Chill ──────────────────────────────────────────────
// Static values matching the displayed weather data (metric)
const TEMPERATURE  = 32;   // °C  – Lagos ambient temperature
const WIND_SPEED   = 14;   // km/h – current wind speed

/**
 * calculateWindChill – Metric (°C / km/h) wind chill formula
 * Valid when: temperature <= 10 °C AND wind speed > 4.8 km/h
 *
 * @param {number} temp      – Temperature in °C
 * @param {number} windSpeed – Wind speed in km/h
 * @returns {number}         – Wind chill index in °C (1 decimal)
 */
function calculateWindChill(temp, windSpeed) {
  return parseFloat(
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1)
  );
}

// Display wind chill only when conditions are met
const windChillEl = document.getElementById('wind-chill');

if (windChillEl) {
  if (TEMPERATURE <= 10 && WIND_SPEED > 4.8) {
    const chill = calculateWindChill(TEMPERATURE, WIND_SPEED);
    windChillEl.textContent = `${chill} °C`;
  } else {
    // Conditions not met – Lagos is typically hot; wind chill doesn't apply
    windChillEl.textContent = 'N/A';
  }
}
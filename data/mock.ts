/**
 * Sample data so the app runs with no backend yet.
 * Replaced later by Supabase + weather/air APIs + Claude.
 */
export const city = {
  name: 'Los Angeles',
  uv: 9,
  humidity: 45,
  aqi: 84,
  aqiLabel: 'Moderate',
  note: 'a bright, thirsty day',
};

export const personas = [
  { id: 'friend', label: 'Expert friend', emoji: '🌸', desc: 'Warm, encouraging, in your corner' },
  { id: 'pro', label: 'Assertive pro', emoji: '✨', desc: 'Direct and confident, tells it straight' },
  { id: 'doctor', label: 'Gentle doctor', emoji: '🩺', desc: 'Calm, careful, explains the why' },
];

export const tones = [
  { id: 'casual', label: 'Casual' },
  { id: 'warm', label: 'Warm' },
  { id: 'clinical', label: 'Clinical' },
];

export const morning = [
  { name: 'Gentle Gel Cleanser', tag: 'Rinse' },
  { name: 'Vitamin C Serum', tag: 'AM' },
  { name: 'Oil-Free Moisturiser', tag: 'Light' },
  { name: 'Mineral SPF 50', tag: 'Reapply midday' },
];

export const evening = [
  { name: 'Gentle Gel Cleanser', tag: 'PM' },
  { name: 'Oil-Free Moisturiser', tag: 'Simple' },
];

export const shelf = [
  { icon: '🍊', name: 'Vitamin C Serum', type: 'Antioxidant · AM', tag: 'AM' },
  { icon: '☀️', name: 'Mineral SPF 50', type: 'Sunscreen', tag: 'Essential' },
  { icon: '💧', name: 'Oil-Free Moisturiser', type: 'Hydration', tag: 'Daily' },
  { icon: '🌙', name: '0.3% Retinol', type: 'Active · PM', tag: 'Careful' },
];

export const microDelights = [
  'A little win: your evening cleanse is becoming a habit, and your T-zone looked calmer this week.',
  'Noticed something nice: three mornings running you protected your skin. That is the work that pays off.',
];

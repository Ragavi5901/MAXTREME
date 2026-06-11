export default function sitemap() {
  const baseUrl = 'https://maxtreme.in';
  
  // Define static routes
  const routes = [
    '',
    '/projects',
    '/contact',
    '/products/power-transmission',
    '/products/aodd-pumps',
    '/products/centrifugal-pumps',
    '/products/industrial-valves',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Define dynamic routes (PDP)
  const pdpTypes = [
    'single-screw',
    'twin-screw',
    'three-screw',
    'internal-shuttle',
    'external-gear',
    'rotary-trochoidal'
  ].map((type) => ({
    url: `${baseUrl}/products/pdp/${type}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Define dynamic routes (Dosing)
  const dosingTypes = [
    'plunger',
    'hydraulic',
    'mechanical',
    'electronic'
  ].map((type) => ({
    url: `${baseUrl}/products/dosing/${type}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...pdpTypes, ...dosingTypes];
}

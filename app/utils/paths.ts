/**
 * Helper function to get the correct asset path with basePath
 * Handles GitHub Pages deployment with basePath configuration
 */
export function getAssetPath(path: string): string {
  if (typeof window === 'undefined') return path;

  // Detect basePath from current location (for GitHub Pages)
  // If pathname starts with /community-website, that's our basePath
  let basePath = '';
  const pathname = window.location.pathname;

  // Check if we're on GitHub Pages with basePath
  if (pathname.startsWith('/community-website')) {
    basePath = '/community-website';
  } else {
    // Try environment variable as fallback
    basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  }

  // Remove leading slash from path if basePath already has trailing structure
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Combine basePath with asset path
  return basePath ? `${basePath}${cleanPath}` : cleanPath;
}


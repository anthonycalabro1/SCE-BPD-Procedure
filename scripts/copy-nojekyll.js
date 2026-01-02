import { copyFileSync } from 'fs';
import { join } from 'path';

// Copy .nojekyll to dist folder after build
const source = join(process.cwd(), 'public', '.nojekyll');
const dest = join(process.cwd(), 'dist', '.nojekyll');

try {
  copyFileSync(source, dest);
  console.log('✓ Copied .nojekyll to dist folder');
} catch (error) {
  // If public/.nojekyll doesn't exist, create it in dist
  const fs = await import('fs');
  fs.writeFileSync(dest, '');
  console.log('✓ Created .nojekyll in dist folder');
}


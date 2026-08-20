import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';

const src = join(process.cwd(), 'dist-standalone', 'index.html');
const dest = join(process.cwd(), 'standalone', 'BRD_Process_Dashboard.html');
const banner =
  '<!-- BRD Process Dashboard — single-file build. Open in a browser (no server needed). Regenerate with: npm run build:standalone -->\n';

mkdirSync(dirname(dest), { recursive: true });
const html = readFileSync(src, 'utf8');
writeFileSync(dest, html.startsWith(banner) ? html : banner + html);
console.log(`Wrote ${dest}`);

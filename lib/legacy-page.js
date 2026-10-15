import fs from 'node:fs';
import path from 'node:path';

export function getLegacyPageMarkup() {
  const filePath = path.join(process.cwd(), 'index.html');
  const source = fs.readFileSync(filePath, 'utf8');
  const bodyMatch = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : source;

  return body
    .replace(/\s*<script[^>]*src=["'][^"']*script\.js[^"']*["'][^>]*><\/script>\s*/i, '')
    .replaceAll('./assets/', '/assets/');
}

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function injectAssetsPlugin() {
  return {
    name: 'inject-assets',
    extendsMarkdown: md => {
      const assetsPath = resolve(__dirname, '../../guide/assets.md');
      const assetsContent = readFileSync(assetsPath, 'utf-8');

      // Extrahieren Sie Links und Bilder aus assetsContent
      const linkRegex = /^\[([^\]]+)\]:\s*(.+)$/gm;
      const imageRegex = /^\!\[([^\]]*)\]:\s*(.+)(?:\s+"([^"]*)")?$/gm;

      const links = {};
      const images = {};

      let match;
      while ((match = linkRegex.exec(assetsContent)) !== null) {
        links[match[1]] = match[2];
      }
      while ((match = imageRegex.exec(assetsContent)) !== null) {
        images[match[1]] = { url: match[2], title: match[3] || '' };
      }

      const originalRender = md.render;
      md.render = function (src, env) {
        // Ersetzen Sie Link-Referenzen
        Object.keys(links).forEach(key => {
          const regex = new RegExp(`\\[([^\\]]+)\\]\\[${key}\\]`, 'g');
          src = src.replace(regex, `[$1](${links[key]})`);
        });

        // Ersetzen Sie Bild-Referenzen
        Object.keys(images).forEach(key => {
          const regex = new RegExp(`!\\[([^\\]]*)\\]\\[${key}\\]`, 'g');
          src = src.replace(regex, `![${images[key].title}](${images[key].url} "${images[key].title}")`);
        });

        return originalRender.call(this, src, env);
      };
    }
  };
}
import { Port } from 'src/main';

export function outputConsole(PORT: Port) {
  console.log(`\nMicroservice Teacher listening on http://127.0.0.1:${PORT}\n`);
}

import { chromium } from '/Users/souvikghosh/Code/03_Business/jobcatch/node_modules/playwright/index.mjs';
import fs from 'fs';
const OUT = process.argv[2];
const URL = 'file:///Users/souvikghosh/Code/03_Business/vv-contractor-desk/index.html';
const b = await chromium.launch();
async function clip(name, view, fn) {
  const ctx = await b.newContext({ viewport: { width: 1440, height: 810 }, recordVideo: { dir: OUT + '/raw', size: { width: 1440, height: 810 } } });
  const p = await ctx.newPage();
  await p.addStyleTag;
  await p.goto(URL + '#v=' + view);
  await fn(p);
  const v = p.video(); await ctx.close();
  fs.renameSync(await v.path(), `${OUT}/raw/${name}.webm`);
  console.log('done', name);
}
const w = (p, ms) => p.waitForTimeout(ms);
await clip('home', 'home', async p => { await w(p, 13000); });
await clip('tender', 'scout', async p => { await w(p, 4500); await p.click('#main .btn.sm'); await w(p, 9500);
  await p.evaluate(() => document.querySelector('#main').scrollTo({ top: 430, behavior: 'smooth' })); await w(p, 7000); });
await clip('billing', 'billing', async p => { await w(p, 10000); });
await clip('site', 'site', async p => { await w(p, 3500); await p.click('#main .btn'); await w(p, 9000); });
await clip('letters', 'letters', async p => { await w(p, 12000); });
await b.close();

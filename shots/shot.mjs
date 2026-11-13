import { chromium } from '/Users/souvikghosh/Code/03_Business/jobcatch/node_modules/playwright/index.mjs';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
await p.goto('file:///Users/souvikghosh/Code/03_Business/vv-contractor-desk/index.html'); await p.waitForTimeout(4000);
await p.screenshot({ path: 'shots/hero.png' });
await p.evaluate(() => document.querySelector('.tline').scrollIntoView({ block: 'center' })); await p.waitForTimeout(1500);
await p.screenshot({ path: 'shots/timeline.png' });
await p.evaluate(() => enter('home')); await p.waitForTimeout(7000);
await p.screenshot({ path: 'shots/home.png' });
await b.close();

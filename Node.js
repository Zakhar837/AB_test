const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Загрузить HTML с дополнительными стилями для печати
    await page.setContent(`
    <style>
      .slide { page-break-after: always; }
    </style>
    <!-- твой HTML здесь -->
  `);

    // Сохранить в PDF
    await page.pdf({ path: 'presentation.pdf', format: 'A4' });
    await browser.close();
})();

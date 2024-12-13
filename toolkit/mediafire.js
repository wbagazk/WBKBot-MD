/*//////////////////////////////////////////////
DEVELOPED BY @WBAGAZK
Github : https://github.com/wbagazk/
All Social Media : @wbagazk

BASE Rifza123
Github : https://github.com/Rifza123

PLEASE, DO NOT DELETE THIS CREDIT, RESPECT IT!!!
//////////////////////////////////////////////*/

const cheerio = "cheerio".import()

export const mediafireDl = async (url) => {
  try {
    const res = await fetch(url, { headers: { "upgrade-insecure-requests": "1" } });
    const html = await res.text();
    const $ = cheerio.load(html);
    const dlButton = $('a#dlButton');
    if (!dlButton.length) throw new Error("Download button not found.");
    const link = dlButton.attr('href');
    if (!link) throw new Error("Download link not found.");
    const sizeText = dlButton.text().trim();
    const size = sizeText.match(/\((.*?)\)/)?.[1] || "Unknown size";
    const name = link.split('/').pop();
    const mime = name.split('.').pop();
    return {
      title: name,
      size: size,
      link: link,
      mime: mime,
    };
  } catch (error) {
    console.error("Error in mediafireDl:", error.message);
    return null;
  }
};


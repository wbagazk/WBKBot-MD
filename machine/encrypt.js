/*//////////////////////////////////////////////
DEVELOPED BY @WBAGAZK
Github : https://github.com/wbagazk/
All Social Media : @wbagazk

BASE Rifza123
Github : https://github.com/Rifza123

PLEASE, DO NOT DELETE THIS CREDIT, RESPECT IT!!!
//////////////////////////////////////////////*/

async function EncryptJs(code) {
 try {
    let res = await fetch(`${api.xterm.url}/api/tools/js-protector?code=${encodeURIComponent(code)}&key=${api.xterm.key}`)
    .then(response => response.json());
    return res
   } catch(e) {
     console.error("Error in encrypt.js :"+ e.message)
     return "Err"
  }
}

export { EncryptJs }
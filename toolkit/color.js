/*//////////////////////////////////////////////
DEVELOPED BY @WBAGAZK
Github : https://github.com/wbagazk/
All Social Media : @wbagazk

BASE Rifza123
Github : https://github.com/Rifza123

PLEASE, DO NOT DELETE THIS CREDIT, RESPECT IT!!!
//////////////////////////////////////////////*/

import chalk from 'chalk';

export const color = (text, color = 'green') => chalk.keyword(color)(text);
export const bgcolor = (text, bgcolor = 'green') => chalk.bgKeyword(bgcolor)(text);
export const biocolor = (text, bgcolor = 'green') => chalk.bgKeyword(bgcolor).bold(text);
export const ConsoleLog = (text, color) => chalk.yellow(`[${color ? 'Rifza' : 'RIFZA'}]`);
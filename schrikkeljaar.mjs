import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let jaar

jaar = parseFloat(await userInput.question("Voer een jaar in: "));

if(jaar % 4 == 0  || jaar % 100 != 0 && jaar % 400 == 0){

    console.log("het jaartal "+jaar+" is een schrikkeljaar er zijn 29 dagen ");
    
}else {console.log("het jaartal "+jaar+" is geen schrikkeljaar er zijn 28 dagen ");

}
process.exit()
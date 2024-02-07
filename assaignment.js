

function calculateMoney(ticketSale) {
    if(ticketSale < 0){
        return "You have to buy minimum a ticket"
    };
    const totalTicketSaleAmount = 120 * ticketSale;
    const totalCost = 500 + (50 * 8);
    const saveMoney = totalTicketSaleAmount - totalCost;
    return saveMoney;
}


function checkName(name) {
    if(typeof name !== 'string'){
        return 'invalid';
    };
    const letter = 'A, y, i, e, o, u, w';
    const lastLetter = letter.toLocaleLowerCase();
    const text =name.toLowerCase();
    const find = text.slice(-1);
    if(lastLetter.includes(find)){
        return 'Good Name';
    };
    return 'Bad Name';
}


function deleteInvalids(array){
   const input = array;
   let numbersArray = [];
   if(Array.isArray(input) === false){
    return 'Invalid Array';
   }
    for(let item of input){
        if(typeof item === 'number' && !isNaN(item)){
            numbersArray.push(item);
        }
    }
    return numbersArray;
}



function password(obj) {
    const generate = obj;
    const site = generate.siteName;
    const user = generate.name;
    const year = generate.birthYear;
    let count = year.toString() < 4;
    if(!site || !user || !year || !count){
        return 'invalid'
    }
    const pass = site[0].toUpperCase() + site.slice(1);
    const password = pass + '#' + user + '@' + year;
        return password;
}




function monthlySavings(arr , livingCost) {
    let tax = 0;
    let earning =0;
    if(Array.isArray(arr) === false || typeof livingCost !== 'number'){
        return "invalid input"
    }
    for(let payment of arr){
        earning +=payment;
        if(payment >= 3000){
            tax += (payment * 20) / 100;
        }
    }
    const totalSavings = (earning - tax) - livingCost;
    if(totalSavings >= 0){
        return totalSavings;
    }
    return "earn more"
}


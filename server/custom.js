
changeFloor = (currency, amount) => { 
    counter = 0;
    totalChange = [], exactChange = [] 

    do {
        //Find the max amount of that coin to use
        coins = Math.floor(amount/(currency[counter].value))
        amount -= coins*currency[counter].value
        //Fix math rounding error
        amount = amount.toFixed(2)
        totalChange.push({quantity: coins, type: currency[counter].name})
        counter++
    } while (amount != 0);

    //it wasn't ask for in the instructions, but I figured segregation of duties and decided to parse the data back here..
    totalChange.forEach(element => {
        if(element.quantity > 0) exactChange.push(element)
    });

    return exactChange;
}   

module.exports = {changeFloor};
capital = require("./Capital");
// Hydrating a list for later use
currency = [ new capital("Silver Dollar", 1.00), new capital("Half Dollar", .50), new capital("Quarter", .25), new capital("Dime", .10), new capital("Nickel", .05), new capital("Penny", .01)];

module.exports = currency;
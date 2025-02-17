//Task 1 - Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
}


console.log(calculateInvoice(100, 0.08, 5)); 
console.log(calculateInvoice(500, 0.1, 20)); 


//Task 2 - Function Expression
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};


console.log(calculateHourlyWage(52000, 40)); 
console.log(calculateHourlyWage(75000, 35)); 


//Task 3 - Arrow Function
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount - (amount * discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};


console.log(calculateLoyaltyDiscount(100, 6)); 
console.log(calculateLoyaltyDiscount(200, 2)); 


//Task 4 - Parameters and arguments
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost;
    
    if (location === "USA") {
        baseCost = 5 + (0.5 * weight);
    } else if (location === "Canada") {
        baseCost = 10 + (0.7 * weight);
    } else {
        return "Invalid location";
    }

    if (expedited) {
        baseCost += 10;
    }

    return `Shipping Cost: $${baseCost.toFixed(2)}`;
}


console.log(calculateShippingCost(10, "USA", true));  
console.log(calculateShippingCost(5, "Canada", false)); 


//Task 5 - Returning Values
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}


console.log(calculateLoanInterest(1000, 0.05, 3)); 
console.log(calculateLoanInterest(5000, 0.07, 5)); 


//Task 6 - Higher-Order Functions
let transactions = [500, 1200, 3000, 800, 2200];

function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

console.log(filterHighValueTransactions(transactions, amount => amount > 1000));


//Task 7 - Closure
function createBudgetTracker() {
    let balance = 0;

    return function(expense) {
        balance -= expense;
        return `Current Balance: -$${Math.abs(balance)}`;
    };
}

let budget = createBudgetTracker();
console.log(budget(300));
console.log(budget(200));


//Task 8 - Recursion in JavaScript
function calculateGrowth(years, revenue) {
    if (years >= 10) {
        return `Projected Revenue: $${revenue.toFixed(2)}`;
    }
    return calculateGrowth(years + 1, revenue * 1.05);
}

console.log(calculateGrowth(8, 1000));
console.log(calculateGrowth(5, 5000));
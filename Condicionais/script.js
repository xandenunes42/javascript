const INSURANCE_COST = 2.99;

let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 20;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;

/** calculate shipping cost*/
if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
shippingCost = shippingCost - 5;
} else if (userAge < 21) {
isOrderValid = false;
}

/** take account of insurance */
if (isOrderValid && addInsurance && !hasPromoCode) {
shippingCost += INSURANCE_COST;
}

/** show message */
let message = isOrderValid ? `${shippingCost}` : `Cannot order if under 21`;
console.log(message);


//Switch case:

let gate = prompt("Choose gate: a, b, or c");
let win = false;
switch (gate) {
    case "a":
     alert("Gate A: empty");
     break;
    case "b":
     alert("Gate B: main prize");
     win = true;
     break;
    case "c":
     alert("Gate C: empty");
     break;
    default:
     alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}
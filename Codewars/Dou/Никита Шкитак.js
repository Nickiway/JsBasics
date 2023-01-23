'use strict';

// case 1
const salaries1 = {
    Manager: { salary: 1000, tax: "10%" },
    Designer: { salary: 600, tax: "30%" },
    Artist: { salary: 1500, tax: "15%" }
};
    
const team1 = [
    { name: "Misha", specialization: "Manager" },
    { name: "Max", specialization: "Designer" },
    { name: "Vova", specialization: "Designer"},
    { name: "Leo", specialization: "Artist"},
];

// case 2
const salaries2 = { 
    TeamLead : {salary : 1000, tax : "99%"},
    Architect : {salary : 9000, tax : "34%"},
};

const team2 = [
    {name : "Misha", specialization : "TeamLead"}, 
    {name : "Max", specialization : "Architect"}, 
    {name : "Max", specialization : "Architect"}, 
    {name : "Max", specialization : "Architect"}, 
    {name : "Leo", specialization : "Artist"}
];

// count a non-taxed payment
let countWithoutTax = (salary, tax) => Math.round(salary * 100 / (100 - +(tax.split("%")[0])));

const financeReport1 = calculateTeamFinanceReport(salaries1, team1);
const financeReport2 = calculateTeamFinanceReport(salaries2, team2);

// main func
function calculateTeamFinanceReport(salaries, team) {
    let withTaxPayments = new Map();
    let specializations = Object.keys(salaries);
    let output = {
        totalBudgetTeam : 0,
    };

    // getting an array of specializations
    for (let specialization of specializations) {
        withTaxPayments.set(specialization, 
        countWithoutTax(salaries[specialization].salary, salaries[specialization].tax));

        // setting each spec value = 0
        output[`totalBudget${specialization}`] = 0;
    }

    // checking each teamp partic.
    for (let member of team) {
        if (specializations.includes(member.specialization)) {
            output[`totalBudget${member.specialization}`] += withTaxPayments.get(member.specialization);
            output[`totalBudgetTeam`] += withTaxPayments.get(member.specialization);
        }
    }

    return output;
}

console.log(JSON.stringify(financeReport1, null, 2));
console.log(JSON.stringify(financeReport2, null, 2));
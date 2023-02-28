let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    if (!salaries) return null;

    let nameMaxSalary;
    let maxSalary = 0
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            nameMaxSalary = name
            maxSalary = salary
        }
    }

    return nameMaxSalary
}

console.log( topSalary(salaries) )

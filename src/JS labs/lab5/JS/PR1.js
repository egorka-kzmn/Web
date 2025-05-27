function processEmployees(employeeNames) {
    const employees = [];
    for (const name of employeeNames) {
        const personalNum = name.length;
        employees.push({
            name: name,
            personalNum: personalNum
        });
    }

    for (const employee of employees) {
        console.log(`Name: ${employee.name} - Personal Number: ${employee.personalNum}`);
    }
}

processEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
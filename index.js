const fs = require('fs')
const { faker } = require('@faker-js/faker');

faker.locale = 'pt_BR';
faker.seed(12);

let customers = [];

let file = fs.createWriteStream('./output.txt');
file.on('error', function (err) { console.log(err) });

for (let i = 0; i < 1000; i++) {
    name = faker.name.findName(),
        genre = faker.name.gender(true),
        birthday = faker.date.between('1910-01-01', '2006-12-31'),
        lastPurchaseDate = faker.date.between(birthday, '2022-06-05'),
        countPurchased = faker.random.numeric(2) - 10
    customer = {
        name,
        genre,
        birthday,
        lastPurchaseDate,
        countPurchased
    }

    file.write(
        name + '\n' +
        genre + '\n' +
        birthday + '\n' +
        lastPurchaseDate + '\n' +
        countPurchased + '\n' +
        '--------------------------\n\n');
    customers.push(customer);
}
file.end();

function Q1(char, customers) {
    return customers.filter(customer => customer.name.startsWith(char))
}

/* console.log(Q1('A', customers)); */

function Q2(customers) {
    return customers.map((customer) =>
        `Cliente: ${customer.name.trim().replace(' ', '_').toUpperCase()}`)
}

/* console.log(Q2(customers)); */

function Q3(customers) {
    return customers.map((customer, i) =>
        `Cliente: ${i} ${customer.name.trim().replace(' ', '_').toUpperCase()}`)
}

/* console.log(Q3(customers)); */

function Q5(customers) {
    return customers.map((customer) => customer.name)
}

/* console.log(Q5(customers)); */

function Q6(customers) {
    return customers.map(customer => customer.name.substring(0, customer.name.indexOf(' ')))
}

/* console.log(Q6(customers)) */

function Q7(customers, char) {
    custs = customers.filter(customer => customer.name.startsWith(char))
    return custs.map(customer => customer.name.substring(0, customer.name.indexOf(' ')))
}

/* console.log(Q7(customers, 'V')); */

function Q8(customers) {
    return customers.filter((customer) => customer.birthday < new Date(2004, 06, 06))
}

/* console.log(Q8(customers)) */

function Q9(customers, txt) {
    return customers.find((customer) => customer.name === txt)
}

/* console.log(Q9(customers, 'Angelo Luz')); */

function Q10(customers) {
    return customers.reduce((sum, customer) => sum + customer.countPurchased, 0)
}

/* console.log(Q10(customers)); */

function Q11(customers) {
    return customers.filter((customer) => customer.lastPurchaseDate < new Date(2021, 06, 06));
}

/* console.log(Q11(customers)); */

function Q12(customers) {
    return customers.filter((customer) => customer.countPurchased > 15);
}

/* console.log(Q12(customers)); */

function Q13(customers, name, genre, birthday, lastPurchaseDate, countPurchased) {
    obj = {
        name,
        genre,
        birthday,
        lastPurchaseDate,
        countPurchased
    }
    customers.unshift(obj)
}

Q13(customers,
    "Vinícius Caetano",
    'Masculino',
    new Date(1985, 02, 06),
    new Date(2020, 03, 03),
    12)


/* console.log(customers) */


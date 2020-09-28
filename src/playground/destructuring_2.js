///////////step one
//
////const person= {
//     name:'Andrew',
//     age: 26,
//     location: {
//         city:'philadelphia',
//         temp: 92
//     }
//};
//
//console.log(`${person.name} is ${person.age}`);

//////////step two

//const person= {
//     name:'Andrew',
//     age: 26,
//     location: {
//         city:'philadelphia',
//         temp: 92
//     }
//};
//
//const age = person.age;
//const name = person.name;
//
//console.log(`${name} is ${age}`);

//////////step three

//const person= {
//     name:'Billy',
//     age: 26,
//     location: {
//         city:'philadelphia',
//         temp: 92
//     }
//};
//const { name,age } = person;
//
//console.log(`${name} is ${age}`);
//
//const { city, temp: temperature } = person.location;
//
//console.log(`the person lives in ${city} with a temp of ${temperature}`);
//
///////////default value and refactoring
//
//const book = {
//     publisher:{
//          name: 'Raz'
//     }
//};
//const {name:publisherName='default'} = book.publisher
//console.log(publisherName);


/////////array destructuring
//const address = ['12444 jun st','Philly','Ps','The United States of Freedom'];
//console.log(`you are in ${address[0]} in ${address[1]}`);


////////object spreading
const user = {
     name:'Jen',
     age: 24
};

console.log({
     ...user,
     location: 'Philadelphia',
     age: 27
     });
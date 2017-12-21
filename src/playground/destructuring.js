/**
 * Object destructuring
 */

// const person = {
//      name: 'Antonio',
//      age: 20,
//      location: {
//           city: 'Rome',
//           temp: 67
//      }
// }

// const { name: firstName /*local const w/ the prop coming from the object*/ = 'Anonymous', age } = person;      //ES6 Object destructuring
// // const name = person.name
// // const age = person.age
// console.log(`${firstName} is ${age}.`)


// const { city, temp: temperature } = person.location       //ES6 Object destructuring
// if (city && temperature) {
//      console.log(`It's ${temperature} in ${city}.`)
// }


// const book = {
//      title: 'Ego is the Enemy',
//      author: 'Ryan Holiday',
//      publisher: {
//           name: 'Penguin'
//      }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

/**
 * Array destructuring
 */

// const address = []
// const [, city, state = 'New York'] = address
// console.log(`You're in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, , mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)
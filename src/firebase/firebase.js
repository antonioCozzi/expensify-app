import * as firebase from 'firebase';

const config = {
     apiKey: process.env.FIREBASE_API_KEY,
     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
     databaseURL: process.env.FIREBASE_DATABASE_URL,
     projectId: process.env.FIREBASE_PROJECT_ID,
     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// // child_removed -> event di firebase che fa una cosa ogni volta che un elemento viene rimosso
// database.ref('expenses').on('child_removed', (snapshot) => {
//      console.log(snapshot.key, snapshot.val())
// })

// //child_changed -> event di firebase che invoca azioni ogni volta che un elemento viene aggiornato
// database.ref('expenses').on('child_changed', (snapshot) => {
//      console.log(snapshot.key, snapshot.val())
// })

// //child_added -> event di firebase che invoca azioni ogni volta che un elemento viene aggiunto al db
// database.ref('expenses').on('child_added', (snapshot) => {
//      console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//      .on('value', (snapshot) => {
//           const expenses = []

//           snapshot.forEach((childSnapshot) => {
//                expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                })
//           })

//           console.log(expenses)
//      })

// database.ref('expenses')
//      .once('value')
//      .then((snapshot) => {
//           const expenses = []

//           snapshot.forEach((childSnapshot) => {
//                expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                })
//           })

//           console.log(expenses)
// })

// database.ref('expenses').push({
//      description: 'Water Bill',
//      note: '',
//      amount: 3000,
//      createdAt: 0
// })

// database.ref('notes/-L1T32xqDOmFkptD2wrp').remove()

// database.ref('notes').push({
//      title: 'Course Topics',
//      body: 'React native, Python, Angular'
// })

// const firebaseNotes = {
//      notes: {
//           dashgdyuashd: {
//                title: 'First note',
//                body: 'This is my note'
//           },
//           hdashkdhwiuiw: {
//                title: 'Another note',
//                body: 'This is my note'
//           }
//      }
// }

// const notes = [{
//      id: '12',
//      title: 'First note',
//      body: 'This is my note'
// }, {
//      id: '13',
//      title: 'Another note',
//      body: 'This is my note'
// }]

// database.ref('notes').set(notes)
// database.ref('notes/12')

// database.ref().on('value', (snapshot) => {
//      const val = snapshot.val()
//      console.log(val.name + ' is a ' + val.job.title + ' at ' + val.job.company)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//      console.log(snapshot.val())
// }, (e) => {
//      console.log('Error with data fetching ', e)
// })

// setTimeout(() => {
//      database.ref('age').set(29)
// }, 3500)

// setTimeout(() => {
//      database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//      database.ref('age').set(30)
// }, 10500)

// database.ref('location/city')
//      .once('value')
//      .then((snapshot) => {
//           const val = snapshot.val()
//           console.log(val)
//      })
//      .catch((e) => {
//           console.log('Error fetching data ', e)
//      })

// database.ref().set({
//      name: 'Antonio Cozzi',
//      age: 27,
//      stressLevel: 6,
//      job: {
//           title: 'Software developer',
//           company: 'Google'
//      },
//      location: {
//           city: 'Lauria',
//           country: 'Italy'
//      }
// }).then(() => {
//      console.log('data is saved')
// }).catch((e) => {
//      console.log('This failed. ', e)
// })

// database.ref().update({
//      stressLevel: 9,
//      'job/company': 'Amazon',
//      'location/city': 'Rome'
// })

// database.ref()
//      .remove()
//      .then(() => {
//           console.log('Data was removed')
//      })
//      .catch((e) => {
//           console.log('Did not remove data ', e)
//      })


//tutte queste sono chiamate asincrone al DB

/**
 * ref() è una referenza ad una specifica parte del DB
 * se non passiamo nessun arg, lui scriverà nella root del DB
 */

/**
 * set() può prendere qualsiasi tipo di dato che può essere
* storato all'interno di Firebase.
* Non deve per forza prendere come arg un obj
*/
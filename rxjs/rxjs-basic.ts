import { from, interval, of } from 'rxjs';

// operator of example
const ofExample = of(20,30,40,50);

ofExample.subscribe({
  next: value => {
    console.log(value)
  },
  error: error => {
    console.error(error)
  },
  complete: () => {
    console.log('ofExample has been completed')
  }
})


// operator from example

const names: string[] = ["Carlos", "Ariel", "Gustavo", "Maria Eduarda"];
const fromExample = from(names);

fromExample.subscribe({
  next: value => {
    console.log(value)
  },
  error: error => {
    console.error(error)
  },
  complete: () => {
    console.log('fromExample has been completed')
  }
})


// operator inteval example

const intervalExample = interval(1000);

const intervalSubscription = intervalExample.subscribe({
  next: async (value) => console.log(value)
})

setTimeout(() => {
  intervalSubscription.unsubscribe();
  console.log('Unsubscribed!');
}, 10000);


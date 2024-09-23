// merge example

import { combineLatest, concat, forkJoin, merge, of } from "rxjs";
import { delay } from "rxjs/operators";

const observable1$ = of('First Observable').pipe(delay(1000));
const observable2$ = of('Second Observable').pipe(delay(500));

const merge$ = merge(observable1$, observable2$);

merge$.subscribe({
  next: value => console.log(value)
})

// concat

const concatObservable1$ = of('First Observable').pipe(delay(1000));
const concatObservable2$ = of('Second Observable').pipe(delay(500));

const concat$ = concat(concatObservable1$, concatObservable2$);

concat$.subscribe({
  next: value => console.log(value)
});

// combineLatest

const combineObservable1$ = of('First Observable combine').pipe(delay(1000));
const combineObservable2$ = of('Second Observable combine').pipe(delay(2000));

const combined$ = combineLatest([combineObservable1$, combineObservable2$]);

combined$.subscribe({
  next: ([val1, val2]) => {
    console.log(val1,val2)
  }
});

// fork join

const forkObservable1$ = of('First Observable fork').pipe(delay(1000));
const forkObservable2$ = of('Second Observable fork').pipe(delay(4000));

const fork$ = forkJoin([forkObservable1$, forkObservable2$]);

fork$.subscribe({
  next: ([value1, value2]) => {console.log(value1,value2)}
});

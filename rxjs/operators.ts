import { from, of } from 'rxjs';
import { filter, map, reduce, scan } from 'rxjs/operators';

// map example
const mapObservable$ = of(1, 2, 3, 4, 5);

mapObservable$
    .pipe(map((value) => value * 5))
    .subscribe((value) => console.log(value));

// filter example
const books = [
    { name: 'The Lord of the Rings', id: 123, type: 'Fantasy' },
    { name: 'Pride and Prejudice', id: 456, type: 'Romance' },
    { name: 'The Great Gatsby', id: 777, type: 'Classic' },
    { name: "Harry Potter and the Sorcerer's Stone", id: 888, type: 'Fantasy' },
];

const filterObservable$ = from(books);

filterObservable$
    .pipe(filter((book) => book.type == 'Fantasy'))
    .subscribe((result) => console.log(result));

// scan example
const scanObservable$ = of(10, 20, 30, 40, 50);

scanObservable$
    .pipe(scan((acc, value) => acc + value, 0))
    .subscribe((value) => console.log(value));

// reduce example
const recudeObservable$ = of(1, 2, 3, 4, 5);

recudeObservable$
    .pipe(
        map((value) => value * 10),
        reduce((acc, value) => acc + value, 0)
    )
    .subscribe((value) => console.log(value));

import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

// Define a generic function named findMatch
function findMatch<T>(data: T[], criteria: (d: T) => boolean): T | undefined {
    // Use the Array.prototype.find method to search for a matching element in the data array
    return data.find((criteria));
}

// Example 1: Find a Friend whose name starts with 'Jane'
console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')));

// Example 2: Find a Colleague in the 'Finance' department
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'));

function sortArray<T>(data: T[], criteria: (a: T, b: T) => number): T[] {
    // Create a copy of the original array to avoid modifying the original
    const copy = [...data];

    // Use the .sort method with the provided criteria function
    return copy.sort(criteria);
}

// Sort friends by age
console.log("sort by age")
console.log(sortArray<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log("sort by extension")
console.log(
  sortArray<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);


import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) {
     f.age += 1
     
    return `${f.name} is now ${f.age}` //// example output John is now 30 if his 'f.age' was 29.
}



console.log(older(friends[0]))


// Define a function named 'allOlder' that takes an array of 'Friend' objects as input and it will be called friends.
function allOlder(friends: Friend[]) {
  // Use the 'map' function to create a new array of updated friends. 
    const updatedFriends = friends.map((friend) => ({ // for each friend in friends
        ...friend, // Copy the existing properties from friends
        age: friend.age += 1, // Increment the age
    }));

    // Use 'map' again to create an array of strings describing the updated ages of friends.
    return updatedFriends.map((friend) => `${friend.name} is now ${friend.age}`);
}

console.log(allOlder(friends))

// Define a function named 'highestExtension' that takes an array of 'Colleague' objects as input.
function highestExtension(cs: Colleague[]){
  // Sort the 'cs' array of colleagues based on their contact extensions.
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension // if difference is positive, c1 comes first, if negative c2 comes first, 0 = equals
    );
    return result[cs.length - 1]; // Return the colleague with the highest contact extension (the last element in the sorted array).
  }
  console.log(highestExtension(colleagues.current));

  function addColleague(col: Colleague[], ColName: string, colDep: string, colEmail: string){
    var currentHighest = highestExtension(col); //getting highest
    col.push({ // adds a new colleague object into the 'col' array with the provided information.
        name: ColName,
        department: colDep,
        contact:{
            email: colEmail,
            extension: currentHighest.contact.extension + 1
        }
    })
  }

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com"); //current is one of the arrays in colleagues.
  //checking each element (c) in the array and testing if 'c.name' is equal to the string "Sheild O Connell".
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

  function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number // optional param called number
  ): EmailContact[]  { //function returns an array of Objects called EmailContact
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max // if max is less than 2, set end to 1, otherwise max
    }
    const sorted = colleagues.sort(sorter); //sorting array using given .sort method
    // mapping each colleague (ce) to an object containing 'name' and 'email' properties extracted from the 'colleagues' array.
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

function findFriends(friends: Friend[], callback: (friend: Friend) => boolean): Friend[] {
    const result = new Array(); //creating empty array for later
  
    for (const friend of friends) { //iterating through each friend in friends
      if (callback(friend)) {// The callback function should return 'true' or 'false' to indicate whether the friend matches the criteria(see below console.logs for examples of the criteria)
      
        result.push(friend.name); //if true for current friend, add their name to the result array
      }
    }
  
    return result;
  }

  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa'))); //criteria example
  console.log(findFriends(friends, (friend) => friend.age < 35)); //criteria example

  function addInterests(friend:Friend, interest: string){
    const newInterest = {...friend} //Create a new object 'newInterest' by spreading the properties of the 'friend' object.

    if(!newInterest.interests){ // checks if it has an existing interest prop
        newInterest.interests = [] // if it don't initialize new empty array of interests
    }
    newInterest.interests.push(interest) // and add the provided interest to the interests array
    return newInterest.interests

  }
console.log(addInterests(friends[1], 'Politics')) //friends is the array provided, this allows the ...friend syntax to work.


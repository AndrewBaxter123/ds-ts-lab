import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}



console.log(older(friends[0]))

// function allOlder(f: Friend[]) : string {
//     const ages = f.map((f) => f.age+=1)
//     return `${f.name.} is now ${f.age}` 
// }

function allOlder(friends: Friend[]) {
    const updatedFriends = friends.map((friend) => ({
        ...friend, // Copy the existing properties
        age: friend.age += 1, // Increment the age
    }));

    return updatedFriends.map((friend) => `${friend.name} is now ${friend.age}`);
}

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]){
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  function addColleague(col: Colleague[], ColName: string, colDep: string, colEmail: string){
    var currentHighest = highestExtension(col); //getting highest
    col.push({
        name: ColName,
        department: colDep,
        contact:{
            email: colEmail,
            extension: currentHighest.contact.extension + 1
        }


    })

  }

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

  function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

  function findFriends(friends: Friend[], callback: (friend: Friend) => boolean): Friend[] {
    const result = new Array();
  
    for (const friend of friends) {
      if (callback(friend)) {
        result.push(friend.name);
      }
    }
  
    return result;
  }

  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
  console.log(findFriends(friends, (friend) => friend.age < 35));

  
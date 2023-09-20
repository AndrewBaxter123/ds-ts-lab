import {
    ColleagueV2,
    Friend,
    Buddy,
    BuddyList,
    Administrator,
  } from "./myTypes";
  import { friends } from "./01-basics";

  const colleague1: ColleagueV2 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: ColleagueV2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: ColleagueV2 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };

  //// Define a function 'makeBuddyList' to create a BuddyList.
  function makeBuddyList(
    name: string,
    buddies: Buddy[],
    admin?: Administrator
  ): BuddyList {
    return { // return a BuddyList object with following props
      name,
      members: buddies,
      administrator: admin,
    } as BuddyList;
    // The "AS" operator above casts an object to a specific type.
  }
  // Tests for makeBuddyList
  const myFootballBuddies = makeBuddyList(
    "Football team", // name of BuddyList
    [colleague1, friends[0], colleague2], //members
    colleague1 //admin
  )
  
  const myBandBuddies = makeBuddyList(
      "Band name", //name of BuddyList
      [colleague1, friends[1]] //members
      // No administrator
    )
  
  console.log(myFootballBuddies)
  console.log(myBandBuddies)
  //--------------------------------------

  //// Define a function 'findBuddyContact' to find contact information of a buddy in a BuddyList.
  function findBuddyContact(list: BuddyList, name: string): string | undefined {
    for (const buddy of list.members) { //interate through each buddy of the provided lists members
      if (buddy.name === name) { // checking if name is in the list of members
        if ("phone" in buddy) { // if it has a phone property, return it
          return buddy.phone;
        }
        else { // else return email
          return buddy.contact.email;
        }
      }
      return undefined; // if nothing found, return undefined to indicate no match
    }
  }
  // Test for findBuddyContact.
  console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Ralph Graham"));

  
    
// Define a function 'getBuddyListFriends' to extract friends from a BuddyList using 'reduce'.
function getBuddyListFriends(list: BuddyList): Friend[] {
    // Use the 'reduce' method to accumulate friends from the 'members' array of the 'BuddyList'.
    const friendsInList = list.members.reduce((accumulator: Friend[], member) => {
        // Check if 'member' is a 'Friend' (implements the 'Friend' interface).
        if ("age" in member) {
            accumulator.push(member as Friend); // Cast 'member' to 'Friend' and add it to the accumulator.
        }
        return accumulator;
    }, [] as Friend[]);

    return friendsInList; // Return the array of friends.
}

console.log("My Football Buddies are: ")
console.log(getBuddyListFriends(myFootballBuddies))
console.log("My Band Buddies are: ")
console.log(getBuddyListFriends(myBandBuddies))

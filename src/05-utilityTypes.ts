import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial, EventPass } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}

console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}))

function secureFindFriends(
    friends: Friend[],
    criteria: (f: Friend) => boolean
  ): SecureFriendContact[] {
    const matches = friends.filter(criteria);
    return matches.map((f) => {
      const secure: SecureFriendContact = {
        name: f.name,
        phone: f.phone,
      };
      return secure;
    });
  }
  let result = secureFindFriends(
      friends,
      (f: Friend) => f.age < 30
  )
  console.log(result)
  //result[0].phone = '08654321'

  console.log("generateEventPass")
  function generateEventPass(colleague: Colleague): EventPass {
    const passCode = Math.round(Math.random() * (1000 - 1) + 1);
    return {
      name: colleague.name,
      department: colleague.department,
      passCode: passCode,
    };
  }
  console.log(generateEventPass(colleagues.current[0]));

  //Define the intersection function that finds common friends and colleagues.
function intersection(
    friends: Friend[], // Array of Friend objects
    colleagues: Colleague[] // Array of Colleague objects
  ): (Friend & { contact: { email: string; extension: number } })[] {
    // Initialize the result array with the specified type.
    let result: (Friend & { contact: { email: string; extension: number } })[] = [];
  
    // Use the reduce function to iterate over the friends array.
    result = friends.reduce((res, friend) => {
      // Find a colleague with the same name as the current friend.
      const colleague = colleagues.find((col) => col.name === friend.name);
      if (colleague) {
        // If a colleague is found, the person is both a Friend and a Colleague.
        // Add a new object to the result array, combining properties from both types.
        res.push({
          ...friend,
          contact: {
            // Include contact details from the colleague.
            email: colleague.contact.email,
            extension: colleague.contact.extension,
          },
        });
      }
      return res; // Return the accumulated result array.
    }, result);
  
    // Return the final result array containing common friends and colleagues.
    return result;
  }
  
  
  console.log("intersection")
  console.log(intersection(friends, colleagues.current));
  

  
export interface Friend {
    name: string;
    phone: string;
    dob? : Date //new
    age: number
    interests? :string[] // new
}

export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

  export interface ColleagueHistory {
    current: Colleague[],
    former: Colleague[]
  }

  export interface EmailContact {
    name: string;
    email: string
}

export type Department = "Engineering" | "Finance" | "HR";
export interface ColleagueV2 {
  name: string;
  department: Department;    // *****
  contact: {
    email: string;
    extension: number;
    slack?: string;
  };
}

export type Buddy = Friend | ColleagueV2;
export type Administrator = Buddy | string | undefined

export type BuddyList = {
  name: string;
  administrator: Administrator;
  members: Buddy[];
};

//Partial<T> utility type in TypeScript is used to make all properties of type T optional.
export type FriendPartial = Partial<Friend> 
// Type for gaining access to an event, e.g. concert
//Omit<T, K> utility type is used here. It creates a type by excluding the specified keys K from the type T.
export type EventPass = Omit<Colleague, "contact"> & {
  passCode : number;
}
//  Readonly<T> utility type is used to make all properties of T read-only.
// Pick<T, K> utility type is used to create a type by picking only the specified properties K from the type T.
export type SecureFriendContact = Readonly<Pick<Friend,"name" | "phone" > >

export type ColWithoutType = Omit<Colleague, "department"> & {
}
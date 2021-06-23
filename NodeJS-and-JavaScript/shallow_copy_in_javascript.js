/*
Shallow Copying Objects:

An Object can be considered as Shallow Copied when a 
separate copy of top-level value type properties is
assigned to the new Object and the properties that 
represent an object are copied by reference to the destination folder.

Summary for Shallow Copy:
Destination object contains a separate copy of name, age, and designation.
Reference of Complex Object is copied to Destination Object.

Disadvantages of Shallow Copy:

The problem with shallow copy 
is that, if the user makes changes
to the complex object (update street 
property of address object) of the
source object (userName), it is 
also reflected in the Destination
Object, since it points to the 
same memory address.

Shallow copy can be perfomed using the following methods:-
1. arr1.slice()
2. arr1.concat()
3. spread operator(...)
4. Object.create({},obj)
5. Array.from(arr1)

Eg.
*/
let shallowArr = [123, "bob", true, null, undefined];

let deepArr = [
  123,
  "bob",
  true,
  ["Hank", "Brent", "Lacy"],
  { River_Type: "Dog River", Wilcox: "Wooleerton" },
];
let deepObj = {
  characters: ["Wanda", "Davis", "Emma", "Karen"],
  places: ["corner gas", "ruby", "foo mart"],
  grade68: false,
  seasons: 5,
};

let s = "steve";
let g = s;
s = "new value";
console.log(s, g);

let arr = shallowArr;
shallowArr[0] = 456;
console.log(arr, shallowArr);

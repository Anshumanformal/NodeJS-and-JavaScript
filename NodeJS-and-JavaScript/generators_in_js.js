//Generators in JS.

// Syntax: function* <function_name>(<optional_parameter>){
            // yield <iterator>;
            // increment iterator.
// }

function* numbersGen(){
    let i=0;
    while(true){
        yield i++;
        // yield (i++).toString();  //To get output as string.
    }
}
const gens = numbersGen();
console.log(gens.next());
console.log(gens.next());
console.log(gens.next().value);  //To get only value from the iterator.
console.log(gens.next().done);  //To only get the status of completion from the iterator.

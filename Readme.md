1.
    (a) var: Function-scoped, hoisted, can be re-declared and reassigned.

        Example: 

            var a = 10;
            var a = 20; // ✅ re-declared
            a = 30;     // ✅ reassigned
            console.log(a); // 30
    
    (b) let: Block-scoped, hoisted (TDZ), cannot be re-declared in same scope but can be reassigned.

        Example: 

            let b = 10;
            // let b = 20; // ❌ Error: already declared
            b = 30;       // ✅ reassigned
            console.log(b); // 30

    (c) const: Block-scoped, hoisted (TDZ), cannot be re-declared or reassigned.

        Example: 

            const c = 10;
            // c = 20; // ❌ Error: reassignment not allowed
            console.log(c); // 10

            const arr = [1, 2, 3];
            arr.push(4); // ✅ allowed (mutation)
            console.log(arr); // [1, 2, 3, 4]

2.
    (a) map(): Creates a new array by applying a function to each element.

        Example: 

            const nums = [1, 2, 3];
            const doubled = nums.map(n => n * 2);
            console.log(doubled); // [2, 4, 6];


    (b) forEach(): Executes a function for each element but returns nothing.

        Example: 

            const nums = [1, 2, 3];
            nums.forEach(n => console.log(n * 2)); // 2, 4, 6


    (c) filter(): Creates a new array with elements that pass a condition.

        Example: 

                const nums = [1, 2, 3, 4, 5];
                const evens = nums.filter(n => n % 2 === 0);
                console.log(evens); // [2, 4];


3. An arrow function is shorter than default function. It's give us a clean way to write function.

        Example: 

            const add = (a, b) => a + b;
            console.log(add(2, 3)); // 5


4. Destructuring মানে হলো array বা object থেকে মান আলাদা করে ভ্যারিয়েবলে নেওয়া, খুব কম কোডে।
Destructuring means separating values ​​from an array or object and taking them into variables, with very little code.

    Example: Array Destructuring

        const numbers = [10, 20, 30];

        const [a, b, c] = numbers;

        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30


5. Template literals are easy to write our code and it's also help us to write a clean code.
    it's use backticks (``) and ${}

    Example: 

        const name = "Shamim";
        const age = 22;

        const info = "My name is " + name + " and I am " + age + " years old.";
        console.log(info);
        // Output: My name is Shamim and I am 22 years old.










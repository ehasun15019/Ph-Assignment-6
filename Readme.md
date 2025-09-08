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



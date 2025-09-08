1.
    (a) var: Function-scoped, hoisted, can be re-declared and reassigned.

        Example: 

            var a = 10;
            var a = 20; // ✅ re-declared
            a = 30;     // ✅ reassigned
            console.log(a); // 30

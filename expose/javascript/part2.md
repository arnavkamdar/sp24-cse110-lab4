1. Line 12 will log the number 3 to the console. This happens because `var` is within the scope of the function (not just the for-loop), so `i` is initialized to 0, changed to 3 in the loop, and then logged as 3 on line 12.
2. Line 13 will log the number 150 to the console. This is because `discountedPrice` is declared with a `var` scope in the first iteration of the for loop, and then overwritten with each successive iteration. At the last iteration, it is changed to 300 * 0.5 = 150. Thus, the console logs 150.
3. Line 14 will log the number 150 to the console. This is because `finalPrice` is declared within the scope of the function, and is updated just as `discountedPrice` is. At the last iteration, it is changed to 300 * 0.5 = 150. Thus, the console logs 150.
4. The function returns a list of the discounted prices `[50, 100, 150]`. Even though the array is initialized within the function, it is transferred to global memory as it is returned by the function.
5. Line 12 will throw an error, as we are attempting to log the variable `i` which is defined in the scope of the for-loop (since it is initialized using the keyword `let`). `i` ceases to exist when the for loop terminates, so the machine cannot print out its value, causing an error.
6. Line 13 will throw an error, as we are attempting to log the variable `discountedPrice` which is defined in the scope of the for-loop, just as `i` was above. 
7. Line 14 will log the number 150 to the console. This is because `finalPrice` is declared within the scope of the function (based on what code block it is in), and is updated within the loop to be 300 * 0.5. Thus, the console logs 150.
8. The function returns a list of the discounted prices `[50, 100, 150]`. Even though the array is initialized within the function, the return value is stored in the scope of the caller, not the callee.
9. Line 11 will throw an error, as we are attempting to log the variable `i` which is defined in the scope of the for-loop (since it is initialized using the keyword `let`). `i` ceases to exist when the for loop terminates, so the machine cannot print out its value, causing an error.
10. Line 12 will log the number 3, since this is what `length` is initialized to (the length of the prices array). Since `length` is initialized as a const, it has the scope of the code block that it is defined in (i.e. the function), which means it can be accessed at line 12.
11. The function returns a list of the discounted prices `[50, 100, 150]`. Even though the array is initialized within the function as a `const` and it is changed from its initial state, the variable `discounted` is not reassigned at any point. The `push` operation which changes the array is not illegal as it does not reassign the variable to anything else, merely modifies the contents pointed to by it. Thus, the function works as normal.
12. A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseload[0]
13. A. **Output: '32'**
       Explanation: 2 is converted to a string since the machine interprets + as concatenation (since it appears after the string).
    B. **Output: 1**
       Explanation: 3 is converted to an integer since - is not a string operation and an integer appears after it. Thus, the machine performs 3 - 2 = 1.
    C. **Output: 3**
       Explanation: `null` is converted to 0 when it is converted to an integer, since it is added to 3. 
    D. **Output: '3null'**
       Explanation: `null` is converted to "null" when it is converted to a string, since it is concatenated to '3'.
    E. **Output: 4**
       Explanation: `true` is converted to 1 when it is converted to an integer, since it is added to 3.
    F. **Output: 0**
       Explanation: `false` and `null` can both be cast to integers. When the machine sees the "+" symbol, it does so and converts `false` and `null` to 0 each. 0 + 0 = 0. 
    G. **Output: '3undefined'**
       Explanation: `undefined` is converted to the string "undefined" when it is concatenated with '3'.
    H. **Output: NaN**
       Explanation: `undefined` is converted to NaN when it is cast to an integer, which happens since it is subtracted from '3' which is also cast to the integer 3. 3 - NaN = NaN (not defined). 
14. A. **Output: true**
       Explanation: String 2 is cast to the integer 2, which is greater than 1.
    B. **Output: false**
       Explanation: Both are strings, and the string '2' appears after '12' lexicographically, so '2' > '12'. Hence '2' < '12' is false.
    C. **Output: true**
       Explanation: '2' is cast to an integer when it is compared, and 2 == 2.
    D. **Output: false**
       Explanation: This is a strict equality check, which also type-checks. Since '2' and 2 are of different types, this leads to the comparison returning false.
    E. **Output: false**
       Explanation: The numeric value of `true` is 1, so `true` is type cast to 1. 1 != 2. 
    F. **Output: true**
       Explanation: Due to boolean coercion, Boolean(2) is evaluated as true, since the Boolean() operator evaluates all non-zero numbers as being "truthy". Since true and Boolean(2) are also of the same type (boolean), the strict equality check holds.
15. The `==` operator simply checks equality while allowing type casting, so `'2' == 2` would be true, as '2' is type-cast to 2. However, the `===` is a strict equality operator which does not allow type casting, so `'2'===2` would be false.
16. Please see the answer [here](./part2-question16.js)
17. Here, when we call the function using `modifyArray([1,2,3], doSomething)`, the result will be `[2,4,6]`. This is because we are passing in the array `[1,2,3]` as a parameter to `modifyArray`, then `modifyArray` calls the callback, i.e. `doSomething`, which is also passed in as a parameter, on each element of the array. `doSomething` doubles the number that is inputted to it, so the array `[1,2,3]` is modified to `[2,4,6]`.
18. Please see the answer [here](./part2-question18.js)
19. This code prints out the numbers `1` and `4` immediately, and then prints `3` after a delay of 0 milliseconds (so immediately after the previous numbers are printed), and then prints the number `2` after a delay of 1000 milliseconds or 1 second. The delay is applied as it is run, so it technically executes 1 second after `1` is printed. 
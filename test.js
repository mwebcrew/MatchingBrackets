let isMatchingBrackets = function (str) {
    let stack = [];
    let map = {
        '': '',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {

        // If character is an left paranthesis or a blank add it to a stack
        if (str[i] === '' || str[i] === '{' ) {
            stack.push(str[i]);
        }
        //  If that character is a closing parenth, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        else {
            let last = stack.pop();

            //If the popped element from the stack, which is the last left parenth doesn’t match the corresponding closing parenthesis
            // in the map, then return false
            if (str[i] !== map[last]) {return false};
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
        if (stack.length !== 0) {return false};

    return true;
}

console.log(isMatchingBrackets("{}")); // returns true
console.log(isMatchingBrackets("{}")); // returns true
console.log(isMatchingBrackets("}{"));  // returns false
console.log(isMatchingBrackets("{{}"));  // returns false

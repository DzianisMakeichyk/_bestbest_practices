//https://github.com/airbnb/javascript#types
// bad
inbox.filter((msg) => {
    const { subject, author } = msg;
if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
} else {
    return false;
}
});

// good
inbox.filter((msg) => {
    const { subject, author } = msg;
if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
}

return false;
});

////////////////////////////////

// bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

////////////////////////////////

const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;

////////////////////////////////

// bad
function foo() {
    // ...
}

// bad
const foo = function () {
    // ...
};

// good
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
    // ...
};

////////////////////////////////

// bad
if (currentUser) {
    function test() {
        console.log('Nope.');
    }
}

// good
let test;
if (currentUser) {
    test = () => {
        console.log('Yup.');
    };
}

////////////////////////////////

// bad
function f1(obj) {
    obj.key = 1;
}

// good
function f2(obj) {
    const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}

////////////////////////////////

// bad
[1, 2, 3].map(x => {
    const y = x + 1;
return x * y;
});

// good
[1, 2, 3].map((x) => {
    const y = x + 1;
return x * y;
});

////////////////////////////////

// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;

////////////////////////////////

// good
function cats() {
    if (x) {
        return x;
    }

    if (y) {
        return y;
    }
}

////////////////////////////////

// bad
const sidebar = $('.sidebar');

// good
const $sidebar = $('.sidebar');

////////////////////////////////


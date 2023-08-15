// Get date and time

// when you will be 1000000000000 old

const d=new Date();
console.log(d);

console.log(d.getFullYear());
console.log(d.getMonth()+1);
console.log(d.getDate());
console.log(d.getMinutes());

// custom date format;
console.log(`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`);


console.log(new Intl.DateTimeFormat('default').format(d));

console.log(new Intl.DateTimeFormat('en-IN',{day:'numeric'}).format(d));
console.log(d.toLocaleString());

console.log(new Intl.DateTimeFormat('en-US',{day:'numeric'}).format(d));


let x =d.toLocaleString('default',{
    year:'numeric',
    day:'numeric',
    timeZone:'Australia/Sydney',
    month:'long'
});

console.log(x);
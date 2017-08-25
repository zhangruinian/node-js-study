let buf = Buffer.alloc(4)
console.log(buf);

let buf1 = Buffer.alloc(5, 1)
console.log(buf1);

let buf2 = Buffer.from([1,2,'人民的'])
console.log(buf2);

let buf3 = Buffer.from("hello wor" +
    "ld", 'ascii')
console.log(buf3);

console.log(buf3.toString('utf-8'));


let Even = [];
let Odd = [];

for (let id = 1; id <= 100; id++) {
  if (id % 2 === 0) {
    Even.push(id);
  } else {
    Odd.push(id);
  }
}

console.log(Even);
console.log(Odd);

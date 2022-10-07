const numArray = [1,2,3,4,5,6,7,8,9,10]

const oddNumbers = numArray.filter(elem => elem %2 === 1);
console.log(oddNumbers);

const div2or5 = numArray.filter(elem => (elem % 3 ===0)||(elem% 5 ===0));
console.log(div2or5);

const div3thenSquare = numArray.filter(elem => elem % 3 ===0).map(elem => elem**2);
console.log(div3thenSquare);

const complex = numArray.filter(elem => elem % 2 ===0).map(elem => elem**2).reduce((tot, elem) => tot + elem, 0);
console.log(complex);
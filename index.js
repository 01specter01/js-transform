const text = "  Lorem Ipsum Dolor sit amet.    ";

console.log(text);
console.log(text.toLocaleLowerCase());
console.log(text.toLocaleUpperCase());

console.log(text.length);

console.log(text.substring(2, 13));
console.log(text.substring(14));

console.log(text.trim().length); // keine lehrzeichen vorne hinten

console.log(text.trim().length, text.trim().toLocaleUpperCase());

const trimmedText = text.trim();
console.log(trimmedText.length);
console.log(trimmedText.toLocaleUpperCase());

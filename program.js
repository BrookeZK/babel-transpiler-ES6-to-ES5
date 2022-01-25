for (let i = 0; i < 3; i ++) {
  console.log("just console log:" + i);
}

for (let i = 0; i < 3; i ++) {
  setTimeout(() => console.log("setTimeout:" + i), 0);
}
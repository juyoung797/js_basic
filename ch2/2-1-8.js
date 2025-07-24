let myProfile = {
  name: "h662",
  age: 18,
  isRich: false,
};
console.log(myProfile);
console.log(typeof myProfile);

// 직렬화
let stringifiedMyProfile = JSON.stringify(myProfile);
console.log(stringifiedMyProfile);
console.log(typeof stringifiedMyProfile);


// 역직렬화
let parsedMyProfile = JSON.parse(stringifiedMyProfile);
console.log(parsedMyProfile);
console.log(typeof parsedMyProfile);
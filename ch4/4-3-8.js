function sayHello() {
  console.log("Hello,", this);
}

const user1 = {
  name: "j797",
  greet: sayHello,
};

const user2 = {
  name: "정주영",
  greet: sayHello,
};

sayHello();
user1.greet();
user2.greet();
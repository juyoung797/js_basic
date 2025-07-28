const myProfile = {
  name: "j797",

  normalFunc: function() {
    console.log(this.name);
  },

  arrowFunc: () => console.log(this.name),
};

myProfile.normalFunc();
myProfile.arrowFunc();
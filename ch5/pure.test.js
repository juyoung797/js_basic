const { filterActive } = require("./pure");

describe("filterActive", () => {
  it("should return only active users", () => {
    const users = [
      { name: "A", active: true },
      { name: "B", active: false },
      { name: "C", active: true },
    ];
    expect(filterActive(users)).toEqual([
      { name: "A", active: true },
      { name: "C", active: true },
    ]);
  });
});
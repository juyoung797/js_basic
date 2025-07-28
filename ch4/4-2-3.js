const x = 10;

function outer() {
  const y = 20;

  function inner() {
    console.log(x);
    console.log(y);
  }

  return inner;
}

const fn = outer();
fn();
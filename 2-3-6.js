const curry = (fn) => {
  const arity = fn.length;
  return function curried(...args) {
    if (args.length >= arity) {
      return fn(...args);
    }

    return (...more) => curried(...args, ...more);
  };
};

const fetchWithBase = curry((base, endpoint) => 
  fetch(`${base}/${endpoint}`).then((res) => res.json()));

const fetchJSONPlayholer = fetchWithBase(
  "https://jsonplaceholder.typicode.com"
);

fetchJSONPlayholer("users/1")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
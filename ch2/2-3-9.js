const curry = fn => a => b => fn(a, b);

function logger(level, msg) {
    console.log(`[${level.toUpperCase()}] ${msg}`);
}

const info = curry(logger)("info");
const error = curry(logger)("error");

info("Server started");
error("Unexpected error");
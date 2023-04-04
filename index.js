function receivesAFunction(cb) {
  cb();
}

function returnsANamedFunction() {
  let namedFn = function() {

  }

  return namedFn;
}

function returnsAnAnonymousFunction() {
  return function() {};
}
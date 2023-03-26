const receivesAFunction = (spy) => {
  spy();
};

const returnsANamedFunction = () => {
  const namedFn = () => {
    return "somethings"
  };
  return namedFn
};

const returnsAnAnonymousFunction = () => {
  return () => "Hey!";
};

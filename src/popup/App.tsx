import { Fragment, h } from "preact";
import { useState } from "preact/hooks";

export const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Fragment>
      <h1>Hello {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </Fragment>
  );
};

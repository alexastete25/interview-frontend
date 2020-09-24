import React from 'react';

/* THE FIX STARTS HERE */

// Counter Component
// const Counter = ({ value, onIncrement, onDecrement, id}) => {

//   return (
//     <div className="d-flex my-2">
//       <strong>{value}</strong>
//       <div className="ml-2">
//         <button className="btn btn-danger mr-1" onClick={() => {onDecrement(id, 1);}}>-</button>
//         <button className="btn btn-success" onClick={() => {onIncrement(id, 1);}}>+</button>
//       </div>
//     </div>
//   );
// };

// Counter Component copy
const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 }
]
const VALUE_TO_INCREMENT = 1

const Counter = ({ value, onChange, id }) => {
  return (
    <div className="d-flex my-2">
      <strong>{value}</strong>
      <div className="ml-2">
        <button className="btn btn-danger mr-1" onClick={() => { onChange().decrement(id, VALUE_TO_INCREMENT); }}>-</button>
        <button className="btn btn-success" onClick={() => { onChange().increment(id, VALUE_TO_INCREMENT); }}>+</button>
      </div>
    </div>
  );
};

// GroupOfCounters Component
const GroupOfCounters = () => {

  const [counters, setcounters] = React.useState(data);

  const [total, setTotal] = React.useState(0);

  const onIncrement = (addToIncrement) => {
    setTotal(total + addToIncrement);
  };
  const onDecrement = (addToDecrement) => {
    setTotal(total - addToDecrement);
  };

  // const onIncrement = (id, addToIncrement) => {
  //   setcounters(
  //     counters.map((counter) => 
  //       counter.id === id ? {...counter, value: counter.value + addToIncrement} : counter
  //     )
  //   )
  //   onIncrement (addToIncrement);
  // }

  // const onDecrement = (id, addToDecrement) => {
  //   setcounters(
  //     counters.map((counter) => 
  //       counter.id === id ? {...counter, value: counter.value - addToDecrement} : counter
  //     )
  //   )
  //   onDecrement(addToDecrement);
  // } 

  const onChange = () => {
    return {
      increment: function (id, addToIncrement) {
        setcounters(
          counters.map((counter) =>
            counter.id === id ? { ...counter, value: counter.value + addToIncrement } : counter
          )
        )
        onIncrement(addToIncrement);

      },

      decrement: function (id, addToDecrement) {
        setcounters(
          counters.map((counter) =>
            counter.id === id ? { ...counter, value: counter.value - addToDecrement } : counter
          )
        )
        onDecrement(addToDecrement);
      }
    }
  }

  return (
    <div>
      {counters.map((counter) => (
        <div key={counter.id}>
          <Counter value={counter.value}
            // onIncrement = {onIncrement}
            // onDecrement = {onDecrement}
            onChange={onChange}
            id={counter.id} />
        </div>
      ))}
      <Total total={total} />

    </div>
  );
};

// Total Component
const Total = ({ total }) => {
  return (
    <strong>Total: {total}</strong>
  )
}

/* THE FIX ENDS HERE */

const Exercise02 = () => {
  return (
    <div className="container">
      <h2>Instructions</h2>

      <p>
        There are 2 components in this file: <strong>Counter</strong> and{' '}
        <strong>GroupOfCounters</strong>. The steps below will take you through
        modifying and adding components to change functionality and
        implementation.
      </p>

      <ol>
        <li>
          Update the <strong>Counter</strong> component to take{' '}
          <strong>onIncrement</strong> and <strong>onDecrement</strong>{' '}
          callbacks as props and ensure they update the counter's values
          independently. Each callback should take a single, integer value as a
          parameter which is the amount to increment the counter's existing
          value by.
        </li>

        <li>
          Move the global <strong>counters</strong> array to the component state for
          the <strong>GroupOfCounters</strong> component.
        </li>

        <li>
          Render a fourth <strong>Counter</strong> component and ensure it's
          value is updated independently from the others.
        </li>

        <li>
          Create a <strong>Total</strong> component, which should display below
          the <strong>Counter</strong> components and always display the running
          total of all the <strong>Counter</strong> values.
        </li>

        <li>
          Make a copy of the <strong>Counter</strong> component, saving the
          original so you're instructor can view it later. Then do the
          following:
          <ol>
            <li>
              Remove the <strong>onIncrement</strong> and{' '}
              <strong>onDecrement</strong> props from the (new){' '}
              <strong>Counter</strong> component
            </li>
            <li>
              Add a single <strong>onChange</strong> callback prop that takes a
              single integer parameter — the new value for the counter.
            </li>
            <li>
              Ensure all <strong>Counter</strong> components still update and
              function independently after this change.
            </li>
          </ol>
        </li>
      </ol>

      <hr className="my-5" />
      <GroupOfCounters />
    </div>
  );
};

export default Exercise02;
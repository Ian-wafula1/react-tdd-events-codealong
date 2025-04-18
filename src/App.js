import { useState } from "react";

function App() {

  const [checked, setChecked] = useState(false)
  function handleClick(e) {
    setChecked(checked => !checked)
  }
	return (
		<div>
			<h1>Select Pizza Toppings</h1>
			<input type="checkbox" id="pepperoni" checked={checked} aria-checked={checked} onChange={handleClick} />
			<label htmlFor="pepperoni">Add pepperoni</label>

			<h2>Your Toppings:</h2>
			<ul>
				<li>Cheese</li>
        {checked? <li>Pepperoni</li>: null}
			</ul>
		</div>
	);
}

export default App;

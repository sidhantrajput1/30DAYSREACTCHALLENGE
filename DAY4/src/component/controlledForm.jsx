import { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value); // update state with input value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

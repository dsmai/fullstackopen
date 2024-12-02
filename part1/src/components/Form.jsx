import React, { useState } from "react";

const Form = () => {
  const [toPerson, setToPerson] = useState("Bi");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert(`You send ${message} to ${toPerson}`);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          To:{" "}
          <select
            value={toPerson}
            onChange={(e) => setToPerson(e.target.value)}
          >
            <option value="Bi">Bi</option>
            <option value="Miu">Miu</option>
            <option value="Binh">Binh</option>
          </select>
        </label>
      </div>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div>
        <button type="submit">Send message</button>
      </div>
    </form>
  );
};

export default Form;

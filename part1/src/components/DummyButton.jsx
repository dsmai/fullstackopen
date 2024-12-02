import React, { useState } from "react";

const DummyButton = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default DummyButton;

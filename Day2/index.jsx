// Concepts Covered (React Day 2)

// 1 -> JSX

// 2 -> Functional Components

// 3 -> Props

// 4 -> useState Hook

// 5 -> Event Handling (onClick)

// 6 -> Conditional Rendering

// 7 -> Component Reusability

// App.js
// React Day 2 – Single File Example
// Covers: JSX, Components, Props, State, Events, Conditional Rendering

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

/*Child Component (Props)*/
function Student(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>Name: {props.name}</h3>
      <p>Course: {props.course}</p>
      <p>Status: {props.isActive ? "Active" : "Inactive"}</p>
    </div>
  );
}

/*Main App Component*/
function App() {
  // State
  const [count, setCount] = useState(0);
  const [showStudents, setShowStudents] = useState(true);

  // Event Handlers
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Day 2 Practice 🚀</h1>

      {/* State & Events */}
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease} style={{ marginLeft: "10px" }}>
        Decrease
      </button>

      <hr />

      {/* Conditional Rendering */}
      <button onClick={() => setShowStudents(!showStudents)}>
        {showStudents ? "Hide Students" : "Show Students"}
      </button>

      {showStudents && (
        <>
          <h2>Student List (Props Example)</h2>

          <Student name="Baba" course="React JS" isActive={true} />
          <Student name="Ayaan" course="JavaScript" isActive={false} />
          <Student name="Sara" course="Frontend" isActive={true} />
        </>
      )}
    </div>
  );
}

/*React DOM Render*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

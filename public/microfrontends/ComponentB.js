import React from "react";
import ReactDOM from "react-dom";

function ComponentB() {
  return (
    <div style={{ padding: 20, background: "lightgreen" }}>
      This is Component B
    </div>
  );
}

export function bootstrap() {
  return Promise.resolve();
}

export function mount(props) {
  return new Promise((resolve) => {
    const container = document.createElement("div");
    container.id = "component-b-container";
    document.body.appendChild(container);

    ReactDOM.render(<ComponentB {...props} />, container);
    resolve();
  });
}

export function unmount() {
  return new Promise((resolve) => {
    const container = document.getElementById("component-b-container");
    if (container) {
      ReactDOM.unmountComponentAtNode(container);
      container.remove();
    }
    resolve();
  });
}

// microfrontends/ComponentB.js
// import React from "react";
// import ReactDOM from "react-dom";

// export function mount(props) {
//   const root = document.createElement("div");
//   document.body.appendChild(root);
//   ReactDOM.render(
//     <div>Hello from Component B, {props.name || "Guest"}!</div>,
//     root
//   );
//   return Promise.resolve();
// }

// export function unmount() {
//   const root = document.querySelector("div");
//   ReactDOM.unmountComponentAtNode(root);
//   document.body.removeChild(root);
//   return Promise.resolve();
// }

// export function bootstrap() {
//   return Promise.resolve();
// }

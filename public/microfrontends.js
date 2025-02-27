// import React from "react";
// import ReactDOM from "react-dom";

// // Component A
// function ComponentA() {
//   return (
//     <div style={{ padding: 20, background: "lightblue" }}>
//       This is Component A
//     </div>
//   );
// }

// // Component B
// function ComponentB() {
//   return (
//     <div style={{ padding: 20, background: "lightgreen" }}>
//       This is Component B
//     </div>
//   );
// }

// // Single-SPA Application
// const nextjsApp = {
//   bootstrap: () => Promise.resolve(),
//   mount: (props) => {
//     return new Promise((resolve) => {
//       const container = document.createElement("div");
//       container.id = "nextjs-app-container";
//       document.body.appendChild(container);

//       ReactDOM.render(<ComponentA {...props} />, container);
//       resolve();
//     });
//   },
//   unmount: () => {
//     return new Promise((resolve) => {
//       const container = document.getElementById("nextjs-app-container");
//       if (container) {
//         ReactDOM.unmountComponentAtNode(container);
//         container.remove();
//       }
//       resolve();
//     });
//   },
// };

// // Export the Single-SPA application
// export default nextjsApp;


import React from "react";
import ReactDOM from "react-dom";

// Component A
function ComponentA() {
  return (
    <div style={{ padding: 20, background: "lightblue" }}>
      This is Component A
    </div>
  );
}

// Single-SPA Parcel Configuration
export const AICenterComponent = {
  bootstrap: () => Promise.resolve(),
  mount: (props) => {
    return new Promise((resolve) => {
      const container = document.createElement("div");
      container.id = "ai-center-container";
      document.body.appendChild(container);

      ReactDOM.render(<ComponentA {...props} />, container);
      resolve();
    });
  },
  unmount: () => {
    return new Promise((resolve) => {
      const container = document.getElementById("ai-center-container");
      if (container) {
        ReactDOM.unmountComponentAtNode(container);
        container.remove();
      }
      resolve();
    });
  },
};
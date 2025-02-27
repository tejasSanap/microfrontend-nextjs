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

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// Component A
function ComponentA() {
  return (
    <div style={{ padding: 20, background: "lightblue" }}>
      This is Component A
    </div>
  );
}
function ComponentA2({ id }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("nextapp", id);
  useEffect(() => {
    // Ensure the id is provided before making the API call
    if (!id) {
      setError("No ID provided");
      setLoading(false);
      return;
    }

    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // Add 'id' as a dependency to refetch data when 'id' changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{
        padding: 20,
        background: "lightblue",
        maxHeight: "300px",
        overflow: "auto",
        maxWidth: "100%",
        wordWrap: "break-word",
      }}
    >
      <h2>Data for Post ID: {id}</h2>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
        }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
// Single-SPA Parcel Configuration
export const AICenterComponent = {
  bootstrap: () => Promise.resolve(),
  mount: (props) => {
    return new Promise((resolve) => {
      console.log("req to mount", props);
      // const container = document.createElement("div");
      // container.id = "ai-center-container";
      // document.body.appendChild(container);

      // ReactDOM.render(<ComponentA {...props} />, container);

      // //approach 2
      // const rootElement = document.getElementById("root");

      // if (rootElement) {
      //   // Create a new container for AICenterComponent instead of replacing root
      //   const aiContainer = document.createElement("div");
      //   aiContainer.id = "ai-center-container";

      //   // Append it as a child of the root (keeping existing content)
      //   rootElement.appendChild(aiContainer);

      //   // Render AICenterComponent into this new container
      //   ReactDOM.render(<ComponentA {...props} />, aiContainer);
      // }

      ReactDOM.render(<ComponentA2 {...props} />, props.domElement);

      resolve();
    });
  },
  update: (props) => {
    return new Promise((resolve) => {
      console.log("req to update", props);
      ReactDOM.render(<ComponentA2 {...props} />, props.domElement);
      resolve();
    });
  },
  unmount: () => {
    return new Promise((resolve) => {
      // const container = document.getElementById("ai-center-container");
      // // const container = document.getElementById("root");
      // if (container) {
      //   ReactDOM.unmountComponentAtNode(container);
      //   container.remove();
      // }

      ReactDOM.unmountComponentAtNode(props.domElement);
      resolve();
    });
  },
};

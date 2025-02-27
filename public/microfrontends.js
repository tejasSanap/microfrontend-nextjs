window.ComponentA = {
  bootstrap: () => Promise.resolve(),
  mount: (props) =>
    import("./microfrontends/ComponentA.js").then((mod) => mod.mount(props)),
  unmount: () =>
    import("./microfrontends/ComponentA.js").then((mod) => mod.unmount()),
};

window.ComponentB = {
  bootstrap: () => Promise.resolve(),
  mount: (props) =>
    import("./microfrontends/ComponentB.js").then((mod) => mod.mount(props)),
  unmount: () =>
    import("./microfrontends/ComponentB.js").then((mod) => mod.unmount()),
};

// const createApp = (name) => ({
//   bootstrap: () => Promise.resolve(console.log(`${name} bootstrapped`)),
//   mount: () => Promise.resolve(console.log(`${name} mounted`)),
//   unmount: () => Promise.resolve(console.log(`${name} unmounted`)),
// });

// window.ComponentA = createApp("ComponentA");
// window.ComponentB = createApp("ComponentB");

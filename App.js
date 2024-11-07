const parent = 
React.createElement(
"div",
     { id:"parent" }, 
    [ React.createElement(
        "div",
        { id:"child 1" },
        [
        React.createElement("h1", {}, "Hello am an h1 tag"),
        React.createElement("h2", {}, "Hello am an h2 tag")
        ]
        ), React.createElement(
            "div",
            { id:"child 2" },
            [
            React.createElement("h1", {}, "Hello am an h1 tag"),
            React.createElement("h2", {}, "Hello am an h2 tag")
            ]
            )]
    );
    console.log(parent);  //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

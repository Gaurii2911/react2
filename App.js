//<div id="parent">
//   <div id="child">
//        <h1>"I am H1 tag"</h1>
//    </div>
//</div>

const parent= React.createElement
("div",
    {id: "parent"},
    React.createElement("div",
        {id: "child"},
        React.createElement("h1",
            {},"I am H1 tag")));


//<div id="parent2">
//   <div id="child2">
//        <h1>"I am H1 tag"</h1>
//        <h1>"I am also H1 tag"</h1>
//    </div>
//</div>

const parent2=React.createElement("div" ,{id: "parent2"},
       React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I am an H1 tag"),
         React.createElement("h1",{},"I am also an H1 tag")
        ]
       )

);

//<div id="parent3">
//   <div id="child3">
//        <h1>"I am H1 tag"</h1>
//        <h1>"I am also H1 tag"</h1>
//    </div>
//   <div id="child4">
//        <h1>"I am H1 tag"</h1>
//        <h1>"I am also H1 tag"</h1>
//    </div>

//</div>

const parent3=React.createElement("div",{id:"parent3"},
   [ React.createElement("div",{id: "child3"},
        [React.createElement("h1",{},"I am an H1 tag"),
         React.createElement("h1",{},"I am also an H1 tag")
        ]   
    ),
    React.createElement("div",{id: "child4"},
        [React.createElement("h1",{},"I am an H1 tag"),
         React.createElement("h1",{},"I am also an H1 tag")
        ]   
    )]
);


//for heading part
const heading=React.createElement("h2",{id : "heading"},"Hello from React");
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent3);
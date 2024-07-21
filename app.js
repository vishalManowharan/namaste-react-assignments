import React from "react";
import ReactDOM from "react-dom";

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     [
//         React.createElement(
//             "h1",
//             {},
//             "h1 Nested Hello world"
//         ),
//         React.createElement(
//             "h2",
//             {},
//             "h2 Nested hello world"
//         )
//     ]
// )
// const Heading = () => {
//     return <h1>Another Component</h1>
// }
// const Title = () => (
//   <div className="title">
//     <Heading />
//     {<Heading />}
//     {<Heading></Heading>}

//     <h1>heading 1</h1>
//     <h2>heading 2</h2>
//     <h3>heading 3</h3>
//   </div>
// );

const Header = () => {
    return (
        <div class="container">
        <img id="logo" src="https://www.w3schools.com/tags/img_girl.jpg" alt="logo" />
        <input type="text" id="inputTag" placeHolder="Search here"/>
        <img id="userIcon" src="https://www.w3schools.com/tags/img_girl.jpg" alt="user icon"/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from javaScript");
// React.createElement will return an object 
// heading object will contain some props such as attributes(id,xyz) and children("Hello world from javaScript")

const root = ReactDOM.createRoot(document.getElementById("root"));
//it will create a root element which will be used to render all the elements of our webpage
root.render(heading);
// here aor heading object will be converted to the particular html tag and will be rendered in the root element
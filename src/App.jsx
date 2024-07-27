import CarouselComponent from "./component/Carousel";
import FormComponent from "./component/FormComponent";
import ScrollComponent from "./component/ScrollComponent";
import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-3 gap-2 mt-4">
      <div className="border-2 b-4 p-2 h-full">
        <CarouselComponent />
      </div>
      <div className="border-2 b-4 p-2 h-full">
        <FormComponent />
      </div>
      <div className="border-2 b-4 p-2 h-full">
        <ScrollComponent />
      </div>
    </div>
  );
}

export default App;

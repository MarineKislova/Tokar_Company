//data
import residentBuilding from "../../data/residentData";
//styles
import "./app.css";

function App() {
  const resident = residentBuilding;
  return (
    <div className="App">
      <h1>Resident Building</h1>
      <div className="residence">
        {resident.map((building, id) => (
          <div key={id}>
            <h2>{building.name}</h2>
            <p>{building.cost}</p>
            {building.photos.map((photo) => (
              <img className="residence__photo" key={photo.id} src={photo.src} alt={photo.alt} loading="lazy" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

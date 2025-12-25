import "./Darkflower.css";
import darkData from "./data/Darkflower.json";

export default function Darkflower() {
  return (
    <div className="Darkmain">
      {darkData.map((flower, index) => (
        <div
          key={flower.id}
          className={`Darkcard Dark${index + 1}`}
        >
          <div className="Darkoverlay">
            <span className="Darkseason">{flower.season}</span>
            <h2 className="Darkname">{flower.name}</h2>
            <p className="Darkdescription">{flower.description}</p>

            <div className="Darkmeta">
              <span>{flower.origin}</span>
              <span>{flower.colors.join(" · ")}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

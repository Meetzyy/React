import "./Lightflower.css";
import lightData from "./data/Lightflower.json";

export default function Lightflower() {
  return (
    <div className="Lightmain">
      {lightData.map((flower, index) => (
        <div
          key={flower.id}
          className={`Lightcard Light${index + 1}`}
        >
          <div className="Lightoverlay">
            <span className="Lightseason">{flower.season}</span>
            <h2 className="Lightname">{flower.name}</h2>
            <p className="Lightdescription">{flower.description}</p>

            <div className="Lightmeta">
              <span>{flower.origin}</span>
              <span>{flower.colors.join(" · ")}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

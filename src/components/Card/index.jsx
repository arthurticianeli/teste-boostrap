import "./style.css";

export function Card({ title, image, text }) {
  return (
    <div className="card custom-card">
      <img
        src={image}
        className="card-img-top custom-card-img-top"
        alt="IMAGEM"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

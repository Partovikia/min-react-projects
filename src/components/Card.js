import StarLog from "../img/Star 1-1.png";

export default function Card(props) {
  console.log(props.openspots);
  let badgeText;
  if (props.openspots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../img/${props.img}`} className="card--image" />
      <div className="card--stats">
        <img src={StarLog} className="card--star" />
        <span>{props.rating}</span>
        <span>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>From {props.price}</p>
    </div>
  );
}

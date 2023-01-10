export default function Card(props) {
  return (
    <article className="card">
      <div className="media">
        <img src={`../assets/${props.item.imageUrl}`} alt="" />
        <img src={`images/${props.item.imageUrl}`} alt={props.item.location} />
      </div>
      <div className="media-info">
        <div className="top-header">
          <span className="place">{props.item.location}</span>
          <a href={props.item.googleMapsUrl} target="_blank">
            view on GoogleMap
          </a>
        </div>
        <h1 className="title">{props.item.title}</h1>
        <span className="date">
          {props.item.startDate} - {props.item.endDate}
        </span>
        <p className="desc">{props.item.description}</p>
      </div>
    </article>
  );
}

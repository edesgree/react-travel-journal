import countryImg from '../assets/country.png';

export default function Card() {
  return (
    <article className="card">
      <div className="media">
        <img src={countryImg} alt="" />
      </div>
      <div className="media-info">
        <div className="top-header">
          <span className="place">Japan</span>
          <a href="">view on GoogleMap</a>
        </div>
        <h1 className="title">Country</h1>
        <span className="date">12 Jan, 2021 - 24 Jan, 2021</span>
        <p className="desc">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}

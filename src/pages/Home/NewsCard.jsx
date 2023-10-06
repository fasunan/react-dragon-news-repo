import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, details, _id } = news;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={thumbnail_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {details.length ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
                Read More...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;

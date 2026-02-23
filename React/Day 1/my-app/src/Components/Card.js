
const Card = ({ title, description, image, price })  => {
  return (
    <div className="card shadow-sm h-100">
      <img src={image} className="card-img-top" alt={title} />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description}</p>

        <div className="mt-auto">
          <h6 className="text-primary fw-bold">₹ {price}</h6>
          <button className="btn btn-success w-100 mt-2">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
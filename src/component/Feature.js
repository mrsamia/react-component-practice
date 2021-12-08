import "../style/feature.css";

function Feature({ h3 = "", p = "", img = "", isLeft = false }) {
  return (
    <div>
      <div className="row d-flex align-items-center">
        {isLeft == true && (
          <div className="col-6 pt-5">
            <img className="img_size" src={img} />
          </div>
        )}

        <div className="col-6 pt-5 ">
          <div>
            <h3 className="text-center">{h3}</h3>
          </div>
          <div>
            <p>{p}</p>
          </div>
        </div>

        {isLeft == false && (
          <div className="col-6 pt-5">
            <img src={img} />
          </div>
        )}
      </div>

      {/* {isLeft && <img src={img} />}
      <h3>{h3}</h3>
      <p>{p}</p>
      {!isLeft && <img src={img} />} */}
    </div>
  );
}
export default Feature;

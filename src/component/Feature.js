function Feature({ h3 = "", p = "", img = "", isLeft = false }) {
  return (
    <div>
      <div className="row">
        {isLeft == true && (
          <div className="col-6">
            <img src={img} />
          </div>
        )}

        <div className="col-6">
          <h3>{h3}</h3>
          <p>{p}</p>
        </div>

        {isLeft == false && (
          <div className="col-6">
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



function Feature({ h3 = "", p = "" }) {
  return (
    <div>
      <h3>{h3}</h3>
      <p>{p}</p>
      
    </div>
    
  );
}
export default Feature;


/*const Na1 = [
  {
    h3: " ",
    img: " ",
  }
  
];

const Na2 = [
  {
    img: " ",
    h3: " ",
  }

];

function Feature({ type = "" }) {
  // const items = type === 'nav1' ? Nav1 : Nav2
  let itm;
  if (type === "na1") {
    itm = Na1;
  } else {
    itm = Na2;
  }
  return (
    <div>
      
      <h3>{itm.h3}</h3>
      <p>{itm.p}</p>
    </div>
  );
}
export default Feature;*/

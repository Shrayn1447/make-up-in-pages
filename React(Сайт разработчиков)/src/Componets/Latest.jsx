import "./scss/Latest.css";
function Diva({img}) {
  return (
    <>
      <div>
      <img className="backorg" src='src/img/back.png' alt="png" />
       <div className="mama">
       <h1>Technical Analysis</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
       </div>
       <img src={img} alt="back" />
      </div>
    </>
  );
}
export default function Latest() {
  return (
    <>
      <div className="maincart">
        <h4>Latest Project & Case</h4>
        <h1>Let’s Looks Our Global Projects</h1>
        <div className="diva">
            <Diva img={'src/img/diva/1.png'}/>
            <Diva img={'src/img/diva/2.png'}/>
            <Diva img={'src/img/diva/3.png'}/>
            <Diva img={'src/img/diva/4.png'}/>
        </div>
      </div>
    </>
  );
}

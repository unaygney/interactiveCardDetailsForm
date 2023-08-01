import Logo from "../assets/card-logo.svg";

function Card() {
    return ( 
        <>
     <section className="left-side">
        <div className="card-container">
          <div className="card-front">
            <img className="logo" src={Logo} alt="logo" />

            <p className="card-number">0000 0000 0000 0000</p>

            <div className="card-bottom">
              <p className="name">Jane Applessed</p>
              <p className="exp-date">00/00</p>
            </div>
          </div>

          <div className="card-back">
            <p className="sec-number">000</p>
          </div>
        </div>
      </section>
        
        </>
     );
}

export default Card;
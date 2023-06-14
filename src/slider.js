function Slider() {
    return (
      <div classNameName="container-fluid">
        <div classNameName="row">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner carousel-content">
              <div className="carousel-item active">
                <img src="images/land.jfif" className="d-block w-100" alt="images" />
              </div>
              <div className="carousel-item">
                <img src="images/logo 9.jpg" className="d-block w-100" alt="images" />
              </div>
              <div className="carousel-item">
                <img src="images/2nd land.jfif" className="d-block w-100" alt="images" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Slider;
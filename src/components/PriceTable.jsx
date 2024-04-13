import React from "react";

const PriceTable = ({ userData }) => {
  return (
    <section className="space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Price Table</span>
          <h2 className="sec-title">Pricing & Packaging</h2>
        </div>
        <div className="row gy-4 justify-content-center">
          {userData.services.map((el, index) => {
            return (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className={`price-card ${index % 2 !== 0 ? "active" : ""}`}
                >
                  <h3 className="price-card-title">{el.name}</h3>
                  <h4 className="price-card_price">
                    {el.charge}
                    <span className="duration">$ / Per Month</span>
                  </h4>
                  <div className="price-card_content">
                    <div className="checklist">
                      <ul>
                        <li>
                          <i className="fas fa-circle-check"></i> Process
                          Management
                        </li>
                        <li>
                          <i className="fas fa-circle-check"></i> Outsourcing (
                          include)
                        </li>
                        <li>
                          <i className="fas fa-circle-check"></i> Supply chain
                          Management
                        </li>
                        <li className="unavailable">
                          <i className="far fa-circle-check"></i> Risk
                          Management
                        </li>
                        <li className="unavailable">
                          <i className="far fa-circle-check"></i> Dynamic
                          Content
                        </li>
                        <li className="unavailable">
                          <i className="far fa-circle-check"></i> Marketing
                          Calendar (no include)
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="th-btn w-100">
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PriceTable;

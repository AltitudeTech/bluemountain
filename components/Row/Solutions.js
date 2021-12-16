import React, { useState } from "react";
import "./Solutions.scss";

export const LeaderShipSolutions = [
  {
    label: "Executive Assessment",
    image: "assessment.png",
    href: "executive-assessment",
  },
  {
    label: "Executive Search",
    image: "search.png",
    href: "executive-search",
  },
  { label: "Board Services", image: "services.png", href: "board-services" },
  {
    label: "Leadership Development",
    image: "development.png",
    href: "leadership-development",
  },
  {
    label: "Expatriates",
    image: "exchange.png",
    href: "expatriates",
  },

  {
    label: "Executive Coaching",
    image: "coaching.png",
    href: "executive-coaching",
  },
];

export const Solutions = () => {
  const [solution, setSolution] = useState(LeaderShipSolutions[0]);
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-12 my-5">
          <h3 className="title">LEADERSHIP SOLUTIONS</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex" style={{ flexWrap: "wrap" }}>
          {LeaderShipSolutions.map((leadershipSol, key) => {
            return (
              <div
                key={key}
                onClick={() => setSolution(leadershipSol)}
                className={`solutionNav ${
                  solution.label == leadershipSol.label ? "activeSectorNav" : ""
                }`}
              >
                {leadershipSol.label}
              </div>
            );
          })}
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-6">
          <img
            src={`/static/images/home/${solution.image}`}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h5 className="mt-2 text-uppercase">{solution.label}</h5>
          <hr style={{ border: "none", borderBottom: "1px solid green" }} />
          <p className="leading" style={{ lineHeight: 2 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            nesciunt illo et sunt quidem neque voluptatem, laboriosam quos
            inventore itaque vitae ad veritatis dignissimos cum quod repellat
            cupiditate eveniet repellendus!
          </p>
        </div>
      </div>
      <style jsx>{`
        .title {
          display: relative;
          text-align: left;
          font-weight: bold;
          padding: 0;
        }
        .title::after {
          content: "";
          position: absolute;
          width: 70px;
          height: 0;
          border-bottom: 4px solid #c1252a;
          bottom: 0;
          left: 11px;
        }
      `}</style>
    </div>
  );
};

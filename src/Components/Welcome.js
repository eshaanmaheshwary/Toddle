import React from "react";
import PropTypes from "prop-types";

export default function Welcome(props) {
  return (
    <main className="container-fluid">
      <div className="p-5 p-md-1 pt-5 mt-1 mb-0 text-white rounded bg-dark">
        <div className="row">
          <div className="col-md-12 px-0">
            <center>
              <h1
                className="display-4"
                style={{
                  fontFamily:
                    'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                  fontWeight: "bold",
                  color: "rgba(255, 255, 0, 0.849)",
                }}
              >
                {props.title}
              </h1>
              <p className="lead my-3">
                “Don’t always scrape and search for compliments. Criticism is
                what builds character and strength. Build your own dreams, or
                someone else will hire you to build theirs.”
              </p>
              <p
                className="lead my-3 m-4"
                style={{
                  fontFamily:
                    'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                  fontWeight: "bold",
                  border: "1px solid white",
                  padding: "5px 5px 5px 5px",
                }}
              >
                “All our dreams can come true, if we have the courage to pursue
                them.” – Walt Disney
              </p>
            </center>
          </div>
        </div>
      </div>
    </main>
  );
}

Welcome.propTypes = {
  title: PropTypes.string.isRequired,
};

Welcome.defaultProps = {
  title: "Boards Collection!",
};

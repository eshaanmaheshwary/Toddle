import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <div>
      <button
        className="btn btn-danger"
        data-bs-toggle={props.toggle}
        data-bs-target={props.target}
        style={{
          fontFamily:
            "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
          fontWeight: 800,
          fontSize: "20px",
          padding: "5px 50px 5px 50px",
        }}
      >
        <i className="fa fa-plus" aria-hidden="true">
          &nbsp; &nbsp;
        </i>
        {props.btn}
      </button>
    </div>
  );
}

Button.propTypes = {
  btn: PropTypes.string.isRequired,
};

Button.defaultProps = {
  btn: "Add New Item",
  target: "#CreateBoard",
  toggle: "modal",
};

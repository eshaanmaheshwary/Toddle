import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logos/Toddle-app-combination-logo-01.png";
import "../CSS/radio.css";
import { useState } from "react";

export default function Modal(props) {
  var n = new Date();
  var y = n.getFullYear();
  var m = n.getMonth();
  var d = n.getDate();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var monthName = months[m];
  var date = d + " " + monthName + " " + y;
  const board = [
    {
      titlee: "Eating Right",
      descriptionn:
        "This Lecture contains the knowledge regarding the Eating Habits and Nutrition!",
      colour: "",
      datee: date,
      class: "text-danger",
      imagee: "Images/My Board 03.png",
    },
  ];
  const [list, setList] = useState(board);
  const [title, setTitle] = useState("Places around the World!");
  const [description, setDescription] = useState(
    "This Chapter describes about the various Places aorund the Globe and their Cultural Activities"
  );
  const [image, setImage] = useState("03");
  const addToList = () => {
    let tempArr = list;
    let c;
    let img;
    console.log(image);
    if (list.length % 2 === 0) c = "text-danger";
    else c = "text-success";
    if (image === "01") img = "Images/My Board.png";
    else if (image === "02") img = "Images/My Board 02.png";
    else img = "Images/My Board 03.png";
    let obj = {
      titlee: title,
      descriptionn: description,
      colour: "red",
      datee: date,
      class: c,
      imagee: img,
    };
    tempArr.push(obj);
    setList(tempArr);
    setTitle("");
    setDescription("");
  };
  const deleteItem = (index) => {
    let temp = list.filter((item, i) => i !== index);

    setList(temp);
  };
  return (
    <>
      <div
        className="modal fade"
        id={props.id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <form name={props.name} autoComplete="off">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  className="modal-title"
                  id="staticBackdropLabel"
                  src={props.imgSrc}
                  width={50}
                  height={50}
                  style={{ borderRadius: "80%" }}
                  alt="Toddle"
                />
                &nbsp;
                <span
                  style={{
                    fontFamily:
                      'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                    fontWeight: 900,
                    fontSize: "xx-large",
                  }}
                >
                  {props.title}
                </span>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div
                className="modal-body"
                style={{
                  fontFamily:
                    'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                  fontWeight: 800,
                }}
              >
                <div className="form-row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="title">{props.lbl1}</label>
                    <input
                      type="text"
                      value={title}
                      className="form-control"
                      id="title"
                      placeholder="Enter Title"
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="description">{props.lbl2}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      value={description}
                      placeholder="Enter Description"
                      required
                      onChange={(f) => setDescription(f.target.value)}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="colour">{props.lbl3}</label>
                    <br />
                    <>
                      <div className="radio-toolbar row mt-2">
                        <div className="col-md-4 p-2">
                          <input
                            type="radio"
                            id="img01"
                            name="01"
                            value="01"
                            onChange={(g) => setImage(g.target.value)}
                          />
                          <label
                            htmlFor="img01"
                            style={{
                              width: "150px",
                              height: "150px",
                            }}
                          >
                            <img
                              src="Images/My Board.png"
                              className="img-fluid rounded-start"
                            />
                          </label>
                        </div>
                        <div className="col-md-4 p-2">
                          <input
                            type="radio"
                            id="img02"
                            name="02"
                            value="02"
                            onChange={(h) => setImage(h.target.value)}
                          />
                          <label
                            htmlFor="img02"
                            style={{
                              width: "150px",
                              height: "150px",
                            }}
                          >
                            <img
                              src="Images/My Board 02.png"
                              className="img-fluid rounded-start"
                            />
                          </label>
                        </div>
                        <div className="col-md-4 p-2">
                          <input
                            type="radio"
                            id="img03"
                            name="03"
                            value="03"
                            onChange={(i) => setImage(i.target.value)}
                          />
                          <label
                            htmlFor="img03"
                            style={{
                              width: "150px",
                              height: "150px",
                            }}
                          >
                            <img
                              src="Images/My Board 03.png"
                              className="img-fluid rounded-start"
                            />
                          </label>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={addToList}
                  id="cnb"
                  style={{
                    fontFamily:
                      'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                    fontWeight: 800,
                  }}
                >
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "cornsilk" }}
                  >
                    {props.btn}
                  </a>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <main className="container-fluid">
        <div className="p-5 p-md-1 pt-5 mt-1 mb-0  rounded">
          <div className="row mb-2 mt-2">
            {list.length > 0 &&
              list.map((item, i) => (
                <>
                  <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <div className="col p-4 d-flex flex-column position-static">
                        <h3
                          className={`mb-2 ${item.class}`}
                          style={{
                            fontFamily:
                              'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                          }}
                        >
                          {item.titlee}
                        </h3>
                        <div className="mb-1 text-muted">{item.datee}</div>
                        <p className="card-text mb-3">{item.descriptionn}</p>
                        <div className="container">
                          <div className="row">
                            <div className="col-md-6 mt-2">
                              <button
                                className="btn btn-success"
                                style={{
                                  fontFamily:
                                    'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                                  fontWeight: 800,
                                  padding: "5px 50px 5px 50px",
                                }}
                              >
                                <i className="fa fa-cog" aria-hidden="true" />
                                &nbsp; Edit
                              </button>
                            </div>
                            <div className="col-md-6 mt-2">
                              <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#alertModal"
                                style={{
                                  fontFamily:
                                    'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                                  fontWeight: 800,
                                  padding: "5px 50px 5px 50px",
                                }}
                              >
                                <i className="fa fa-trash" aria-hidden="true" />
                                &nbsp; Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 d-none d-lg-block align-items-center">
                        <img
                          src={item.imagee}
                          className="img-fluid rounded-start"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="alertModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div
                          className="modal-body"
                          style={{
                            fontFamily:
                              'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                            fontWeight: 800,
                            fontSize: "25px",
                          }}
                        >
                          Are you Sure?
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            No
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            style={{
                              fontFamily:
                                'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                              fontWeight: 800,
                              padding: "5px 50px 5px 50px",
                            }}
                            onClick={() => deleteItem(i)}
                            data-bs-dismiss="modal"
                          >
                            Confirm Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

Modal.propTypes = {
  btn: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lbl1: PropTypes.string.isRequired,
  lbl2: PropTypes.string.isRequired,
  lbl3: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  btn: "+ Add New Item",
  id: "CreateBoard",
  name: "frmm",
  imgSrc: Logo,
  title: "New Board",
  lbl1: "Title of the Board",
  lbl2: "Description of the Board",
  lbl3: "Choose Colour",
};

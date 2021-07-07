import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./Doctor.css";

const Doctor = () => {
  const [Doctor, setDoctor] = useState();
  const [DoctorName, setDoctorName] = useState();
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(99999999999999);
  const [filter, setfilter] = useState();
  const role_id = localStorage.getItem("role_id");
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/doctor`, { num1, num2 })
      .then((response) => {
        setDoctor(response.data);
        console.log("doctor",response.data);
      })
      .catch((err) => {});
  }, []);

  const callType_1 = () => {
    axios
      .post(`http://localhost:5000/doctors`, { num1, num2 })
      .then((response) => {
        setfilter(response.data);
        setDoctor([]);
      })
      .catch((err) => {});
  };

  const searchDoctor = (name) => {
    axios
      .post(`http://localhost:5000/search`, {
        DoctorName: name,
      })
      .then((res) => {
        console.log(res.data);
        setDoctorName(res.data);
      
      })
      .catch((err) => {});
  };
  const func = (id) => {
    return history.push(`/doctor/${id}`);
  };

  const getAcgRating = (id) => {
    axios
      .get(`http://localhost:5000/review/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  };

  //admin can delete any doctor
  const deleteDoctor = (id) => {
    console.log("dellllllete",id);
    axios
      .put(`http://localhost:5000/admin/delete/${id}`)
      .then((result) => {
        history.push("/adminPage")

        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="filter">
        <div className="row-a">
          <div className="btn-inp">
        <div className="asdsadasd">
        <input className="input-filter" 
        placeholder="MIN"
          onChange={(e) => {
            setnum1(e.target.value);
          }}
        />
        <input className="input-filter"
         placeholder="MAX"
          onChange={(e) => {
            setnum2(e.target.value);
          }}
        />
       
        </div>
        <div>
        <button className="Filter-btn" onClick={callType_1}>$</button>
        </div>
        </div>
        <div className="kapsayici">
        <input id="checkbox" className="checkInp"
        type="checkbox"
         
       />
        <label class="label1" for="checkbox">
      <div class="checkDiv"></div>
    </label>
    <input required id="text" class="textInp"  onChange={(e) => {
            if (e.target.value.length === 0) {
              searchDoctor("''");
            } else {
              searchDoctor(e.target.value);
            }
          }}/>
    <label class="label2" for="text" title="Search for Doctor Name" data-title="Doctor Name"></label>
  

    </div>
         </div>
        <div className="parant-Doctor">
          {DoctorName &&
            DoctorName.map((element, index) => {
              return (
                <div className="card"  onClick={() => {
                  func(element.id);
                }}
                key={index}
                >
                    <img src={`${element.img}`} />
                    <div className="info">
                <h1>
                  {element.firstName} {element.lastName}
                </h1>
                
                
                <h2>{element.price}</h2>
                <p>{element.description}</p>
                  </div>
                
                </div>
              );
            })}
        </div>
      </div>

      {filter &&
        filter.map((elem, i) => {
          return (
            <div className="wrapper" key={i}>
              <div className="card"  onClick={() => {
                  func(elem.id);
                }}
                key={i}>
              <img src={`${elem.img}`} />
              <div className="info">
                <h1>
                  {elem.firstName} {elem.lastName}
                </h1>
                <p>{getAcgRating(elem.id)}</p>
                
                <h2>{elem.price}</h2>
                <p>{elem.description}</p>
                  </div>
              </div>
            </div>
          );
        })}

      <div className="wrapper">
        {Doctor &&
          Doctor.map((elem, i) => {
            return (
              <div
                className="card"
                onClick={() => {
                  func(elem.id);
                }}
                key={i}
              >
                  <img src={`${elem.img}`} />
                
                <div className="info">
                  <h2>
                    {elem.firstName} {elem.lastName}
                  </h2>
                
                  <p>
                  {elem.price}
                  <br></br>
                  {elem.description}
                  </p>
                
                  {role_id == 3 ? (
                    <button
                      onClick={() => {
                        deleteDoctor(elem.user_id);
                      }}
                    >
                      delete{" "}
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Doctor;

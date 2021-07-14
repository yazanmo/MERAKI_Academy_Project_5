import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css";
import { useHistory } from "react-router-dom";
import { Card } from 'react-bootstrap';

const Accept = () => {
  const history = useHistory();
  const [Doctor, setDoctor] = useState();
  const [info, setInfo] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/doctoradmin`)
      .then((response) => {
        if (info) {
          setInfo(false);
        } else {
          setInfo(true);
        }

        setDoctor(response.data);
      })
      .catch((err) => {});
  }, [info]);

  const deleteDoctor = (doctor_id) => {
    setId(doctor_id);
    axios
      .put("http://localhost:5000/doctordelete", { id })
      .then((res) => {
        if (info) {
          setInfo(false);
        } else {
          setInfo(true);
        }
      })
      .catch((err) => {});
  };

  return (
    <>
    <h1 className="titleAdmin">New request</h1>
      <div className="parant11">
      
        {Doctor &&
          Doctor.map((elem, i) => {
            return (
             
                  <Card className="asd" style={{ width: '61rem',height: '26rem'}}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">{elem.firstName} {elem.lastName}</Card.Subtitle>
              <Card.Text>
                  <p className="desdoc">{elem.description}</p>
                  <p className="desdoc">{elem.email}</p>
                  <p className="desdoc">{elem.Qualifications}</p>
                  <p className="desdoc">{elem.practicalExperiences}</p>
                  <p className="desdoc">{elem.qualificationsFile}</p>
              </Card.Text>
              <div className="accdel">
              <button className="btnaccdel"
                    onClick={() => {
                      history.push(`/accept/doctor/${elem.doctor_id}`);
                    }}
                  >
                    accept
                  </button>
               <button className="btnaccdel11"
                  onClick={()=>{
                    deleteDoctor(elem.doctor_id);
                  }}
                  >
                    rejected
                  </button>
                  </div>
            </Card.Body>
          </Card>
            
          
            );

      
          })}
      </div>

    </>
  );
};
export default Accept;

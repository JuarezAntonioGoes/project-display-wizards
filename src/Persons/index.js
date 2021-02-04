import React, { useEffect } from "react";
import getThreeStudents from "./UseGetThreeStudents";

import "./style.css";

export const Persons = () => {
  const [threeStudants, setThreeStudants] = React.useState([]);
  const LINK_API = "http://hp-api.herokuapp.com/api/characters/students";
  let students;

  React.useEffect(() => {
    handleFetch(LINK_API);
  }, []);

  async function handleFetch(LINK) {
    const request = await fetch(LINK);
    const JSON = await request.json();
    students = [...JSON];
    getThreeStudents(students, setThreeStudants);
  }

  return (
    <>
      <main className="main--container">
        <div className="students">
          {threeStudants.map(({ name, house, image, actor }) => (
            <div className="student--container" key={name}>
              <img src={image} alt={name} />
              <h2>{name}</h2>
              <p>{house}</p>
              <p>Actor: {actor}</p>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button
            className="sort--student"
            onClick={() => handleFetch(LINK_API)}
          >
            Sortear bruxos
          </button>
        </div>
      </main>
    </>
  );
};

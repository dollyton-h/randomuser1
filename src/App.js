import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import useInfiniteScroll from "react-infinite-scroll-hook";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        console.log(response.data.results);
        setUser(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setUser]);

  const next = () => {
    setUsers(...users, user);
  };

  console.log(users, "<<<<users");
  console.log(user, "<<< user");

  return (
    <div className="App">
      <div className="card">
        <h1>User</h1>
        {user &&
          user.map((e) => {
            return (
              <div className="card-container">
                <img src={e.picture.large} alt="" />
                <div className="details">
                  <div className="container">
                    <p>
                      Name
                      <br />
                      <span>{e.name.first}</span>
                    </p>
                  </div>
                  <div className="container">
                    <p>
                      Email
                      <br />
                      <span>{e.email}</span>
                    </p>
                  </div>
                  <div className="container">
                    <p>
                      Phone
                      <br />
                      <span>{e.phone}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        <button onClick={next}>next</button>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Filters from "./Filters";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import getDataFromApi from "../services/getDataFromApi";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("all");
  useEffect(() => {
    getDataFromApi().then((data) => setUsers(data));
  }, []);
  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
    } else if (inputChange.key === "gender") {
      setGender(inputChange.value);
    }
  };
  const filteredUsers = users
    .filter((user) => {
      return user.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((user) => {
      /*if (gender === "all") {
        return true;
      } else {
        return user.gender === gender;
      }*/
      return gender === "all" ? true : user.gender === gender;
    });
  //console.log(filteredUsers);
  const renderDetail = (props) => {
    const id = props.match.params.id;
    const selectedUser = users.find((user) => {
      return user.id === id;
    });
    return <UserDetail user={selectedUser} />;
  };
  return (
    <>
      <h1 className='title--big'>Directorio de personas</h1>
      <div className='col2'>
        <Filters handleFilter={handleFilter} />
        <UserList users={filteredUsers} />
        <Switch>
          <Route path='/user/:id' render={renderDetail} />
        </Switch>
      </div>
    </>
  );
};
export default App;

import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";
function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();
  const deleteUser = (user: User) => {
    const orgiinalUser = [...users];
    //update UI
    const filterUser = setUsers(users.filter((u) => u.id !== user.id));
    //update Serve
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(orgiinalUser);
    });
  };

  const createUser = () => {
    const newUser = { id: 0, name: "John" };
    const orgiinalUser = [...users];
    // update UI
    setUsers([newUser, ...users]);
    // update serve
    userService
      .add(newUser)
      .then(({ data: addedUser }) => setUsers([addedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(orgiinalUser);
      });
  };

  const updateUser = (user: User) => {
    const orgiinalUser = [...users];
    //update UI
    const updateUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updateUser : u)));
    //update serve
    userService.update(updateUser).catch((err) => {
      setError(err.message);
      setUsers(orgiinalUser);
    });
  };

  return (
    <>
      {error && <p className="text-danger"> {error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <div className="mb-3">
        <button className="btn btn-primary" onClick={createUser}>
          Add User
        </button>
      </div>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

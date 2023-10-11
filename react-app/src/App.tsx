import UserService, { User } from "./services/user-service";
import useUsers from "./hooks/useUserssss";
const App = () => {
  const { users, setUsers, setError, error, isLoading } = useUsers();
  const deleteUser = (user: User) => {
    const originalUser = [...users];
    //update UI first
    setUsers(users.filter((u) => u.id !== user.id));
    // update Serve
    UserService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };

  // create user function
  const createUser = () => {
    const originalUser = [...users];
    const newUser = { id: 0, name: "John" };
    // update UI first
    setUsers([newUser, ...users]);
    // update Serve
    UserService.create(newUser)
      .then(({ data: addedUser }) => setUsers([addedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  // update User function
  const updateUser = (user: User) => {
    const originalUser = [...users];
    // update UI first
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    // update Serve
    UserService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p> Error Message: {error}</p>}
      <div className="mb-2">
        <button className="btn btn-outline-primary" onClick={createUser}>
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
};

export default App;

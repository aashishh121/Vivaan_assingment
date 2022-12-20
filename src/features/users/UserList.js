import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser } from "./userSlice";

const UserList = () => {

  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");



  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  }

  const onChange = (event) => {
    setValue(event.target.value);

    const bar = document.getElementById('bar');
    bar.style.visibility = 'visible';
  };

  const onSearch = (searchTerm) => {
    const bar = document.getElementById('bar');
    bar.style.visibility = 'hidden';
    //setValue(searchTerm);
    setSearch(searchTerm);
    // our api to fetch the search result
    //console.log("search ", searchTerm);
  };

  const renderCard = () => users.filter((val) => {
    if (search === "") {
      return val
    } else if (val.last.toLowerCase().includes(search.toLowerCase())) {
      return val
    }
  }).map(user => (
    <div className="bg-gray-300 p-5 flex items-center justify-between" key={user.id}>
      <div>
        <h3 className="font-bold text-lg text-gray-700">User Name : {user.name} {user.middle} {user.last}</h3>
        <h2 className="font-normal text-gray-600">Address: {user.address}, District: {user.district}</h2>
        <h2 className="font-normal text-gray-600">State: {user.states}, PIN Code: {user.pin}</h2>
      </div>
      <div className="flex gap-4">
        <Link to={`edit-user/${user.id}`}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </Link>
        <button
          onClick={() => handleRemoveUser(user.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  ))

  return (
    <>

      <div>
        <div className=" flex border-2 rounded bg-blue-900  ">
          <input type="text" value={value} onChange={onChange} className="bg-white px-4 py-2 w-full rounded" placeholder="Search your users..." />
          <button onClick={() => onSearch(value)} className="flex items-center justify-center px-4 border-r rounded">
            <svg className="w-6 h-6 text-white bg-blue-900" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
              </path>
            </svg>
          </button>
        </div>
        <div id="bar" className="dropdown bg-white flex flex-col border-x-2 border-b-2">
          {users
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.last.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.last)}
                className="dropdown-row cursor-pointer text-start m-2"
                key={item.last}
              >
                {item.last}
              </div>
            ))}
        </div>
      </div>
      <div className="mt-10">
        <div className="grid gap-5 md:grid-cols-2">
          {users.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No User</p>}
        </div>
        <Link to="/add-user"><button type="submit" className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add User
                  </button></Link>
      </div>
    </>
  )
}

export default UserList
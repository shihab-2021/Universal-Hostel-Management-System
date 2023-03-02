import Link from "next/link";

const ManageUserElement = ({ data, remainingUsers }) => {
  const deleteItem = () => {
    const agree = window.confirm("Are you sure you want to delete this user?");

    if (agree) {
      remainingUsers(data._id);
      fetch(`https://universal-hostel-api.onrender.com/users/${data._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <tr>
      <td>{data.displayName}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td className="float-right">
        <Link href={`/dashboard/manage-user/${data._id}`}>
          <button className="mx-2 bg-green-400 py-1 px-3 text-gray-800 font-bold rounded hover:bg-green-600">
            View
          </button>
        </Link>

        <button
          className="mx-2 bg-red-400 py-1 px-3 text-gray-800 font-bold rounded hover:bg-red-600"
          onClick={deleteItem}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageUserElement;

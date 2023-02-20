/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import useAuth from "../../Components/Firebase/useAuth";
import MainLayout from "../../Components/MainLayout/MainLayout";

export default function Login() {
  const { loginUser, user, logout } = useAuth();
  const userInfo = user;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password);
    form.reset();
  };
  return (
    <div>
      <MainLayout>
        <div className="flex h-[85vh] w-full items-center justify-center">
          <div className="rounded-xl bg-gray-800 bg-opacity-50 px-10 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
            <div className="text-white font-sansita">
              <div className="mb-8 flex flex-col items-center">
                <img
                  src="https://i.ibb.co/YNhpqnK/image-removebg-preview.png"
                  width="150"
                  alt=""
                  srcset=""
                />
                {/* <h1 className="mb-2 text-2xl">Universal Hostel</h1> */}
                <span className="text-gray-300 mt-4">Enter Login Details</span>
              </div>
              <form onSubmit={handleSubmit} style={{ minWidth: "300px" }}>
                <div className="">
                  <label className="block text-sm text-white" for="email">
                    E-mail
                  </label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    aria-label="email"
                    required
                  />
                </div>
                <div className="mt-2">
                  <label className="block  text-sm text-white">Password</label>
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="password"
                    id="password"
                    placeholder="Password"
                    arial-label="password"
                    required
                  />
                </div>
                <div className="mt-8 flex justify-center text-lg text-black">
                  <button
                    type="submit"
                    className="rounded-3xl uppercase bg-gray-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-600"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

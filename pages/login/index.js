import Link from "next/link";

export default function Login() {
  return (
    <div className="LoginSingup h-screen flex flex-col ">
      <h1 className="text-5xl text-center homeHeader m-3 flex flex-col">
        Welcome to Super Hostel
      </h1>

      <div className="formSection flex w-full flex-row m-auto">
        <div className="flex login w-1/2 flex-col items-center">
          <h1 className="text-2xl">Login</h1>
          <form
            className="w-3/4 flex flex-col"
            action="/send-data-here"
            method="post"
          >
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />

            <Link href={"/dashboard"} className="w-1/2 mx-auto">
              <button className="bg-gray-900 w-full my-5 rounded">
                Submit
              </button>
            </Link>
          </form>
        </div>
        <div className="signup w-1/2">
          <h1 className="text-2xl">Sign Up</h1>
          <form
            className="w-3/4 flex flex-col"
            action="/send-data-here"
            method="post"
          >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="integer"
              id="phone"
              name="phone"
              required
              maxLength={11}
              minLength={11}
            />

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
            <button
              type="submit"
              className="bg-gray-900 w-1/2 mx-auto my-5 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

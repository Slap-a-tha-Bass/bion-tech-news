export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <div className="flex justify-center items-center pb-8">
          <h1 className="rounded-full text-2xl text-sky-600 pb-4 shadow-xl shadow-sky-500 px-16 pt-4">
            Login
          </h1>
        </div>
        <form>
          <div className="text-sky-600">
            <input
              className="p-2 my-4 bg-transparent border-b-4 border-sky-600 rounded-lg shadow-xl shadow-sky-500 placeholder-sky-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-600"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="text-sky-600">
            <input
              className="p-2 my-4 bg-transparent border-b-4 border-sky-600 rounded-lg shadow-xl shadow-sky-500 placeholder-sky-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-600"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center items-center mt-8">
            <button
              className="bg-sky-600 rounded-lg text-2xl text-black p-2 shadow-xl shadow-sky-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

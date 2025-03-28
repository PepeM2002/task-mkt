/** @format */

function login() {
  return (
    <>
      <div className="flex flex-col items-center mt-14 p-4 ">
        <img className="w-52" src="/logo-mkt.png" alt="" />

        <form className="flex flex-col gap-4 w-full max-w-sm border-transparent border-2 p-2 rounded-xl shadow-xl shadow-emerald-500">
          <div>
            <label className="block font-medium mb-1" htmlFor="email">
              Correo Electrónicos
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              type="email"
              name="email"
              placeholder="mkt@mkt.com"
              id="email"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="password">
              Contraseña
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              type="password"
              name="password"
              placeholder="*******"
              id="password"
              required
            />
          </div>
          <button
            className="w-full bg-primary cursor-pointer bg-blue-700 text-white border-transparent border-2 p-2 rounded-md hover:bg-blue-500 transition"
            type="submit"
          >
            Iniciar Sesión
          </button>
          <button
            className="w-50 bg-primary cursor-pointer bg-blue-700 text-white border-transparent border-2 p-2 rounded-md hover:bg-blue-500 transition"
            type="submit"
          >
            Registrate
          </button>
        </form>
      </div>
    </>
  );
}

export default login;

import "./index.css";
import Input from "../Input/Input";
const Form = () => {
  const alerta = () => {
    alert("aasd");
  };
  return (
    <div className="flex w-full justify-center mt-10">
      <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={() => alert("hola")}>
          <div className="grid-cc">
            <div className="relative z-0 mb-6 w-full group">
              <select
                name="floating_type_cc"
                id="floating_type_cc"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
                required
              >
                {" "}
                <option>CC</option>
                <option>CE</option>
              </select>
              <label
                htmlFor="floating_last_name"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Document Type
              </label>
            </div>

            <Input type="number" id="identifier" value="Identifier"></Input>
          </div>{" "}
          <Input type="email" id="email" value="Email"></Input>
          <Input
            type="number"
            id="phone"
            value="Phone number (123-456-7890)"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          ></Input>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <Input type="text" id="firstName" value="First Name"></Input>
            <Input type="text" id="lastName" value="Last name"></Input>
          </div>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <Input type="password" id="password" value="Password"></Input>
            <Input type="password" id="rePassword" value="Re password"></Input>
          </div>
          <button
            type="submit"
            className="text-white color-endabank  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

import "./index.css";
import { Input, SelectForm } from "../index";
const Form = () => {
  const alerta = () => {
    alert("aasd");
  };
  return (
    <div className="flex w-full justify-center mt-10">
      <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={() => alert("hola")}>
          <div className="grid-cc">
            <SelectForm
              id="documentType"
              value="Document type"
              options={["CC", "CE"]}
            ></SelectForm>
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

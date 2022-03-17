import "./index.css";
import { Input, SelectForm } from "../index";
import { useState } from "react";
import FieldObject from "./fields.interface";
const Form = () => {
  const [campos, setCampos] = useState<FieldObject>({
    id: "",
    number: 0,
    email: "",
    documentType: "",
    firstName: "",
    lastName: "",
    password: "",
    rePassword: "",
  });
  return (
    <div className="flex w-full justify-center mt-10">
      <div className="p-4  container-form  item-center  bg-white rounded-lg border shadow-md sm:p-8">
        <form onSubmit={() => alert("hola")}>
          <div className="grid-cc">
            <SelectForm
              id="documentType"
              value="Document type"
              options={["CC", "CE"]}
              setCampos={(value: string) =>
                setCampos({ ...campos, documentType: value })
              }
            ></SelectForm>
            <Input
              type="number"
              id="identifier"
              label="Identifier"
              setCampos={(value: string) => setCampos({ ...campos, id: value })}
            ></Input>
          </div>{" "}
          <Input
            type="email"
            id="email"
            label="Email"
            setCampos={(value: string) => {
              console.log(value);

              setCampos({ ...campos, email: value });
            }}
          ></Input>
          <Input
            type="number"
            id="phone"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            label="Phone Number"
            setCampos={(value: string) =>
              setCampos({ ...campos, number: Number(value) })
            }
          ></Input>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <Input
              type="text"
              id="firstName"
              label="First name"
              setCampos={(value: string) =>
                setCampos({ ...campos, firstName: value })
              }
            ></Input>
            <Input
              type="text"
              id="lastName"
              label="Last name"
              setCampos={(value: string) =>
                setCampos({ ...campos, lastName: value })
              }
            ></Input>
          </div>
          <div className="grid xl:grid-cols-2 xl:gap-6">
            <Input
              type="password"
              id="password"
              label="Password"
              setCampos={(value: string) =>
                setCampos({ ...campos, password: value })
              }
            ></Input>
            <Input
              type="password"
              id="rePassword"
              label="Confirm password"
              setCampos={(value: string) =>
                setCampos({ ...campos, rePassword: value })
              }
            ></Input>
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

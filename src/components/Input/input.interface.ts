import FieldObject from "components/Form/fields.interface";

interface InputProps{
    type:string,
    id:string,
    label:string,
    pattern?:string,
    setCampos:Function

}
export default InputProps;
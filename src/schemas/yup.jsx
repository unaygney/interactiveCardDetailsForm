import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required(`Can't be blank`),
  number: yup.number("Wrong format , numbers only").required(`Can't be blank`),
  month : yup.number().required(`Can't be blank`).max(12, 'Wrong format, please enter a number between 1-12'),
  year : yup.number().required(`Can't be blank`),
  cvc : yup.number().required(`Can't be blank`)




});
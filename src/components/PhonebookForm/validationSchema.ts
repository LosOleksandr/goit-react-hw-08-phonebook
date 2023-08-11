import * as yup from "yup"
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Invalid name format",
    )
    .min(2, "Name must be at least 2 characters long")
    .max(20, "Name must be no more than 20 characters long"),
  number: yup
    .string()
    .required("Phone is required")
    .matches(/^\+380\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/, "Invalid phone format"),
})

export default validationSchema

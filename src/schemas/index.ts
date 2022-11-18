import * as yup from "yup";

export const schema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Digite um número válido")
    .required("Campo obrigratório")
    .min(10, "O valor mínimo é 10"),

  installments: yup
    .number()
    .typeError("Digite um número válido")
    .required("Campo obrigratório")
    .min(2, "O valor mínimo é 2"),

  mdr: yup
    .number()
    .typeError("Digite um número válido")
    .required("Campo obrigratório"),
});

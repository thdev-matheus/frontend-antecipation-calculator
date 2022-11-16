import * as yup from "yup";

export const schema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Digite um número válido")
    .required("Campo obrigratório")
    .min(1, "O valor mínimo é 1"),

  installments: yup
    .number()
    .typeError("Digite um número válido")
    .required("Campo obrigratório")
    .min(1, "O valor mínimo é 1"),

  mdr: yup
    .number()
    .typeError("Digite um número válido")
    .required("Campo obrigratório"),
});

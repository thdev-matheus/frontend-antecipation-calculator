import { useForm } from "react-hook-form";
import { Button } from "../Button";
import Input from "../Input";
import { BoxChecks, Container } from "./styles";
import { TbCurrencyReal } from "react-icons/tb";
import { FaCcMastercard, FaPercent } from "react-icons/fa";
import { InputCheck } from "../InputCheck";

export const Form = () => {
  const { register } = useForm();
  return (
    <Container>
      <Input
        label="Informe o valor da venda *"
        name="amount"
        icon={TbCurrencyReal}
        register={register}
        placeholder="digite um número"
        type="number"
      />
      <Input
        label="Em quantas parcelas *"
        name="installments"
        icon={FaCcMastercard}
        register={register}
        placeholder="digite um número"
        type="number"
      />
      <Input
        label="Informe o percentual de MDR *"
        name="mdr"
        icon={FaPercent}
        register={register}
        placeholder="digite um número"
        type="number"
      />
      <BoxChecks>
        <legend>Escolha os dias de antecipação</legend>
        <InputCheck label="1" name="1" register={register} />
        <InputCheck label="15" name="15" register={register} />
        <InputCheck label="30" name="30" register={register} />
        <InputCheck label="90" name="90" register={register} />
        <InputCheck label="180" name="180" register={register} />
        <InputCheck label="360" name="360" register={register} />
      </BoxChecks>
      <Button text="Calcular" type="submit" />
    </Container>
  );
};

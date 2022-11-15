import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../schemas";
import { Button } from "../Button";
import Input from "../Input";
import { BoxChecks, Container } from "./styles";
import { TbCurrencyReal } from "react-icons/tb";
import { FaCcMastercard, FaPercent } from "react-icons/fa";
import { InputCheck } from "../InputCheck";
import { IFormChecks, IFormData } from "./types";
import { useState } from "react";
import { convertChecksInDays } from "../../utils/days";
import { prepareDataForRequest } from "../../utils/prepareDataForRequest";
import { useRequestAPI } from "../../contexts/RequestAPI";
import { api, apiInternalError, apiTimeout } from "../../api";

export const Form = () => {
  const [checks, setChecks] = useState<IFormChecks>({
    1: false,
    15: false,
    30: false,
    90: false,
    180: false,
  });

  const { handleRequest } = useRequestAPI();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const markCheckBox = (nameCheck: number): void => {
    const newChecks = {
      ...checks,
    };
    newChecks[1] = nameCheck === 1 ? !newChecks[1] : newChecks[1];
    newChecks[15] = nameCheck === 15 ? !newChecks[15] : newChecks[15];
    newChecks[30] = nameCheck === 30 ? !newChecks[30] : newChecks[30];
    newChecks[90] = nameCheck === 90 ? !newChecks[90] : newChecks[90];
    newChecks[180] = nameCheck === 180 ? !newChecks[180] : newChecks[180];

    setChecks(newChecks);
  };

  const handleSubmitForm = (data: FieldValues) => {
    const days = convertChecksInDays(checks);
    data = prepareDataForRequest(data, days);
    handleRequest({ api, data });
  };

  return (
    <Container onSubmit={handleSubmit(handleSubmitForm)}>
      <Input
        label="Informe o valor da venda *"
        name="amount"
        icon={TbCurrencyReal}
        register={register}
        placeholder="digite um número"
        type="number"
        error={errors.amount && String(errors.amount.message)}
        step="0.01"
      />
      <Input
        label="Em quantas parcelas *"
        name="installments"
        icon={FaCcMastercard}
        register={register}
        placeholder="digite um número"
        type="number"
        error={errors.installments && String(errors.installments.message)}
      />
      <Input
        label="Informe o percentual de MDR *"
        name="mdr"
        icon={FaPercent}
        register={register}
        placeholder="digite um número"
        type="number"
        error={errors.mdr && String(errors.mdr.message)}
        step="0.01"
      />
      <BoxChecks>
        <legend>Escolha os dias de antecipação</legend>
        <InputCheck name="1" markCheckBox={markCheckBox} />
        <InputCheck name="15" markCheckBox={markCheckBox} />
        <InputCheck name="30" markCheckBox={markCheckBox} />
        <InputCheck name="90" markCheckBox={markCheckBox} />
        <InputCheck name="180" markCheckBox={markCheckBox} />
      </BoxChecks>
      <Button text="Calcular" type="submit" />
    </Container>
  );
};

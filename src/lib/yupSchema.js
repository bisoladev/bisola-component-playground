import { object, string } from "yup";

export const loginSchema = object({
  email: string().email().required(),
  password: string().required(),
});

export const createLoanSchema = object({
  category: string().required(),
  amount: string().required(),
});

export const createCategorySchema = object({
  name: string().required(),
  loan_amount: string().required(),
  tenor: string().required(),
  repayment_frequency: string().required(),
  weekly_savings: string().required(),
});

export const createCustomerFormSchema = object({
  name: string().required(),
  location: string().required(),
  address: string().required(),
  duration: string().required(),
  busStop: string().required(),
  stateOfOrigin: string().required(),
  lga: string().required(),
  dob: string().required(),
  numberMain: string().required(),
  numberOp: string().required(),
  bank: string().required(),
  account: string().required(),
  bvn: string().required(),
  nin: string().required(),
  email: string().required(),
  education: string().required(),
});

export const loanRepaymentSchema = object({
  amount: string().required(),
  ref_id: string().required(),
  date: string().required(),
});

import { z } from "zod";

// Removes duplicate accounts based on the 'name' field, summing the 'balance' of accounts with the same name.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bankAccountSchema = z.object({
  name: z.string(),
  balance: z.number(),
});

type BankAccountType = z.infer<typeof bankAccountSchema>;

const mock: BankAccountType[] = [
  { name: "Nubank", balance: 2500 },
  { name: "Santander", balance: 322 },
  { name: "Nubank", balance: 2532 },
  { name: "Inter", balance: 321 },
];

interface IBankAccountRemoveDuplicates {
  removeDuplicate(): BankAccountType[];
}

class RemoveDuplicate implements IBankAccountRemoveDuplicates {
  constructor(private readonly bankAccounts: BankAccountType[]) {
    this.bankAccounts = bankAccounts;
  }

  removeDuplicate() {
    const newList = this.bankAccounts.reduce((acc, bank) => {
      const bankAlreadyExists = acc.find((item) => item.name === bank.name);

      if (bankAlreadyExists) {
        bankAlreadyExists.balance += bank.balance;
      } else {
        acc.push(bank);
      }

      return acc;
    }, []);

    return newList;
  }
}

const newBankAccount = new RemoveDuplicate(mock);

console.log(newBankAccount.removeDuplicate());

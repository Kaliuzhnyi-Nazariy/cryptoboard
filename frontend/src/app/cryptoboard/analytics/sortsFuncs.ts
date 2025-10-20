import { Transaction } from "@/app/redux/transaction/transactionType";

export const sortNameDown = (sortList: Transaction[]) => {
  return [...sortList].sort((a, b) => {
    const aVal = a.transaction ?? "";
    const bVal = b.transaction ?? "";
    return aVal.localeCompare(bVal);
  });
};

export const sortNameUp = (sortList: Transaction[]) => {
  return [...sortList].sort((a, b) => {
    const aVal = a.transaction ?? "";
    const bVal = b.transaction ?? "";
    return bVal.localeCompare(aVal);
  });
};

export const sortPriceDown = (sortList: Transaction[]) => {
  return [...sortList].sort((a, b) => {
    const aVal = a.moneyAmount ?? 0;
    const bVal = b.moneyAmount ?? 0;
    return bVal - aVal;
  });
};

export const sortPriceUp = (sortList: Transaction[]) => {
  return [...sortList].sort((a, b) => {
    const aVal = a.moneyAmount ?? 0;
    const bVal = b.moneyAmount ?? 0;
    return aVal - bVal;
  });
};

export const sortDateDown = (sortList: Transaction[]) => {
  return [...sortList].sort((a, b) => {
    const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
    return bTime - aTime;
  });
};

export const sortDateUp = (sortList: Transaction[]) => {
  return [...sortList].sort((a, b) => {
    const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const bTime = b.createdAt ? new Date(a.createdAt).getTime() : 0;
    return aTime - bTime;
  });
};

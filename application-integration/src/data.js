const DATA = [
  {
    id: "1",
    add: {
      label: "abc",
    },
    delete: {
      matchSpecification: "null",
      boundaryScope: "ALL",
    },
    update: {
      type: "NOTEXPRESSION",
      logicalOperator: "OR",
      stringValue: "amd64",
      operator: "NOT_EQUAL",
      scope: "EXCLUDE_ALL_DOWNSTREAM",
      accessType: "READ",
    },
  },
  {
    id: "2",
    add: {
      matchSpecification: "null",
      boundaryScope: "ALL",
    },
    delete: {
      label: "abc",
    },
    update: {
      type: "EXPRESSION",
      logicalOperator: "AND",
      stringValue: "amd640",
      operator: "EQUAL",
      scope: "INCLUDE_ALL_DOWNSTREAM",
      accessType: "READ-WRITE",
    },
  },
];

export const COMPANIES_DATA = DATA.map((item) => ({
  id: item.id,
  add: Object.keys(item.add).map((key) => ({ key, value: item.add[key] })),
  delete: Object.keys(item.delete).map((key) => ({
    key,
    value: item.delete[key],
  })),
  update: Object.keys(item.update).map((key) => ({
    key,
    value: item.update[key],
  })),
}));

db.produtos.updateMany(
  {},
  {
    $set: { valorUnitario: NumberDecimal("0.00") },
  },
  { upsert: true },
);

db.produtos.find(
  {},
  { _id: false, nome: 1, valorUnitario: 1 },
);
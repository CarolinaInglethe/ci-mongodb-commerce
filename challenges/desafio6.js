db.produtos.updateMany(
    { 
     $or: [
        { nome: "Big Mac" }, 
        { nome: "Quarteirão com Queijo" },
      ],
    },
    {
     $push: {
       ingredientes: "bacon",
     },
    },
    { upsert: true },
  );

db.produtos.find(
  {},
  {
    _id: false, nome: 1, ingredientes: 1,
  },
);
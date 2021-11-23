db.produtos.updateOne(
    { nome: "Big Mac" },
    {
      $currentDate: { 
        lastModified: true,
        ultimaModificacao: {
          $type: "timestamp",
        }, 
      },
    },
  );

db.produtos.find(
  { 
    ultimaModificacao: {
        $exists: true, 
    }, 
  },
  {
    _id: false, nome: 1,
  },
);
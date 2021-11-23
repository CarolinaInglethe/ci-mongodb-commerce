// Crie uma query que faça a adição do elemento contém sódio ao final do array tags nos produtos em que o percentual de sódio seja maior do que 20 e menor do que 40.
// db.produtos.updateMany(
//     {
//       "valoresNutricionais.$[elemento].percentual": {
//         $elemeMatch: { $gt: 20, $lt: 40 },
//       },
//     },
//     {  
//       $push: {
//         tags: "contém sódio",
//       },  
//     },
//     { 
//       arrayFilters: [ 
//         { "elemento.tipo": "sódio" }, 
//       ], 
//     },
//  );

// Crie uma query que retorne o nome e tags de todos os documentos.
db.produtos.find(
    {},
    {
      _id: false, nome: 1, valoresNutricionais: 1, tags: 1,
    },
  );
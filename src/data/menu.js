export default [
    {
      title: 'Desayuno',
      url: '/Desayuno',
      articles:
      {"ID":"sandwich",
      "article": "Sandwich de jamón y queso",
      "price": "$10.00"}
    },
    {
      title: 'Hamburguesas',
      url: '/Hamburguesas',
      articles:
        [{
          "ID":"hamb001",
          "article": "Hamburguesa simple",
          "price":"$10.00",
          "type":[
              "res",
              "pollo",
              "vegetariana"
          ]
      },{
          "ID": "hamb002",
          "article":"Hamburguesa doble",
          "price":"$ 15.00",
          "type":[
              "res",
              "pollo",
              "vegetariana"
          ]
      },{
          "ID": "add001",
          "article": "Ingrediente adicional",
          "price": "$01.00",
          "type":[
              "huevo",
              "queso"
          ]
      }]
    },
    {
      title: 'Complementos',
      url: '/Complementos',
      articles:
      [
        {
            "ID": "complement001",
            "article": "Papas fritas",
            "price":"$ 5.00"
        },{
            "ID": "complement002",
            "article": "Aros de cebolla",
            "price":"$ 5.00"
        }
    ]      
    },
    {
      title: 'Bebidas desayuno',
      url: '/Bebidas',
      articles:
      [
        {
            "ID": "coffee001",
            "article": "Café americano",
            "price": "$ 5.00"
        },
        {
            "ID":"coffee002",
            "article":"Café con leche",
            "price":"$ 7.00"
        },
        {
            "ID": "juice001",
            "article": "Jugo de frutas natural",
            "price":"$ 7.00"
        }
    ]
    },
    {
      title: 'Bebidas',
      url: '/Bebidas-ham',
      articles:
      [
        {
            "ID":"water001",
            "article": "Agua de 500ml",
            "price": "$ 5.00"
        },{
            "ID":"water002",
            "article":"Agua de 750ml",
            "price":"$ 7.00"
        },{
            "ID": "soda001",
            "article": "Refresco 500ml",
            "price":"$ 7.00"
        },{
            "ID": "soda002",
            "article":"Refresco 700ml",
            "price":"$10.00"
        }
    ]
    }
  ];

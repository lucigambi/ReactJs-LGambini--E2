const productos = [
    {   id: 1,
        nombre: "tele",
        precio: 50000,
        categoria: "electro"
    },

    {   id: 2,
        nombre: "celu",
        precio: 50000,
        categoria: "electro"
    },

    {   id: 3,
        nombre: "calefon",
        precio: 50000,
        categoria: "hogar"
    },

    {   id: 4,
        nombre: "pirulin",
        precio: 50000,
        categoria: "hogar"
    }

]

export const getProductos = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve(productos)
        }, 3000)
    })
}

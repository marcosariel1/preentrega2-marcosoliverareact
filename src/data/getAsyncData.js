import products from "./data";

export default function getAsyncData() {
    console.log("solicitando datos")

    const promiseData = new Promise((resolve, reject) => {
        const errorFatal = false;

        setTimeout(() => {
            if (errorFatal) reject("Error")

            console.log("Promesa terminada")
            resolve(products)
        }, 2000)

    })

    console.log("Promesa generada")
    return promiseData;

}
export function getAsyncDataById(id) {
    console.log("solicitando datos")

    const promiseData = new Promise((resolve, reject) => {
        const errorFatal = false;

        setTimeout(() => {
            if (errorFatal) reject("Error")

            console.log("Promesa terminada")
            const itemRequested = products.find((item) => item.id === Number(id));
            resolve(itemRequested)
        }, 2000)

    })
    return promiseData;

}


export function getAsyncDataByCategory(catId) {
    console.log("solicitando datos para",catId)

    const promiseData = new Promise((resolve, reject) => {
        const errorFatal = false;

        setTimeout(() => {
            if (errorFatal) reject("Error")

            console.log("Promesa terminada")
            const itemRequested = products.filter((item) => item.category.toLowerCase() === catId.toLowerCase());
            resolve(itemRequested)
        }, 2000)

    })
    return promiseData;

}



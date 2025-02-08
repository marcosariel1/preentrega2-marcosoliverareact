import products from "./data";

export default function getAsyncData() {

    const promiseData = new Promise((resolve, reject) => {
        const errorFatal = false;

        setTimeout(() => {
            if (errorFatal) reject("Error")
            resolve(products)
        }, 2000)

    })

    return promiseData;

}
export function getAsyncDataById(id) {

    const promiseData = new Promise((resolve, reject) => {
        const errorFatal = false;

        setTimeout(() => {
            if (errorFatal) reject("Error")

            const itemRequested = products.find((item) => item.id === Number(id));
            resolve(itemRequested)
        }, 2000)

    })
    return promiseData;

}


export function getAsyncDataByCategory(catId) {

    const promiseData = new Promise((resolve, reject) => {
        const errorFatal = false;

        setTimeout(() => {
            if (errorFatal) reject("Error")
            const itemRequested = products.filter((item) => item.category.toLowerCase() === catId.toLowerCase());
            resolve(itemRequested)
        }, 2000)

    })
    return promiseData;

}



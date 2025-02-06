
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query,where, addDoc } from "firebase/firestore";
import products from './data';

const firebaseConfig = {
  apiKey: "AIzaSyD-OwmJwpBIcClLWXX8T8EyZhuWMJgaRpE",
  authDomain: "marcos-ecommerce-react.firebaseapp.com",
  projectId: "marcos-ecommerce-react",
  storageBucket: "marcos-ecommerce-react.firebasestorage.app",
  messagingSenderId: "423356301508",
  appId: "1:423356301508:web:b05cc3e46811439620c991"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




export default async function getAsyncData() {
    const collectionRef = collection(db, "products");
    const producsSnapshot = await getDocs(collectionRef);
    const documentsData = producsSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id};

    });
    return documentsData;
}

export async function getAsyncDataById(id) {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    return docData;

}

export async function getAsyncDataByCategory(catId){
    const productsColRef = collection(db, "products");
    const q = query(productsColRef, where("category", "==", catId));
    
    const producsSnapshot = await getDocs(q);
    const documentsData = producsSnapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id};

    });
    return documentsData;

}

//solo p para probar
export async function createDocument(){

    const docRef = await addDoc(collection(db, "products"), {
      
      title: 'Amplificador Blackstar',
      price: 10000,
      img: '/images/ampli5.webp',
      stock: 10,
      category: 'Amplificadores',
      description:'Amplificador Blackstar de 40w transistorizado' 
      });
      console.log("Document written with ID: ", docRef.id);
}
async function exportProductsToDB() {
 for(let item of products){
    delete item.id;
    const docId = await addDoc(collection(db, "products"), item);
    console.log("Document written with ID: ", docId.id);
}}

export async function createBuyOrder(orderData){
    const newOrderDoc = await addDoc(collection(db, "orders"), orderData);
    return newOrderDoc.id;

}
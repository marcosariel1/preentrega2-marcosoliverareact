import { getAsyncDataById } from "../data/database"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "./Loader";


export default function ItemDetailContainer() {
    const [itemInfo, setItemInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function getItemData() {
            const response = await getAsyncDataById(id);
            setItemInfo(response);
        }
        getItemData();

    }, [id]);

    console.log(itemInfo)

    if (itemInfo === null) {
        return <Loader />
    }
    else return <ItemDetail {...itemInfo} id={id} />;

}

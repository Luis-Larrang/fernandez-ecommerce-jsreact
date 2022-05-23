import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/itemDetail/ItemDetail';
import Spinner from '../../components/Spinner/Spinner';
import db from '../../services/firebase';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const { id } = useParams([]);
    const [selectedItem, setSelectedItem] = useState();   
    const [load, setLoad] = useState(true);

    const getSelected = async(idItem) =>{
        try {
            setLoad(true);
            const document = doc(db, "items", idItem);
            const response = await getDoc(document);
            const result = {id: response.id, ...response.data()};            
            setSelectedItem(result);
            setLoad(false);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getSelected(id);
    }, [id]);

    return (
        <>
            {load ? <Spinner /> : <ItemDetail item={selectedItem} />};
        </>
    )
}

export default ItemDetailContainer;
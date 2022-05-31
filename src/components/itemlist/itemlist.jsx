import React from "react";
import Item from "../item/item";
import { Container, Stack} from "react-bootstrap";
import "./itemList.css"

function ItemList({data}) {
    return (
        <Container>
            <Stack direction="horizontal"  className="distribucion">                       
                {data.map(item=> <Item item={item} key={item.id} />)}           
            </Stack>            
        </Container>
    )    
}

export default ItemList;
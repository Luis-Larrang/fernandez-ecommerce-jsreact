import React from "react";
import Item from "../item/item";
import { Container, Stack} from "react-bootstrap";

function ItemList({data}) {
    return (
        <Container>
            <Stack direction="horizontal" gap={3}>                       
                {data.map(item=> <Item item={item} key={item.id} />)}           
            </Stack>            
        </Container>
    )    
}

export default ItemList;
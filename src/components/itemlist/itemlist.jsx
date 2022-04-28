import React from "react";
import Item from "../item/item";
import { Container, Stack} from "react-bootstrap";

function ItemList({items}) {
    return (
        <Container>
            <Stack direction="horizontal" gap={3}>                       
                {items.map(item=> <Item item={item} key={item.id} />)}           
            </Stack> 
        </Container>
    )
    /*return(
        <div className="item-list">
            {items.map(item=> <Item item={item} key={item.id} />)}
        </div>
    )*/
}

export default ItemList;
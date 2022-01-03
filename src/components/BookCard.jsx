import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    margin: 5px;
    position: relative;
    width: 241px;
    height: 359px;
    background: url(${props => props.imageUrl});
    background-size: 100% 100%;
    border-radius: 23px;
    cursor: pointer;
`

const CardHeader = styled.div`
    position: absolute;
    height: 50px;
    width: 100%;
    bottom: 30px;
    background-color: #0098F1;
    display: flex;
    justify-content: center;
`

const CardTitle = styled.span`
    align-self: center;
`


const BookCard = ({id, title, imageUrl}) => {
    const history = useHistory();
    return (
        <Card imageUrl={imageUrl} onClick={() => history.push(`/bookDetail/${id}`)}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
        </Card>
    )
}

export default BookCard;
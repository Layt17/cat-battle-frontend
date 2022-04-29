import { CatDto } from "../../api/dto/cat.dto"

export interface Props {
    data: CatDto
}

const Cat = ({data}: Props) => {
    const onClick = () => {console.log(data)} ///////////////////////////////////////
    return (
        <button onClick={onClick} className="item-cat">
            Name: {data.name}<br />
            Color: {data.color}
        </button>
    )
}

export default Cat;
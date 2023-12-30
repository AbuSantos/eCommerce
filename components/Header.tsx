import { Dispatch, SetStateAction } from "react";

type PropsType = {
    viewCart: boolean;
    setViewCart: Dispatch<SetStateAction<boolean>>
}
const Header = ({ viewCart, setViewCart }: PropsType) => {
    return (
        <div>Header</div>
    )
}

export default Header
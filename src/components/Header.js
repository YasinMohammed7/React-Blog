import { FaMobileAlt, FaTabletAlt, FaLaptop } from "react-icons/fa"

const Header = ({ title, width }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            {width < 768 ? <FaMobileAlt />
                : width < 992 ? <FaTabletAlt />
                    : <FaLaptop />}
        </header>
    )
}

export default Header
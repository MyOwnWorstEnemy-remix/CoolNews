import MainNav from "../../components/blocks/main-nav/main-nav";
import Logo from "../../assets/logo.png";
import { StyledHeader, Link } from "./styles";

function Header () {
    return <StyledHeader>
        <Link to="/">
            <img src={Logo} width={170} height={68} alt="Cool News"/>
        </Link>
        <MainNav />
    </StyledHeader>;
}

export default Header;
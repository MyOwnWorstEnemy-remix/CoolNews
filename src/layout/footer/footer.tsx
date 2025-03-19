import Logo from "../../assets/logo.png"
import { StyledFooter, Contacts, Link } from "./styles";

function Footer() {
    return (
        <StyledFooter>
            <Link to="/">
                <img src={Logo} width={170} height={68} alt="Cool News"/>
            </Link>
            <Contacts>
                <h2>Свяжитесь с нами</h2>
                <p>Телефон: <a href="tel:+79789999999">+7(978)999-99-99</a></p>
                <p>Email: <a href="mailto:example@gmail.com">example@gmail.com</a></p>
            </Contacts>
            <div>
                <p>© Все права защищены</p>
            </div>
        </StyledFooter>
    )
}

export default Footer;
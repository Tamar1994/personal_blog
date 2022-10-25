import { HeaderStyled, LogoStyled, Row, MenuBar, FotoPerfil, UserStateText } from './headerstyles';
import { useSession, signIn, signOut } from "next-auth/react"

const NavBar = () => {

    const { data: session } = useSession();

    if(session){

        return (
            <HeaderStyled>
                <Row>
                    <LogoStyled>Personal Blog</LogoStyled>
                </Row>
                <Row>
                
                    <MenuBar href="/">Página Inicial</MenuBar>
                    <MenuBar href="/createpost">Criar Postagem</MenuBar>
                    <MenuBar>Minhas Postagens</MenuBar>
                </Row>
                <Row>
                    <FotoPerfil src={session.user.image}/>
                    <UserStateText onClick={() => signOut()}>Sair</UserStateText>
                </Row>
            </HeaderStyled>
        )
    } else {
        return(
        <HeaderStyled>
                <Row>
                    <LogoStyled>Personal Blog</LogoStyled>
                </Row>
                <Row>
                    <MenuBar href="/">Página Inicial</MenuBar>
                </Row>
                <Row>
                    <UserStateText onClick={() => signIn()}>Entrar</UserStateText>
                </Row>
            </HeaderStyled>
        )
    }
    
}

export { NavBar } ;
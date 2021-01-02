import React from 'react';

import { Container, Search, User } from './styles';



const Header = () => (

    <Container> 
        
        <Search>
            <input placeholder="Buscar"/>
        </Search>

        <User>
            <img src="https://avatars0.githubusercontent.com/u/53792961?v=4" alt="Avatar"/>
            vellasco.gabriel
        </User>
    </Container>
)


export default Header;
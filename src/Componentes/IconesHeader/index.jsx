import perfil from '../../assets/perfil.svg';
import sacola from '../../assets/sacola.svg';
import styled from 'styled-components';
// import {ShoppingCart} from 'phosphor-react'
// import {UserCircle} from 'phosphor-react'

const Icone = styled.li`
	margin-right: 40px;
	width: 25px;
	cursor: pointer;
`;

const Icones = styled.ul`
	display: flex;
	align-items: center;
`;

const icones = [perfil, sacola];

// const icones = [
//     ShoppingCart= <ShoppingCart size={32} weight="bold" />,
//     UserCircle= <UserCircle size={32} weight="bold" />
// ];

function IconesHeader() {
	return (
		<Icones>
			{icones.map((icone) => (
				<Icone>
					<img
						src={icone}
						alt=""></img>
				</Icone>
			))}
		</Icones>
	);
}

export default IconesHeader;

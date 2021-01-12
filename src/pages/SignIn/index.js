import React, { useState } from 'react';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from "./styles";

export default function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Background>
			<Container>
				<Logo source={require('../../assets/Logo.png')}/>

				<AreaInput>
					<Input
						placeholder="Email"
						autoCorrect={false}
						autoCapitalize="none"
						value={email}
						onChangeText={ (text) => setEmail(text)}
					/>
				</AreaInput>

				<AreaInput>
					<Input
						placeholder="Senha"
						autoCorrect={false}
						autoCapitalize="none"
						value={password}
						onChangeText={ (text) => setPassword(text)}
					/>
				</AreaInput>

				<SubmitButton>
					<SubmitText>Entry</SubmitText>
				</SubmitButton>

				<Link>
					<LinkText>Create new account</LinkText>
				</Link>
			</Container>
		</Background>
	);
}
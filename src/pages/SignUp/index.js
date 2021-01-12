import React, { useState } from 'react';
import { Platform } from "react-native";

import { 
    Background, Container, AreaInput, Input, SubmitButton, SubmitText
} from "../SignIn/styles";

export default function SignUp() {
    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Background>
			<Container
				behaviour={Platform.OS === 'ios' ? 'padding' : ''}
				enabled
			>
				<AreaInput>
					<Input
						placeholder="Name"
						autoCorrect={false}
						autoCapitalize="none"
						value={name}
						onChangeText={ (text) => setName(text)}
					/>
				</AreaInput>

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
					<SubmitText>Register</SubmitText>
				</SubmitButton>
			</Container>
		</Background>
	);
}
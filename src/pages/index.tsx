import Head from 'next/head';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container } from '@material-ui/core';
import {
	FormElementsContainer,
	ProfissionaisPaper,
	ProfissionaisContainer,
} from 'ui/styles/pages/index.style';

export default function Home() {
	return (
		<div>
			<SafeEnvironment />
			<PageTitle
				title={'Conheça os profissionais'}
				subtitle={
					'Preencha seu cadastro e veja todos os profissionais da sua localidade'
				}
			/>
			<Container>
				<FormElementsContainer>
					<TextFieldMask
						variant={'outlined'}
						mask={'99.999-999'}
						label={'Digite seu CEP'}
						fullWidth
					/>
					<Typography color={'error'}>CEP inválido</Typography>
					<Button
						variant={'contained'}
						color={'secondary'}
						sx={{ width: '220px' }}
					>
						Buscar
					</Button>
				</FormElementsContainer>
				<ProfissionaisPaper>
					<ProfissionaisContainer>
						<UserInformation
							name={'Uchi'}
							picture={'https://github.com/chiucchi.png'}
							rating={4}
							description={'Belo Horizonte'}
						/>
						<UserInformation
							name={'Uchi'}
							picture={'https://github.com/chiucchi.png'}
							rating={4}
							description={'Belo Horizonte'}
						/>
						<UserInformation
							name={'Uchi'}
							picture={'https://github.com/chiucchi.png'}
							rating={4}
							description={'Belo Horizonte'}
						/>
						<UserInformation
							name={'Uchi'}
							picture={'https://github.com/chiucchi.png'}
							rating={4}
							description={'Belo Horizonte'}
						/>
						<UserInformation
							name={'Uchi'}
							picture={'https://github.com/chiucchi.png'}
							rating={4}
							description={'Belo Horizonte'}
						/>
						<UserInformation
							name={'Uchi'}
							picture={'https://github.com/chiucchi.png'}
							rating={4}
							description={'Belo Horizonte'}
						/>
					</ProfissionaisContainer>
				</ProfissionaisPaper>
			</Container>
		</div>
	);
}

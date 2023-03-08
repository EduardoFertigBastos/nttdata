import React, { useCallback, useState } from "react";

import Movie from "interface/Movie";

import CardMovie from "components/CardMovie";
import Header from "components/Header";

import Toast from "hooks/toast/Toast";

import api from "services/api";

import {
	Apresentation,
	Button,
	Container,
	Description,
 	Form,
	InputTitle,
	Title,
} from "./styles";


const Home = () => {
	const [title, setTitle] = useState<string>('');
	const [movie, setMovie] = useState<Movie|null>(null);

	const handleTitle = useCallback((event: any) => {
		setTitle(event.target.value);
	}, []);

	const clearForm = useCallback(() => {
		setTitle('');
	}, []);

	const handleSubmit = useCallback(
		(event: any) => {
			event.preventDefault()
			if (!title) {
				new Toast().error('Please, enter a movie title!');
				return;
			}

			let toast = new Toast().loading();

			api.get(`movies?title=${title}`)
				.then(({ data }) => {
					if (data.Response === 'False') {
						setMovie(null);
						toast.error('Movie not found!');
						return;
					} 

					setMovie(data);
					toast.success('Movie found!');
				})
				.catch(error => {
					toast.error('Server Error!');
				});
		},
		[title, clearForm]
	);
	
	return (
		<Container>
			<Header />

			<Form >
				<Apresentation>
					<Title>Search Movies</Title>
					<Description>
						The OMDB (Open Movie Database) API is a publicly available database of information on 
						movies and television shows. To search for a movie by title in the OMDB API, you can 
						use a form that allows you to enter the title of the movie you're looking for.
					</Description>
				</Apresentation>

				<InputTitle
					type='Text'
					name='Title'
					placeholder='Star Wars: Episode IV - A New Hope'
					onChange={handleTitle}
				/>

				<Button style={{ marginLeft: '10px' }} 
					onClick={handleSubmit}> 
					Search 
				</Button>
				<Button onClick={clearForm}> 
					Reset 
				</Button>
			</Form>

			{movie &&
				<CardMovie movie={movie}/>
			}

		</Container>
	);
};

export default Home;

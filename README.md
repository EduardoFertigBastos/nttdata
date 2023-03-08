# NTTDATA CHALLENGE

You must have NPM installed.
To install just access the following site and follow the recommendations.
https://nodejs.org/en/

### Backend

to install the dependencies on the backend, just access the "server" folder and run the following command.

        npm i
        
To run the backend application, just enter the "server" folder and run the command.
  
        npm start


The API will run on port 3333 and has the "/movies" route which accepts the optional query parameter "title". This route will return a movie, or a response of no movies found, if the movie doesn't exist in the OMDB database.


### Frontend

to install the dependencies on the frontend, just access the "web" folder and run the following command.

        npm i

To run the frontend application, just enter the "web" folder and run the command.
  
        npm start

The frontend will run on port 3000. To carry out the search, just inform the title in the Input, and press the button to search.
Below, the details of the film will be displayed, such as its title, description, authors, rating (in stars) and photo.
It is also possible to favorite the movie, whose favorite movies will be saved in localStorage.

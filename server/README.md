# NTTDATA CHALLENGE

You must have NPM installed.
To install just access the following site and follow the recommendations.
https://nodejs.org/en/

to install the dependencies, just run the following command.

        npm i
        
To run the application, just run the command.
  
        npm start

The API will run on port 3333 and has the "/movies" route which accepts the optional query parameter "title". This route will return a movie, or a response of no movies found, if the movie doesn't exist in the OMDB database.
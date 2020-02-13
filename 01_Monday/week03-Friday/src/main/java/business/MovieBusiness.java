package business;

import dto.MovieDTO;
import entities.Movie;
import facades.MovieFacade;
import utils.EMF_Creator;

import javax.persistence.EntityManagerFactory;
import java.util.ArrayList;
import java.util.List;

public class MovieBusiness {
    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(
            "pu",
            "jdbc:mysql://localhost:3307/week3_movie",
            "dev",
            "ax2",
            EMF_Creator.Strategy.CREATE);
    private static final MovieFacade FACADE = MovieFacade.getMovieFacade(EMF);


    public List<MovieDTO> getAllMovies() {
        List<Movie> movies = FACADE.getAllMovies();
        return convertMovieToDTO(movies);
    }

    public List<MovieDTO> getMoviesByTitle (String title) {
        return convertMovieToDTO(FACADE.getMoviesByTitle(title));
    }

    public List<MovieDTO> getMoviesByDirector (String director) {
        return convertMovieToDTO(FACADE.getMoviesByDirector(director));
    }

    public MovieDTO getMovieById(Long id) {
        Movie movie = FACADE.getMovieById(id);
        return new MovieDTO(movie.getId(), movie.getImgUrl(), movie.getTitle(), movie.getYear(), movie.getDirector(), handleMovieRating(movie));
    }

    public void createMovies (List<Movie> movies) {
        movies.forEach(movie -> {
            FACADE.createMovie(movie.getImgUrl(), movie.getTitle(), movie.getYear(), movie.getDirector(), movie.getVotes());
        });
    }

    public void incrementVoteById (Long id) {
        FACADE.incrementVotes(id);
    }

    public void decrementVoteById (Long id) {
        FACADE.decrementVotes(id);
    }

    private List<MovieDTO> convertMovieToDTO (List<Movie> movies) {
        List<MovieDTO> movieDTOS = new ArrayList<>();

        movies.forEach(movie -> {
            int movieRating = handleMovieRating(movie);
            MovieDTO movieDTO = new MovieDTO(movie.getId(), movie.getImgUrl(), movie.getTitle(), movie.getYear(), movie.getDirector(), movieRating);
            movieDTOS.add(movieDTO);
        });

        return movieDTOS;
    }

    private int handleMovieRating (Movie movie) {
        int votes = movie.getVotes();
        int movieRating;

        if (votes > 100) {
            movieRating = 5;
        } else if (votes > 60) {
            movieRating = 4;
        } else if (votes > 30) {
            movieRating = 3;
        } else if (votes > 20) {
            movieRating = 2;
        } else {
            movieRating = 1;
        }

        return movieRating;
    }
}

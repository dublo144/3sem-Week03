package rest;

import business.MovieBusiness;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import entities.Movie;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

//Todo Remove or change relevant parts before ACTUAL use
@Path("movies")
public class MovieResource {
    private MovieBusiness movieBusiness = new MovieBusiness();
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @GET
    @Path("/id/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getMovieById (@PathParam("id") Long id) {
        return Response.ok()
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Credentials", "true")
                .header("Access-Control-Allow-Headers","origin, content-type, accept, authorization")
                .header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS, HEAD")
                .entity(GSON.toJson(movieBusiness.getMovieById(id)))
                .build();
    }

    @GET
    @Path("all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllMovies () {
        return Response.ok()
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Credentials", "true")
                .header("Access-Control-Allow-Headers","origin, content-type, accept, authorization")
                .header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS, HEAD")
                .entity(GSON.toJson(movieBusiness.getAllMovies()))
                .build();
    }

    @POST
    @Path("create")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createMovies (String json) {
        List<Movie> movies = GSON.fromJson(json, new TypeToken<List<Movie>>(){}.getType());
        movieBusiness.createMovies(movies);
        return Response.ok()
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Credentials", "true")
                .header("Access-Control-Allow-Headers","origin, content-type, accept, authorization")
                .header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS, HEAD")
                .build();
    }

    @PUT
    @Path("like/{id}")
    public Response incrementVotesForMovie (@PathParam("id") Long id) {
        movieBusiness.incrementVoteById(id);
        return Response.ok()
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Credentials", "true")
                .header("Access-Control-Allow-Headers","origin, content-type, accept, authorization")
                .header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS, HEAD")
                .build();
    }

    @PUT
    @Path("dislike/{id}")
    public Response decrementVotesForMovie (@PathParam("id") Long id) {
        movieBusiness.decrementVoteById(id);
        return Response.ok()
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Credentials", "true")
                .header("Access-Control-Allow-Headers","origin, content-type, accept, authorization")
                .header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS, HEAD")
                .build();
    }


    @GET
    @Path("/title/{title}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getMovieById (@PathParam("title") String title) {
        return GSON.toJson(movieBusiness.getMoviesByTitle(title));
    }

    @GET
    @Path("/director/{director}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getMovieByDirector (@PathParam("director") String director) {
        return GSON.toJson(movieBusiness.getMoviesByDirector(director));
    }


}

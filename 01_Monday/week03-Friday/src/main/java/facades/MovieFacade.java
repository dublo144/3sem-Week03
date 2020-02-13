package facades;

import entities.Movie;

import javax.persistence.*;
import java.util.List;
import java.util.Optional;

/**
 * Rename Class to a relevant name Add add relevant facade methods
 */
public class MovieFacade {

    private static MovieFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private MovieFacade() {
    }


    /**
     * @param _emf
     * @return an instance of this facade class.
     */
    public static MovieFacade getMovieFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new MovieFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public Movie createMovie(String imgUrl, String title, int year, String director, int votes) {
        Movie movie = new Movie(imgUrl, title, year, director, votes);
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(movie);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
        return movie;
    }

    public List<Movie> getAllMovies () {
        EntityManager em = getEntityManager();
        TypedQuery<Movie> movies = em.createQuery("SELECT m from Movie m", Movie.class);
        return movies.getResultList();
    }

    public List<Movie> getMoviesByTitle (String title) {
        EntityManager em = getEntityManager();
        TypedQuery<Movie> query = em.createQuery("SELECT m FROM Movie m WHERE m.title LIKE CONCAT('%', :title, '%')", Movie.class);
        query.setParameter("title", title);
        return query.getResultList();
    }

    public List<Movie> getMoviesByDirector (String director) {
        EntityManager em = getEntityManager();
        TypedQuery<Movie> query = em.createQuery("SELECT m FROM Movie m WHERE m.director LIKE CONCAT('%', :director, '%')", Movie.class);
        query.setParameter("director", director);
        return query.getResultList();
    }

    public Movie updateTitle (Long id, String newTitle) {
        EntityManager em = getEntityManager();
        Movie movie = em.find(Movie.class, id);
        try {
            em.getTransaction().begin();
            movie.setTitle(newTitle);
            em.persist(movie);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
        return movie;
    }

    public void incrementVotes (Long id) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Query query = em.createQuery("UPDATE Movie m SET m.votes = m.votes + 1 WHERE m.id = :id");
            query.setParameter("id", id);
            query.executeUpdate();
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    public void decrementVotes (Long id) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Query query = em.createQuery("UPDATE Movie m SET m.votes = m.votes - 1 WHERE m.id = :id");
            query.setParameter("id", id);
            query.executeUpdate();
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

//    public void updateVotes (Long id, int votes) {
//        EntityManager em = getEntityManager();
//        Query query = em.createQuery("UPDATE Movie m SET m.votes = :votes WHERE m.id = :id");
//        query.setParameter("votes", votes);
//        query.setParameter("id", id);
//        query.executeUpdate();
//    }

    public void deleteMovieById (Long id) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.createNamedQuery("Movie.deleteById").setParameter("id", id).executeUpdate();
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    public Movie getMovieById(Long id) {
        EntityManager em = getEntityManager();
        return em.find(Movie.class, id);
    }
}

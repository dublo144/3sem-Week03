package facades;

import entities.Movie;
import org.junit.jupiter.api.*;
import utils.EMF_Creator;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;

import static org.junit.jupiter.api.Assertions.assertEquals;

import utils.EMF_Creator.DbSelector;
import utils.EMF_Creator.Strategy;

//Uncomment the line below, to temporarily disable this test
//@Disabled
public class MovieFacadeTest {

    private static EntityManagerFactory emf;
    private static MovieFacade facade;
    private static Movie m1, m2;

    public MovieFacadeTest() {
    }

    //@BeforeAll
    public static void setUpClass() {
        emf = EMF_Creator.createEntityManagerFactory(
                "pu",
                "jdbc:mysql://localhost:3307/startcode_test",
                "dev",
                "ax2",
                Strategy.DROP_AND_CREATE);
        facade = MovieFacade.getMovieFacade(emf);
    }

    /*   **** HINT **** 
        A better way to handle configuration values, compared to the UNUSED example above, is to store those values
        ONE COMMON place accessible from anywhere.
        The file config.properties and the corresponding helper class utils.Settings is added just to do that. 
        See below for how to use these files. This is our RECOMENDED strategy
     */
    @BeforeAll
    public static void setUpClassV2() {
        emf = EMF_Creator.createEntityManagerFactory(DbSelector.TEST, Strategy.DROP_AND_CREATE);
        facade = MovieFacade.getMovieFacade(emf);
    }

    @AfterAll
    public static void tearDownClass() {
//        Clean up database after test is done or use a persistence unit with drop-and-create to start up clean on every test
    }

    // Setup the DataBase in a known state BEFORE EACH TEST
    //TODO -- Make sure to change the script below to use YOUR OWN entity class
    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        m1 = new Movie("Some url","Some txt", 1999, "John Doe", 20);
        m2 = new Movie("Some url","aaa", 2000, "ccc", 30);
        try {
            em.getTransaction().begin();
            em.createNamedQuery("Movie.deleteAllRows").executeUpdate();
            em.persist(m1);
            em.persist(m2);

            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    @AfterEach
    public void tearDown() {
//        Remove any data after each test was run
    }

    @Test
    void createMovie() {
        facade.createMovie("Some url","Some movie", 2000, "some director", 70);
        int numberOfMoviesInDB = emf.createEntityManager().createQuery("SELECT m from Movie m").getResultList().size();
        assertEquals(3, numberOfMoviesInDB);
    }

    @Test
    void getAllMovies() {
        int numberOfMoviesInDB = facade.getAllMovies().size();
        assertEquals(2, numberOfMoviesInDB);
    }

    @Test
    void getMoviesByTitle() {
        int moviesReturned = facade.getMoviesByTitle("aaa").size();
        assertEquals(1, moviesReturned);
    }

    @Test
    void getMoviesByDirector() {
        int moviesReturned = facade.getMoviesByDirector("John Doe").size();
        assertEquals(1, moviesReturned);
    }

    @Test
    void updateMovie_byTitle() {
        Long id = m1.getId();
        String newTitle = "Some new title";
        facade.updateTitle(id, newTitle);

        Movie movie = emf.createEntityManager().find(Movie.class, id);
        assertEquals(newTitle, movie.getTitle());
    }

    @Disabled
    @Test
    void updateMove_incrementVotes() {
        Long id = m1.getId();
        facade.incrementVotes(id);
        int numOfVotes = emf.createEntityManager()
                            .createQuery("SELECT m.votes FROM Movie m WHERE m.id = :id")
                            .setParameter("id", id)
                            .getFirstResult();
        assertEquals(21, numOfVotes);
    }

    @Test
    void deleteMovieById() {
        Long id =  m1.getId();
        facade.deleteMovieById(id);

        int numberOfMoviesInDb;
        EntityManager em = emf.createEntityManager();

        TypedQuery<Movie> query = em.createNamedQuery("Movie.selectAll", Movie.class);
        numberOfMoviesInDb = query.getResultList().size();

        assertEquals(1, numberOfMoviesInDb);
    }
}

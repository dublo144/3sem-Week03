package entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@NamedQueries({
        @NamedQuery(name = "Movie.selectAll", query = "SELECT m FROM Movie m"),
        @NamedQuery(name = "Movie.deleteAllRows", query = "DELETE from Movie"),
        @NamedQuery(name = "Movie.deleteById", query = "DELETE FROM Movie WHERE id = :id")
})
public class Movie implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imgUrl;
    private String title;
    private int year;
    private String director;
    private int votes;

    public Movie(String imgUrl, String title, int year, String director, int votes) {
        this.imgUrl = imgUrl;
        this.title = title;
        this.year = year;
        this.director = director;
        this.votes = votes;
    }
}

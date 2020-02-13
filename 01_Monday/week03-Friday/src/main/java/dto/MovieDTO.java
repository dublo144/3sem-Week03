package dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class MovieDTO {
    private Long id;
    private String imgUrl;
    private String title;
    private int year;
    private String director;
    private int rating;
}

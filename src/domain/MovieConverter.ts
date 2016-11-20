import {Movie} from './Movie';

export class MovieConverter {

    public static create(data:any) : Movie {
        let movie = new Movie();        
        movie.title = data.Title;
        movie.year = data.Year;
        movie.type = data.Type;
        movie.id = data.imdbID;

        if(data.Poster != 'N/A') {
          movie.posterUrl = data.Poster;
        }

        return movie;
    }
}
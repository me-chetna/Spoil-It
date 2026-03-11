export interface Movie {
    id: number; //unique id number for each movie 
    title: string; //name of movie
    overview: string; //description
    poster_path: string; //the image path returned by TMDB
    backdrop_path: string; //big cinematic background image (16:9)
    release_date: string; 
    vote_average: number; //average rating given by users on TMDB
}
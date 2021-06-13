import moment from 'moment';
import { MovieRespInteface } from 'src/modules/Home/types';

interface Props {
  movieData: MovieRespInteface;
}
export const Card = (props: Props) => {
  return (
    <div
      style={{
        marginBottom: '20px',
        maxWidth: '256px',
        minWidth:"256px"
      }}
    >
      <div
        style={{
          marginBottom: '10px',
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300/${props.movieData.poster_path}`}
          alt={props.movieData.title}
          style={{
            height: '380px',
            width: '256px',
            borderRadius: '16px',
          }}
        ></img>
      </div>
      <div
        style={{
          fontWeight: 600,
          fontFamily: 'Inter',
          fontSize: '20px',
          marginBottom: '5px',
        }}
      >
        {props.movieData.title}
      </div>
      <div
        style={{
          color: '#888888',
          fontFamily: 'Inter',
          fontSize: '16px',
        }}
      >
        {moment(props.movieData.release_date).format("MMM DD, YYYY")}
      </div>
    </div>
  );
};

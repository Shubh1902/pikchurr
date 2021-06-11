export const Card = () => {
  return (
    <div
      style={{
        marginBottom: '20px',
        marginLeft: '0',
        marginRight: 'auto',
      }}
    >
      <div
        style={{
          marginBottom: '10px',
        }}
      >
        <img
          src="https://image.tmdb.org/t/p/w300/rTh4K5uw9HypmpGslcKd4QfHl93.jpg"
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
        Birds of prey
      </div>
      <div
        style={{
          color: '#888888',
          fontFamily: 'Inter',
          fontSize: '16px',
        }}
      >
        Feb 05, 2005
      </div>
    </div>
  );
};

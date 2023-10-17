import '../members.scss';

const Members = () => {
  const people = [
    {
      id: 1,
      name: 'Gabriel Andrade',
      link: 'https://gandradep.com/',
      imageUrl: './assets/gabriel.jpg',
    },
    {
      id: 2,
      name: 'Craig McAllister',
      link: 'https://cryomusic.com/',
      imageUrl: './assets/craig.jpg',
    },
    {
      id: 3,
      name: 'Chuck Anthony',
      link: 'https://www.linkedin.com/in/chuck-anthony-gloria-8604ab296//',
      imageUrl: './assets/chuck.jpg',
    },
  ];
  return (

    <div className="container d-flex flex-column flex-sm-row align-items-start justify-content-center member">
      {people.map((person) => (
        <div key={person.id} className="d-flex align-items-center justify-content-center my-4">
          <a href={person.link} target="_blank" rel="noopener noreferrer" className="">
            <img
              src={person.imageUrl}
              alt={person.name}
              className="img-fluid"
            />
            <div className="hover-overlay" />
          </a>
          <p>{person.name}</p>
        </div>
      ))}
    </div>

  );
};

export default Members;

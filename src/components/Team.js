import Members from './Members';
import '../members.scss';

const Team = () => {
  const teacher = {
    name: 'Zoe Lin',
    link: 'https://www.nagretshei.com/',
    imageUrl: './assets/zoe.jpg',
  };
  return (
    <>
      <h2 className="team-titles">Members:</h2>
      <Members />
      <h2 className="team-titles">Teacher:</h2>
      <div className="container member d-flex flex-column align-items-start justify-content-center">
        <div className="d-flex align-items-center justify-content-center my-4">
          <a href={teacher.link} target="_blank" rel="noopener noreferrer" className="">
            <img
              src={teacher.imageUrl}
              alt={teacher.name}
              className="img-fluid"
            />
            <div className="hover-overlay" />
          </a>
          <p>{teacher.name}</p>
        </div>
      </div>

    </>
  );
};

export default Team;

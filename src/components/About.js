const About = () => (
  <div className="container text-white my-5 col-sm-9 about">
    <p className="mb-5">
      Welcome to Taipei Sounds, a unique auditory experience that explores the vibrant sounds of
      Taipei&apos;s streets. Developed as part of the &quot;Fundamental Programming for Digital
      Music and Sound Synthesis&quot; class at National Taiwan Normal University, this project
      offers a creative blend of technology and music.
    </p>
    <h2>Discover the Sounds of Taipei</h2>
    <p className="mb-5">
      Taipei Soundscapes allows you to immerse yourself in the city&apos;s sonic landscape.
      Experience the music of three iconic vehicles: the garbage truck, MRT stations,
      and pre-stop bus tunes.
    </p>
    <div className="d-flex flex-column">
      <h2 className="">Behind the Scenes: A Blend of Art and Technology</h2>
      <p className="mb-5 tet-end">
        We captured these unique sounds and transformed them into MIDI scripts using Python. Chuck,
        a sound synthesis programming language, brought these scripts to life. A touch of innovation
        emerged as we used Python to randomize the notes within the MIDI scripts, creating a unique
        composition.
      </p>
    </div>

    <h2>Awards and Recognition</h2>
    <p className="mb-4">
      Taipei Soundscapes received recognition at the
      <a href="https://www.aa.ntnu.edu.tw/uploads/asset/data/634cdd78843f758eabb2c4c8/6097_b8bc008a.pdf" target="_blank" rel="noreferrer"> Computer Programming Contest </a>
      organized by NTNU&apos;s Computational Thinking and Programming Education Division.
    </p>
  </div>
);

export default About;

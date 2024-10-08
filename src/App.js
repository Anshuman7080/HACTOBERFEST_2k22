import "./App.css";
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { profiles } from "./profiles";

function ProfileCard({ profile }) {
  return (
    <div className="Card">
      <div className="Left-Section">
        <img
          src={profile.cardImgSrc}
          alt={profile.cardName}
          className="profile-image"
        />
        <hr />
        <div className="Social">
          <div className="icons">
            <a href={profile.cardTwitter} aria-label="Twitter">
              <AiOutlineTwitter size={30} />
            </a>
            <a href={profile.cardLinkedin} aria-label="LinkedIn">
              <AiFillLinkedin size={30} />
            </a>
            <a href={profile.cardGithub} aria-label="GitHub">
              <AiOutlineGithub size={30} />
            </a>
            <a
              href={profile.cardWebsite}
              target="_blank"
              rel="noreferrer"
              aria-label="Website"
            >
              <CgWebsite size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="Right-Section">
        <div><strong>Name:</strong> {profile.cardName}</div>
        <div><strong>College/Organization:</strong> {profile.cardCollege}</div>
        <div><strong>Year:</strong> {profile.cardYear}</div>
        <div><strong>Branch:</strong> {profile.cardBranch}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Basics of &nbsp;<strong><i>Github</i></strong>&nbsp; and Introduction to &nbsp;<strong><i>Hactoberfest</i></strong>
      </header>
      <div className="App-body">
        {profiles.map(profile => (
          <ProfileCard key={profile.cardName} profile={profile} />
        ))}
        {/* Change the image name and add your image in the Images folder in Public folder */}
        {/* Go to profiles.js and copy lines 1 to 11, paste below the last card, and change the details accordingly. */}
      </div>
    </div>
  );
}

export default App;

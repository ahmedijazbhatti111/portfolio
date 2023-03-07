import './App.css';
import profileImage from './img/myImage.jpg';

function App() {
  return (
    <div className="App">
      <h1>My Protfolio</h1>
      <h1>Author: Ahmad Ijaz Bhatti</h1>
      <img src={profileImage} alt="profile-image"></img>
    </div>
  );
}

export default App;

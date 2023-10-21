import BackgroundVideo from "./BackgroundVideo";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="section section-video">
        <BackgroundVideo />
      </div>

      <div className="section section-title">
        <h1>Your Title Here</h1>
      </div>
    </div>
  );
}

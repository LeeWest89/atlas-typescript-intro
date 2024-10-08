import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-full flex flex-col items-center justify-between p-8 min-h-screen bg-night-bone">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;

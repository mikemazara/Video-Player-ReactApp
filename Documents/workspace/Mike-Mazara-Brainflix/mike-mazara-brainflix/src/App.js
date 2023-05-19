import './App.scss';
import {useState} from 'react';
import Header from './components/header.js';
import Hero from './components/hero';
import videos from './assets/data/video-details.json';
import Comments from './components/comments';

import NextVideo from './components/next-video';

// const videoDetails = videos.map(obj => {
  //   const { id, title, channel, image, description, views, likes, duration, video, timestamp, comments } = obj;
  //   return { id, title, channel, image, description, views, likes, duration, video, timestamp, comments };
  // });
  
  function App() {
    // create a function to deconstruct the video details in all the video objects in the videos array
    const [thisVideoId, setThisVideoId] = useState(videos[0].id);
    
    const thisVideo = videos.filter(obj => obj.id === thisVideoId)[0];
    const allOtherVideos = videos.filter(obj => obj.id !== thisVideoId);
    
    return (
    <div className="App">
      <Header />
      <Hero
      videoDetails={thisVideo} 
      />
      <Comments comments={thisVideo.comments}/>
    
      <NextVideo videos={allOtherVideos} setThisVideoId={setThisVideoId}/>
    </div>
  );
}

export default App;

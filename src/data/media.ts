import { v4 as uuidv4 } from "uuid";
import { MediaDataFunction } from "../types/media";

const mediaData: MediaDataFunction = () => [
    {
      id: uuidv4(),
      title: "Big Buck Bunny",
      subtitle: "By Blender Foundation",
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      ],
      thumb: "images/BigBuckBunny.jpg",
      cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1280px-Big_Buck_Bunny_thumbnail_vlc.png",  
      active: true,
      color: ['#B6CF30', '#AFB5B9']
    },
    {
      id: uuidv4(),
      title: "Elephant Dream",
      subtitle: "By Blender Foundation",
      description: "The first Blender Open Movie from 2006",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      ],
      thumb: "images/ElephantsDream.jpg",
      cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Elephants_Dream_s5_both.jpg/1200px-Elephants_Dream_s5_both.jpg",
      active: false,
      color: ['#46100F', '#F2D993']
    },
    {
      id: uuidv4(),
      title: "For Bigger Blazes",
      subtitle: "By Google",
      description:
        "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      ],
      thumb: "images/ForBiggerBlazes.jpg",
      cover: "https://images-cdn.ispot.tv/ad/76Ab/default-large.jpg",
      active: false,
      color: ['#BA4800', '#D7D2BD']
    },
  ];

export default mediaData;

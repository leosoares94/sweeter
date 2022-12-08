import create from "zustand";
import { devtools } from "zustand/middleware";
import { Tweet } from "./Tracks";

export interface Item {
  duration: number;
  showMedia: boolean;
  showTime: boolean;
  showSource: boolean;
  showAvatar: boolean;
  showEngagement: boolean;
  updated_at?: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  textColor: string;
  backgroundImage: string;
  backgroundColor: string;
  animation: boolean;
  tweets: Item[] & Tweet[];
}

interface PlaylistState {
  playlists: Playlist[];
  createPlaylist: (data: Playlist) => void;
  addItem?: (data: Item & Tweet) => void;
  updateItem?: (id: string, key: string, value: keyof Tweet & Item) => void;
  removeItem?: (id: string) => void;
}

export const usePlaylists = create<PlaylistState>()(
  devtools((set) => ({
    playlists: [
      {
        id: "123456789456",
        name: "Como usar o sweeter",
        description:
          "Passo a passo de como buscar, selecionar e exibir os seus tweets favoritos.",
        textColor: "white",
        backgroundImage:
          "https://www.picmaker.com/assets/images/Twitterpost/twitter_post_ogimage.png",
        backgroundColor: "#ed64a6",
        animation: true,
        tweets: [
          {
            id: "1595839733153816576",
            author: {
              id: "13298072",
              avatar:
                "https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_normal.png",
              name: "Tesla",
              username: "Tesla",
              verified: true,
            },
            duration: 5,
            showAvatar: true,
            showMedia: true,
            showTime: true,
            showSource: true,
            showEngagement: true,
            source: "Twitter for iPhone",
            created_at: "2022-11-24T18:00:16.000Z",
            metrics: {
              retweets: 13103,
              replies: 0,
              likes: 0,
              quotes: 0,
            },
            retweet: {
              id: "1595682322707267584",
              author_id: "44196397",
              author_avatar:
                "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_normal.jpg",
              verified: true,
            },
            text: "RT @elonmusk: Tesla Full Self-Driving Beta is now available to anyone in North America who requests it from the car screen, assuming you ha…",
            images: [],
            videos: [],
          },
        ],
      },
      {
        id: "123456789456",
        name: "Tweets from Tesla i like",
        description:
          "Some Tweets i've selected from Tesla's Twitter timeline to display on business presentation.",
        textColor: "white",
        backgroundImage:
          "https://images0.persgroep.net/rcs/KRngGsCdesyWDPz7K_vXURfFCDY/diocontent/223895344/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
        backgroundColor: "#ed64a6",
        animation: true,
        tweets: [
          {
            id: "1595148649163460609",
            author: {
              id: "13298072",
              avatar:
                "https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_normal.png",
              name: "Tesla",
              username: "Tesla",
              verified: true,
            },
            source: "Twitter for Mac",
            created_at: "2022-11-22T20:14:09.000Z",
            metrics: {
              retweets: 2915,
              replies: 0,
              likes: 0,
              quotes: 0,
            },
            retweet: {
              id: "1595114899595591681",
              author_id: "1346535293449428992",
              author_avatar:
                "https://pbs.twimg.com/profile_images/1362134815844294661/vKTmG2CO_normal.jpg",
              verified: true,
            },
            text: "RT @TeslaCharging: 40k Superchargers around the world — and counting https://t.co/w6tShTkwPA",
            images: [
              "https://pbs.twimg.com/media/FiL5z62UcAE77b1.jpg",
              "https://pbs.twimg.com/media/FiL5z7VUUAAqOQv.jpg",
              "https://pbs.twimg.com/media/FiL5z68VsAAOzz_.jpg",
              "https://pbs.twimg.com/media/FiL5z69UUAIYov5.jpg",
              "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1130678533_473619_xj1qdn.jpg",
            ],
            videos: [],
          },
          {
            id: "1597370288005521408",
            author: {
              id: "34743251",
              avatar:
                "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_normal.jpg",
              name: "SpaceX",
              username: "SpaceX",
              verified: true,
            },
            source: "Twitter Web App",
            created_at: "2022-11-28T23:22:09.000Z",
            metrics: {
              retweets: 708,
              replies: 175,
              likes: 5070,
              quotes: 219,
            },
            retweet: {
              id: null,
              author_id: null,
              author_avatar: null,
              verified: null,
            },
            text: "Targeting Wednesday, November 30 at 3:39 a.m. ET for Falcon 9’s launch of ispace’s HAKUTO-R Mission 1 – the first privately-led Japanese mission to land on the lunar surface → https://t.co/bJFjLCzWdK https://t.co/lETh1mvNfo",
            images: ["https://pbs.twimg.com/media/Fir_YQtVQAA9rYV.jpg "],
            videos: [],
          },
          {
            id: "1597678808898977792",
            author: {
              id: "11348282",
              avatar:
                "https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_normal.jpg",
              name: "NASA",
              username: "NASA",
              verified: true,
            },
            duration: 5,
            showAvatar: true,
            showMedia: true,
            showTime: true,
            showSource: true,
            showEngagement: true,
            source: "Sprinklr",
            created_at: "2022-11-29T19:48:06.000Z",
            metrics: {
              retweets: 972,
              replies: 150,
              likes: 5583,
              quotes: 94,
            },
            retweet: {
              id: null,
              author_id: null,
              author_avatar: null,
              verified: null,
            },
            text: "Regulators, mount up! 🌟\n\nData from @ChandraXray and @SOFIAtelescope reveal a star cluster that regulates itself—allowing only a limited set of stars to grow before expelling most of the gas from the system. This process likely slows new star creation: https://t.co/T97kdYJlHk https://t.co/Xa5LyOPxdF",
            images: ["https://pbs.twimg.com/media/FiwYZ8dXwAELR1a.jpg"],
            videos: [],
          },
          {
            id: "1596882408313303041",
            author: {
              id: "34743251",
              avatar:
                "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_normal.jpg",
              name: "SpaceX",
              username: "SpaceX",
              verified: true,
            },
            source: "Twitter for iPhone",
            created_at: "2022-11-27T15:03:29.000Z",
            metrics: {
              retweets: 533,
              replies: 0,
              likes: 0,
              quotes: 0,
            },
            retweet: {
              id: "1596850788693061632",
              author_id: "34743251",
              author_avatar:
                "https://pbs.twimg.com/profile_images/1189945624583720960/k6MtoeIt_normal.jpg",
              verified: true,
            },
            text: "RT @Space_Station: The @SpaceX #Dragon cargo craft docked to the Harmony module's space-facing port at 7:39am ET today delivering new solar arrays, science experiments, and cargo replenishing the Exp 68 crew. https://t.co/QGRXaRgydv",
            images: [],
            videos: [],
          }
        ],
      },
      {
        id: "123456789456",
        name: "Tweets from Tesla i like",
        description:
          "Some Tweets i've selected from Tesla's Twitter timeline to display on business presentation.",
        textColor: "white",
        backgroundImage:
          "https://images0.persgroep.net/rcs/KRngGsCdesyWDPz7K_vXURfFCDY/diocontent/223895344/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
        backgroundColor: "#ed64a6",
        animation: true,
        tweets: [
          {
            id: "1595839733153816576",
            author: {
              id: "13298072",
              avatar:
                "https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_normal.png",
              name: "Tesla",
              username: "Tesla",
              verified: true,
            },
            duration: 5000,
            showAvatar: true,
            showMedia: true,
            showTime: true,
            showSource: true,
            showEngagement: true,
            source: "Twitter for iPhone",
            created_at: "2022-11-24T18:00:16.000Z",
            metrics: {
              retweets: 13103,
              replies: 0,
              likes: 0,
              quotes: 0,
            },
            retweet: {
              id: "1595682322707267584",
              author_id: "44196397",
              author_avatar:
                "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_normal.jpg",
              verified: true,
            },
            text: "RT @elonmusk: Tesla Full Self-Driving Beta is now available to anyone in North America who requests it from the car screen, assuming you ha…",
            images: [],
            videos: [],
          },
        ],
      },
      {
        id: "123456789456",
        name: "Tweets from Tesla i like",
        description:
          "Some Tweets i've selected from Tesla's Twitter timeline to display on business presentation.",
        textColor: "white",
        backgroundImage:
          "https://images0.persgroep.net/rcs/KRngGsCdesyWDPz7K_vXURfFCDY/diocontent/223895344/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
        backgroundColor: "#ed64a6",
        animation: true,
        tweets: [
          {
            id: "1595839733153816576",
            author: {
              id: "13298072",
              avatar:
                "https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_normal.png",
              name: "Tesla",
              username: "Tesla",
              verified: true,
            },
            duration: 5000,
            showAvatar: true,
            showMedia: true,
            showTime: true,
            showSource: true,
            showEngagement: true,
            source: "Twitter for iPhone",
            created_at: "2022-11-24T18:00:16.000Z",
            metrics: {
              retweets: 13103,
              replies: 0,
              likes: 0,
              quotes: 0,
            },
            retweet: {
              id: "1595682322707267584",
              author_id: "44196397",
              author_avatar:
                "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_normal.jpg",
              verified: true,
            },
            text: "RT @elonmusk: Tesla Full Self-Driving Beta is now available to anyone in North America who requests it from the car screen, assuming you ha…",
            images: [],
            videos: [],
          },
        ],
      },
      {
        id: "123456789456",
        name: "Tweets from Tesla i like",
        description:
          "Some Tweets i've selected from Tesla's Twitter timeline to display on business presentation.",
        textColor: "white",
        backgroundImage:
          "https://images0.persgroep.net/rcs/KRngGsCdesyWDPz7K_vXURfFCDY/diocontent/223895344/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
        backgroundColor: "#ed64a6",
        animation: true,
        tweets: [
          {
            id: "1595839733153816576",
            author: {
              id: "13298072",
              avatar:
                "https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_normal.png",
              name: "Tesla",
              username: "Tesla",
              verified: true,
            },
            duration: 5000,
            showAvatar: true,
            showMedia: true,
            showTime: true,
            showSource: true,
            showEngagement: true,
            source: "Twitter for iPhone",
            created_at: "2022-11-24T18:00:16.000Z",
            metrics: {
              retweets: 13103,
              replies: 0,
              likes: 0,
              quotes: 0,
            },
            retweet: {
              id: "1595682322707267584",
              author_id: "44196397",
              author_avatar:
                "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_normal.jpg",
              verified: true,
            },
            text: "RT @elonmusk: Tesla Full Self-Driving Beta is now available to anyone in North America who requests it from the car screen, assuming you ha…",
            images: [],
            videos: [],
          },
        ],
      },
    ],
    createPlaylist: (data) => {
      set((state) => ({
        ...state,
        playlists: [...state.playlists, data],
      }));
    },
  }))
);

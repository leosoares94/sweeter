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
            id: "1595839733153816576",
            author: {
              id: "13298072",
              avatar:
                "https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_normal.png",
              name: "Tesla",
              username: "Tesla",
              verified: true,
            },
            duration: 2,
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

import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { Tweet } from './Tracks'

import profilePic from '../assets/mock/sweeter_profile2.jpg'
import poster1 from '../assets/mock/sweeter_poster_1.jpg'

export interface Item {
  id: string
  duration: number
  showMedia: boolean
  showTime: boolean
  showSource: boolean
  showAvatar: boolean
  showEngagement: boolean
  updated_at?: string
}

export interface Playlist {
  id: string
  name: string
  description: string
  fontFamily: string
  fontStyle?: string
  fontWeight?: string
  textColor: string
  textAlign?: string
  textDecoration?: string
  linkColor: string
  backgroundImage?: string | null | undefined
  backgroundColor: string
  animated?: boolean
  tweets: Item[] & Tweet[]
}

interface PlaylistState {
  playlists: Playlist[]
  createPlaylist: (data: Playlist) => void
  addItem?: (data: Item & Tweet) => void
  updateItem: (id: string, data: object) => void
  removeItem?: (id: string) => void
}

export const usePlaylists = create<PlaylistState>()(
  devtools((set) => ({
    playlists: [
      {
        id: '123456789456',
        name: 'Welcome to Sweeter demo',
        description: 'Some Tweets to demonstrate how sweeter works',
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
        textAlign: 'left',
        textColor: '#000000',
        textDecoration: 'none',
        linkColor: '#e0739c',
        backgroundImage: null,
        backgroundColor: '#646ded',
        tweets: [
          {
            id: '1595148649163460609',
            author: {
              id: '13298072',
              avatar: profilePic,
              name: 'Sweeter',
              username: 'GetSweeterApp',
              verified: true
            },
            duration: 5,
            showAvatar: true,
            showMedia: true,
            showTime: true,
            showSource: true,
            showEngagement: true,
            source: 'Twitter for Mac',
            created_at: '2022-11-22T20:14:09.000Z',
            metrics: {
              retweets: 2915,
              replies: 0,
              likes: 0,
              quotes: 0
            },
            retweet: {
              id: null,
              author_id: null,
              author_avatar: null,
              // eslint-disable-next-line @typescript-eslint/comma-dangle
              verified: null,
            },
            text: 'Bem-vindo à demo do Sweeter! \n\nEste software faz parte do meu portfólio pessoal. Você pode entrar em contato comigo através do meu LinkedIn linkedin.com/leosoares94 ou e-mail leo@getsweeter.com.',
            images: [poster1],
            videos: []
          },
          {
            id: '1597370288005521408',
            author: {
              id: '34743251',
              avatar:
                'https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_normal.jpg',
              name: 'SpaceX',
              username: 'SpaceX',
              verified: true
            },
            duration: 5,
            showAvatar: true,
            showMedia: true,
            showTime: true,
            showSource: true,
            showEngagement: true,
            source: 'Twitter Web App',
            created_at: '2022-11-28T23:22:09.000Z',
            metrics: {
              retweets: 708,
              replies: 175,
              likes: 5070,
              quotes: 219
            },
            retweet: {
              id: null,
              author_id: null,
              author_avatar: null,
              verified: null
            },
            text: 'Targeting Wednesday, November 30 at 3:39 a.m. ET for Falcon 9’s launch of ispace’s HAKUTO-R Mission 1 – the first privately-led Japanese mission to land on the lunar surface → https://t.co/bJFjLCzWdK https://t.co/lETh1mvNfo',
            images: ['https://pbs.twimg.com/media/Fir_YQtVQAA9rYV.jpg '],
            videos: []
          },
          {
            id: '1597678808898977792',
            author: {
              id: '11348282',
              avatar:
                'https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_normal.jpg',
              name: 'NASA',
              username: 'NASA',
              verified: true
            },
            duration: 5,
            showAvatar: true,
            showMedia: true,
            showTime: true,
            showSource: true,
            showEngagement: true,
            source: 'Sprinklr',
            created_at: '2022-11-29T19:48:06.000Z',
            metrics: {
              retweets: 972,
              replies: 150,
              likes: 5583,
              quotes: 94
            },
            retweet: {
              id: null,
              author_id: null,
              author_avatar: null,
              verified: null
            },
            text: 'Regulators, mount up! 🌟\n\nData from @ChandraXray and @SOFIAtelescope reveal a star cluster that regulates itself—allowing only a limited set of stars to grow before expelling most of the gas from the system. This process likely slows new star creation: https://t.co/T97kdYJlHk https://t.co/Xa5LyOPxdF',
            images: ['https://pbs.twimg.com/media/FiwYZ8dXwAELR1a.jpg'],
            videos: []
          },
          {
            id: '1596882408313303041',
            author: {
              id: '34743251',
              avatar:
                'https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_normal.jpg',
              name: 'SpaceX',
              username: 'SpaceX',
              verified: true
            },
            duration: 5,
            showAvatar: true,
            showMedia: true,
            showTime: true,
            showSource: true,
            showEngagement: true,
            source: 'Twitter for iPhone',
            created_at: '2022-11-27T15:03:29.000Z',
            metrics: {
              retweets: 533,
              replies: 0,
              likes: 0,
              quotes: 0
            },
            retweet: {
              id: '1596850788693061632',
              author_id: '34743251',
              author_avatar:
                'https://pbs.twimg.com/profile_images/1189945624583720960/k6MtoeIt_normal.jpg',
              verified: true
            },
            text: "RT @Space_Station: The @SpaceX #Dragon cargo craft docked to the Harmony module's space-facing port at 7:39am ET today delivering new solar arrays, science experiments, and cargo replenishing the Exp 68 crew. https://t.co/QGRXaRgydv",
            images: [],
            videos: []
          }
        ]
      }
    ],
    createPlaylist: (data) => {
      set((state) => ({
        ...state,
        playlists: [...state.playlists, data]
      }))
    },
    updateItem: (id, data) => {
      set((state) => ({
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist.id === id ? { ...playlist, ...data } : { ...playlist }
        )
      }))
    }
  }))
)

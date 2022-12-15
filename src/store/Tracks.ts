import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { Filter } from './Builder'

// Mock images
import profilePic from '../assets/mock/sweeter_profile2.jpg'
import poster1 from '../assets/mock/sweeter_poster_1.jpg'
import poster2 from '../assets/mock/sweeter_poster_2.jpg'

interface Builder {
  dataFilters: Filter[]
  booleanFilters: Filter[]
  contentFilters: Filter[]
}

export interface Tweet {
  id: string
  author: {
    id: string
    avatar: string
    name: string
    username: string
    verified: boolean | null | true
  }
  source: string
  created_at: string
  metrics: {
    retweets: number
    replies: number
    likes: number
    quotes: number
  }
  retweet: {
    id: string | null
    author_id: string | null
    author_avatar: string | null
    verified: boolean | null | true
  }
  images: string[]
  videos: string[]
  text: string
}

export interface Track {
  id: string
  tweets: Tweet[]
  builder: Builder
  next: string | null // next_token
}

interface TracksState {
  tracks: Track[]
  addTrack: (data: Track) => void
  // updateTrack: (data: Track) => void;
  // removeTrack: (id: string) => void;
  // resetTracks: () => void;
}

export const useTracks = create<TracksState>()(
  devtools((set) => ({
    tracks: [
      {
        id: '321654987',
        tweets: [
          {
            id: '1595839811218247684',
            author: {
              id: '13298072',
              avatar: profilePic,
              name: 'Sweeter',
              username: 'GetSweeter',
              verified: true,
            },
            source: 'Twitter Web App',
            created_at: '2022-11-23T18:00:34.000Z',
            metrics: {
              retweets: 2251,
              replies: 1211,
              likes: 59850,
              quotes: 109,
            },
            retweet: {
              id: null,
              author_id: null,
              author_avatar: null,
              verified: null,
            },
            text: 'Bem-vindo à demo do Sweeter! \n\nEste software faz parte do meu portfólio pessoal. Você pode entrar em contato comigo através do meu LinkedIn linkedin.com/leosoares94 ou e-mail leo@getsweeter.com.',
            images: [poster2],
            videos: [],
          },
          {
            id: '1595839811218247684',
            author: {
              id: '13298072',
              avatar: profilePic,
              name: 'Sweeter',
              username: 'GetSweeter',
              verified: true,
            },
            source: 'Twitter Web App',
            created_at: '2022-11-23T18:00:34.000Z',
            metrics: {
              retweets: 2251,
              replies: 1211,
              likes: 59850,
              quotes: 109,
            },
            retweet: {
              id: null,
              author_id: null,
              author_avatar: null,
              verified: null,
            },
            text: 'Soon...',
            images: [poster1],
            videos: [],
          },
        ],
        builder: {
          dataFilters: [
            {
              id: '992885a8-f1e9-c78b-287c-e80c5561e272',
              tagName: 'from',
              values: ['from: tesla'],
              includes: true,
              condition: 'and',
            },
          ],
          booleanFilters: [],
          contentFilters: [],
        },
        next: null,
      },
      {
        id: '123456789',
        tweets: [
          {
            id: '1595839733153816576',
            author: {
              id: '13298072',
              avatar:
                'https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_normal.png',
              name: 'Tesla',
              username: 'Tesla',
              verified: true,
            },
            source: 'Twitter for iPhone',
            created_at: '2022-11-24T18:00:16.000Z',
            metrics: {
              retweets: 13103,
              replies: 0,
              likes: 0,
              quotes: 0,
            },
            retweet: {
              id: '1595682322707267584',
              author_id: '44196397',
              author_avatar:
                'https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_normal.jpg',
              verified: true,
            },
            text: 'RT @elonmusk: Tesla Full Self-Driving Beta is now available to anyone in North America who requests it from the car screen, assuming you ha…',
            images: [],
            videos: [],
          },
          {
            id: '1595148649163460609',
            author: {
              id: '13298072',
              avatar:
                'https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_normal.png',
              name: 'Tesla',
              username: 'Tesla',
              verified: true,
            },
            source: 'Twitter for Mac',
            created_at: '2022-11-22T20:14:09.000Z',
            metrics: {
              retweets: 2915,
              replies: 0,
              likes: 0,
              quotes: 0,
            },
            retweet: {
              id: '1595114899595591681',
              author_id: '1346535293449428992',
              author_avatar:
                'https://pbs.twimg.com/profile_images/1362134815844294661/vKTmG2CO_normal.jpg',
              verified: true,
            },
            text: 'RT @TeslaCharging: 40k Superchargers around the world — and counting https://t.co/w6tShTkwPA',
            images: [
              'https://pbs.twimg.com/media/FiL5z62UcAE77b1.jpg',
              'https://pbs.twimg.com/media/FiL5z7VUUAAqOQv.jpg',
              'https://pbs.twimg.com/media/FiL5z68VsAAOzz_.jpg',
              'https://pbs.twimg.com/media/FiL5z69UUAIYov5.jpg',
              'https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1130678533_473619_xj1qdn.jpg',
            ],
            videos: [],
          },
          {
            id: '1595839811218247684',
            author: {
              id: '13298072',
              avatar:
                'https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_normal.png',
              name: 'Tesla',
              username: 'Tesla',
              verified: true,
            },
            source: 'Twitter for iPhone',
            created_at: '2022-11-24T18:00:34.000Z',
            metrics: {
              retweets: 4251,
              replies: 3211,
              likes: 55350,
              quotes: 219,
            },
            retweet: {
              id: null,
              author_id: null,
              author_avatar: null,
              verified: null,
            },
            text: 'Happy Thanksgiving! \n\nThanks to the Tesla team, owners and fans for helping us accelerate the world’s transition to sustainable energy 🌎❤️',
            images: [],
            videos: [],
          },
        ],
        builder: {
          dataFilters: [
            {
              id: '992885a8-f1e9-c78b-287c-e80c5561e272',
              tagName: 'from',
              values: ['from: tesla'],
              includes: true,
              condition: 'and',
            },
          ],
          booleanFilters: [],
          contentFilters: [],
        },
        next: null,
      },
      // {
      //   id: '741258936',
      //   tweets: [
      //     {
      //       id: '1597678808898977792',
      //       author: {
      //         id: '11348282',
      //         avatar:
      //           'https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_normal.jpg',
      //         name: 'NASA',
      //         username: 'NASA',
      //         verified: true,
      //       },
      //       source: 'Sprinklr',
      //       created_at: '2022-11-29T19:48:06.000Z',
      //       metrics: {
      //         retweets: 972,
      //         replies: 150,
      //         likes: 5583,
      //         quotes: 94,
      //       },
      //       retweet: {
      //         id: null,
      //         author_id: null,
      //         author_avatar: null,
      //         verified: null,
      //       },
      //       text: 'Regulators, mount up! 🌟\n\nData from @ChandraXray and @SOFIAtelescope reveal a star cluster that regulates itself—allowing only a limited set of stars to grow before expelling most of the gas from the system. This process likely slows new star creation: https://t.co/T97kdYJlHk https://t.co/Xa5LyOPxdF',
      //       images: ['https://pbs.twimg.com/media/FiwYZ8dXwAELR1a.jpg'],
      //       videos: [],
      //     },
      //     {
      //       id: '1597637548033064963',
      //       author: {
      //         id: '11348282',
      //         avatar:
      //           'https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_normal.jpg',
      //         name: 'NASA',
      //         username: 'NASA',
      //         verified: true,
      //       },
      //       source: 'Sprinklr',
      //       created_at: '2022-11-29T17:04:08.000Z',
      //       metrics: {
      //         retweets: 972,
      //         replies: 150,
      //         likes: 5583,
      //         quotes: 94,
      //       },
      //       retweet: {
      //         id: null,
      //         author_id: null,
      //         author_avatar: null,
      //         verified: null,
      //       },
      //       text: 'On flight day 13 of the #Artemis I mission, @NASA_Orion reached its maximum distance from Earth, 268,563 miles away from home. \n\nOrion has now traveled farther than any other spacecraft designed to carry humans to deep space &amp; safely return them to Earth. https://t.co/tt0x4YDkxZ https://t.co/cKBuGIWZma',
      //       images: ['https://pbs.twimg.com/media/Fivy4VjWIAI9_e6.jpg'],
      //       videos: [],
      //     },
      //     {
      //       id: '1597350616912666626',
      //       author: {
      //         id: '11348282',
      //         avatar:
      //           'https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_normal.jpg',
      //         name: 'NASA',
      //         username: 'NASA',
      //         verified: true,
      //       },
      //       source: 'Twitter Media Studio',
      //       created_at: '2022-11-28T22:03:59.000Z',
      //       metrics: {
      //         retweets: 519,
      //         replies: 120,
      //         likes: 3227,
      //         quotes: 23,
      //       },
      //       retweet: {
      //         id: null,
      //         author_id: null,
      //         author_avatar: null,
      //         verified: null,
      //       },
      //       text: 'LIVE NOW: The @NASA_Orion spacecraft is about halfway through the #Artemis I mission around the Moon. Hear from NASA leaders on the upcoming milestones leading up to splashdown on Dec. 11. https://t.co/j3pl4zJlBk',
      //       images: [],
      //       videos: [],
      //     },
      //   ],
      //   builder: {
      //     dataFilters: [
      //       {
      //         id: '854342248-f1e9-c78b-287c-e80c5561e272',
      //         tagName: 'from',
      //         values: ['from: spacex'],
      //         includes: true,
      //         condition: 'and',
      //       },
      //     ],
      //     booleanFilters: [],
      //     contentFilters: [],
      //   },
      //   next: null,
      // },
      {
        id: '789654221',
        tweets: [
          {
            id: '1597370288005521408',
            author: {
              id: '34743251',
              avatar:
                'https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_normal.jpg',
              name: 'SpaceX',
              username: 'SpaceX',
              verified: true,
            },
            source: 'Twitter Web App',
            created_at: '2022-11-28T23:22:09.000Z',
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
            text: 'Targeting Wednesday, November 30 at 3:39 a.m. ET for Falcon 9’s launch of ispace’s HAKUTO-R Mission 1 – the first privately-led Japanese mission to land on the lunar surface → https://t.co/bJFjLCzWdK https://t.co/lETh1mvNfo',
            images: ['https://pbs.twimg.com/media/Fir_YQtVQAA9rYV.jpg '],
            videos: [],
          },
          {
            id: '1596882408313303041',
            author: {
              id: '34743251',
              avatar:
                'https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_normal.jpg',
              name: 'SpaceX',
              username: 'SpaceX',
              verified: true,
            },
            source: 'Twitter for iPhone',
            created_at: '2022-11-27T15:03:29.000Z',
            metrics: {
              retweets: 533,
              replies: 0,
              likes: 0,
              quotes: 0,
            },
            retweet: {
              id: '1596850788693061632',
              author_id: '34743251',
              author_avatar:
                'https://pbs.twimg.com/profile_images/1189945624583720960/k6MtoeIt_normal.jpg',
              verified: true,
            },
            text: "RT @Space_Station: The @SpaceX #Dragon cargo craft docked to the Harmony module's space-facing port at 7:39am ET today delivering new solar arrays, science experiments, and cargo replenishing the Exp 68 crew. https://t.co/QGRXaRgydv",
            images: [],
            videos: [],
          },
          {
            id: '1596588027593166848',
            author: {
              id: '34743251',
              avatar:
                'https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_normal.jpg',
              name: 'SpaceX',
              username: 'SpaceX',
              verified: true,
            },
            source: 'Twitter Media Studio',
            created_at: '2022-11-26T19:33:43.000Z',
            metrics: {
              retweets: 2832,
              replies: 906,
              likes: 30328,
              quotes: 120,
            },
            retweet: {
              id: null,
              author_id: null,
              author_avatar: null,
              verified: null,
            },
            text: 'Dragon separation confirmed; autonomous docking to the @space_station on Sunday, November 27 at ~7:30 a.m. ET https://t.co/U8sN9uF1Xn',
            images: [],
            videos: [
              'https://video.twimg.com/amplify_video/1596587915764592640/vid/640x360/iwSImZHytpzDt-PW.mp4?tag=14',
            ],
          },
        ],
        builder: {
          dataFilters: [
            {
              id: '854342248-f1e9-c78b-287c-e80c5561e272',
              tagName: 'from',
              values: ['from: spacex'],
              includes: true,
              condition: 'and',
            },
          ],
          booleanFilters: [],
          contentFilters: [],
        },
        next: null,
      },
      {
        id: '45697412',
        tweets: [
          {
            id: '1597717509595344896',
            author: {
              id: '895261812370939907',
              avatar:
                'https://pbs.twimg.com/profile_images/1583481125040754692/Zp6wsJUv_normal.jpg',
              name: 'Prime Video Brasil',
              username: 'PrimeVideoBR',
              verified: true,
            },
            source: 'Twitter Web App',
            created_at: '2022-11-29T22:21:53.000Z',
            metrics: {
              retweets: 24,
              replies: 14,
              likes: 284,
              quotes: 10,
            },
            retweet: {
              id: null,
              author_id: null,
              author_avatar: null,
              verified: null,
            },
            text: '🩸Blood Mary??🩸 Achei que os irmãos Winchester já tinham resolvido isso 🤔 https://t.co/iJzwC9BNuC',
            images: [
              'https://pbs.twimg.com/media/Fiw7gymXwAAwAz6.jpg',
              'https://pbs.twimg.com/media/Fiw7i4GWIAAAJ49.jpg',
            ],
            videos: [],
          },
          {
            id: '1597690165996457984',
            author: {
              id: '895261812370939907',
              avatar:
                'https://pbs.twimg.com/profile_images/1583481125040754692/Zp6wsJUv_normal.jpg',
              name: 'Prime Video Brasil',
              username: 'PrimeVideoBR',
              verified: true,
            },
            source: 'Twitter Web App',
            created_at: '2022-11-29T20:33:13.000Z',
            metrics: {
              retweets: 4,
              replies: 5,
              likes: 84,
              quotes: 2,
            },
            retweet: {
              id: null,
              author_id: null,
              author_avatar: null,
              verified: null,
            },
            text: 'Rafael Infante: lenda do futebol brasileiro q também vai estar na próxima temporada de LOL: Se Rir, Já Era 🗣 o homem faz TUDO mesmo https://t.co/Coec8eqvGv',
            images: [
              'https://pbs.twimg.com/media/FiwijbVWQAAsCTT.jpg',
              'https://pbs.twimg.com/media/FiwimIXWIAADs07.jpg',
            ],
            videos: [],
          },
          {
            id: '1597362198199738368',
            author: {
              id: '895261812370939907',
              avatar:
                'https://pbs.twimg.com/profile_images/1583481125040754692/Zp6wsJUv_normal.jpg',
              name: 'Prime Video Brasil',
              username: 'PrimeVideoBR',
              verified: true,
            },
            source: 'Twitter Web App',
            created_at: '2022-11-28T22:50:00.000Z',
            metrics: {
              retweets: 110,
              replies: 51,
              likes: 494,
              quotes: 13,
            },
            retweet: {
              id: null,
              author_id: null,
              author_avatar: null,
              verified: null,
            },
            text: 'bday do meu cristal @Carladiaz  🦋 hoje o mundo é todinho dela, nós só vivemos nele ✨ https://t.co/G2F5kiBWgU',
            images: [
              'https://pbs.twimg.com/media/Firwbl6WYAgGGm-.jpg',
              'https://pbs.twimg.com/media/Firwek1XwAAH2mu.jpg',
            ],
            videos: [],
          },
        ],
        builder: {
          dataFilters: [
            {
              id: '992885a8-f1e9-c78b-287c-e80c5561e272',
              tagName: 'from',
              values: ['from: tesla'],
              includes: true,
              condition: 'and',
            },
          ],
          booleanFilters: [],
          contentFilters: [],
        },
        next: null,
      },
    ],
    addTrack: (data) => {
      set((state) => ({
        ...state,
        tracks: [data, ...state.tracks],
      }))
    },
  }))
)

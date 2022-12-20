import axios from 'axios'
import RequestConfig from '../../RequestConfig'
import IRecentTweetsRepository from '../IRecentTweetsRepository'

class RecentTweetsRepository implements IRecentTweetsRepository {
  async fetch (config: RequestConfig): Promise<any> {
    try {
      const response = await axios.request(config)
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export default RecentTweetsRepository

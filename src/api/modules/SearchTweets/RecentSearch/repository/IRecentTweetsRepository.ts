import RequestConfig from '../RequestConfig'

interface IRecentTweetsRepository {
  fetch: (config: RequestConfig) => Promise<any>
}

export default IRecentTweetsRepository

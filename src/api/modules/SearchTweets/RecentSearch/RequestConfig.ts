type QueryParams = {
  query: string;
  sort_order: string;
  max_results: string;
  expansions: string;
  "tweet.fields": string;
  "media.fields": string;
  "place.fields": string;
  "user.fields": string;
};

type QueryHeaders = {
  Accept: string;
  "User-Agent": string;
  Authorization: string;
};

class RequestConfig {
  method: string = "GET";
  url: string = "https://api.twitter.com/2/tweets/search/recent";
  params: QueryParams = {
    query: "",
    sort_order: "",
    max_results: "",
    expansions:
      "author_id,attachments.poll_ids,attachments.media_keys,geo.place_id,referenced_tweets.id",
    "tweet.fields": "source,public_metrics,attachments,created_at,lang,geo",
    "media.fields":
      "duration_ms,height,media_key,preview_image_url,type,url,variants",
    "place.fields":
      "contained_within,country,country_code,full_name,geo,id,name,place_type",
    "user.fields":
      "name,id,profile_image_url,verified,description,location,url",
  };
  headers: QueryHeaders = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    Authorization: "",
  };

  constructor(
    query: string,
    sort_order: string,
    max_results: string,
    token: string
  ) {
    this.params.query = query;
    this.params.sort_order = sort_order;
    this.params.max_results = max_results;
    this.headers.Authorization = token;
  }
}

export default RequestConfig;

import axios from "axios"

export const getNewsService = async ({ newsId }: { newsId: number }) => {
  try {
    const { data } = await axios.get(`http://example-url-news.com/${newsId}`)
    return data?.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

import axios from "axios";

const myApi = axios.create({
    baseURL: 'https://backend-portfolio-nc-news.onrender.com/api',
  });
  

export const getTopics = () => {
    return myApi.get(`/topics`).then((res) => {
        return res.data
    })
}

export const getArticles = () => {
    return myApi.get(`/articles`).then((res) => {
        return res.data
    })
}

export const getArticle = (article_id) => {
    return myApi.get(`/articles/${article_id}`).then((res) => {
        return res.data
    })
}
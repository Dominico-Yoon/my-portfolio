import axios, { Axios } from "axios";

const instance: Axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getPosts = async (page: number = 1, limit: number = 10) => {
  const res = await instance.get(`posts?_page=${page}&_limit=${limit}`);
  console.log(res);
  console.log(res.data);
  return {
    data: res.data,
    total: parseInt(res.headers["x-total-count"], 10),
  };
};

export const getPostById = async (id: number) => {
  try {
    const res = await instance.get(`posts/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const getUserById = async (id: number) => {
  try {
    const res = await instance.get(`users/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const getCommentByPostId = async (postId: number) => {
  try {
    const res = await instance.get(`posts/${postId}/comments`);
    return res.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const createPost = async (data: {
  title: string;
  body: string;
  userId: number;
}) => {
  try {
    const res = await instance.post("/posts", data);
    return res.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

export const deletePost = async (postId: number) => {
  try {
    const res = await instance.delete(`/posts/${postId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

import axios, { Axios } from "axios";

const instance: Axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getPosts = async () => {
  try {
    const res = await instance.get("posts");
    return res.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
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
    const res = await instance.get(`post/${postId}/comments`);
    return res.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

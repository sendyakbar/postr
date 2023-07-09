import {posts, replies} from '../data';
import {v4 as uuidv4} from 'uuid';

export const GetPosts = () => {
  return new Promise((resolve, reject) => {
    if (!posts) {
      reject(new Error('No post available'));
    }
    setTimeout(() => {
      resolve(posts);
    }, 1000);
  });
};

export const CreatePost = ({userId, text, geoLocation}) => {
  return new Promise((resolve, reject) => {
    const post = {
      id: uuidv4(),
      userId,
      text,
      createdAt: new Date(),
      geoLocation,
    };
    if (text.length > 100) {
      reject('Maximum 100 characters');
    }
    posts.unshift(post);
    setTimeout(() => {
      resolve('New post created');
    }, 1000);
  });
};

export const GetReplies = postId => {
  return new Promise(resolve => {
    const res = replies.filter(d => d.postId === postId);
    if (!res.length) {
      setTimeout(() => {
        resolve([]);
      }, 1200);
    }
    setTimeout(() => {
      resolve(res);
    }, 2000);
  });
};

export const CreateReplies = ({userId, postId, text, geoLocation}) => {
  return new Promise((resolve, reject) => {
    const post = {
      id: uuidv4(),
      postId,
      userId,
      text,
      createdAt: new Date(),
      geoLocation,
    };
    if (text.length > 100) {
      reject('Maximum 100 characters');
    }
    replies.unshift(post);
    setTimeout(() => {
      resolve('New reply created');
    }, 1500);
  });
};

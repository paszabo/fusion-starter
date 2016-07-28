import * as types from './actionTypes';

export function setRecentPosts(recentPosts, posts) {
  return { type: types.SET_RECENT_POSTS, recentPosts, posts };
}
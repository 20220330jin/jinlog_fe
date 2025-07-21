import apiClient from '@/services/apiClient';
import { PostCreateRequest } from '@/types/post.api.type';

export const postApi ={
  createPost: (createPostRequest: PostCreateRequest) => {
    return apiClient.post('/api/post/createPost', createPostRequest);
  }
}

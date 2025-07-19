import axios from 'axios';

/**
 * API Client
 *
 * - Axios 인스턴스 정의
 *
 * @author hjkim
 */
// 벡엔드 기본 URL 설정
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // 쿠키를 포함하여 요청
})

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 에러 처리 로직 추가 가능
    return Promise.reject(error);
  }
)

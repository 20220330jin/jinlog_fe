/**
 * 포스트 관련 타입 정의
 *
 * @author hjkim
 */

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  regDateTime: string;
  modDateTime?: string;
  tags?: string[];
}

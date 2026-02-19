import { BookData } from './types';
import { intro } from './data/intro';
import { part1 } from './data/part1';
import { part2 } from './data/part2';
import { part3 } from './data/part3';
import { appendix } from './data/appendix';

export const BOOK_DATA: BookData = {
  title: "바차타 마스터 클래스",
  subTitle: "라틴 댄스 초보 탈출부터 소셜의 제왕까지",
  chapters: [
    intro,
    part1,
    part2,
    part3
  ],
  appendix: appendix
};
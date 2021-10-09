export interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string;
  publishedAt: Date;
  source: Source;
}

export interface Source {
  name: string;
}

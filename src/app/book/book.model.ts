interface BookCover {
  id: string;
  defaultThumbnail: string;
  smallThumbnail: string;
  bigThumbnail: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    fullName: string;
    id: string;
  };
}

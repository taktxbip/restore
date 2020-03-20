export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Get Programming with Node.js",
      author: "Jonathan Wexler ",
      price: 45,
      coverImage:
        "https://m.media-amazon.com/images/I/810taCAYmtL._AC_UY218_ML3_.jpg"
    },
    {
      id: 2,
      title:
        "Node.js Web Development: Server-side development with Node 10 made easy, 4th Edition",
      author: "David Herron",
      price: 39,
      coverImage:
        "https://m.media-amazon.com/images/I/71kELzE9FKL._AC_UY218_ML3_.jpg"
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.9) resolve(this.data);
        else reject(new Error('Some Error'));
      }, 700);
    });
  }
}

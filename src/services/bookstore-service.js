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
    },
    {
      id: 3,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      price: 9,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51j5p18mJNL._SX330_BO1,204,203,200_.jpg"
    },
    {
      id: 4,
      title: "Pro React 16",
      author: "Adam Freeman",
      price: 37,
      coverImage:
        "https://m.media-amazon.com/images/I/61l3by8KzyL._AC_UY218_ML3_.jpg"
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.9) resolve(this.data);
        else reject(new Error("Some Error"));
      }, 700);
    });
  }
}

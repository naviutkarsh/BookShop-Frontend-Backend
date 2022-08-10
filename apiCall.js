const getBooks =new Promise(
    () => {
        axios.get("http://localhost:8080/books")
            .then(response => {
                const books = response.data;
                console.log(`GET Books`, books);
            })
            .catch(error => console.error(error));
    });

const postBook = new Promise(() => {
    axios.post("http://localhost:8080/books",{
        "name": "Harry1223",
        "authorName": "xy23",
        "imageUrl":"dnasdna",
        "price": {
            "currency": "INW",
            "amount": 200.0
        }
    })
        .then(function (response) {
            console.log(`CREATE Books`, response);
        })
        .catch(function (error) {
            console.log(error);
        })
});
const putBook = new Promise(() => {
    axios.put("http://localhost:8080/books",{
        "id":1,
        "name": "Harry1223",
        "authorName": "abc",
        "imageUrl":"dnadna",
        "price": {
            "currency": "INW",
            "amount": 240.0
        }
    })
        .then(function (response) {
            console.log(`UPDATE Books`, response);
        })
        .catch(function (error) {
            console.log(error);
        })
});
const deleteBook = new Promise(() => {
    axios.delete("http://localhost:8080/books?id=1")
        .then(function (response) {
            console.log(`DELETE Books`, response);
        })
        .catch(function (error) {
            console.log(error);
        })
});

const store = new Promise(
    function(resolve, reject) {
        resolve(1);
    });

store
    .then(getBooks
        .then(postBook
            .then(getBooks
                .then(putBook
                    .then(getBooks
                        .then(deleteBook
                            .then(getBooks)))))))
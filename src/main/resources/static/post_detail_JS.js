// const URL = 'https://jsonplaceholder.typicode.com/posts/';
const URL = 'http://localhost:8080/csr/json/';


function addTableData(data) {
    return `
        <tr>
            <td class="title">id</td>
            <td>${data.id}</td>
        </tr>

        <tr>
            <td class="title">title</td>
            <td>${data.title}</td>
        </tr>
        <tr>
            <td class="title">contents</td>
            <td>${data.body}</td>
        </tr>
        <tr>
            <td class="title">authorId</td>
            <td>${data.authorName}</td>
        </tr>
`;
}

function insertTable(respons, index) {        // <table id="detailInfo">
    document.getElementById("detailInfo")
        .innerHTML += addTableData(respons.data[index]);
}

async function callBackImp() {
    const idValue = document.getElementById("detail_btn");
    console.log(idValue);
    try {
        const reponse = await axios.get(URL);
        insertTable(reponse, idValue.value - 1);
        console.log("axios");
        console.log(reponse);
    } catch (a) {
        console.log(a);
    }
}


    

// response1.data.array.forEach(element => {
//     myTarget.innerHTML += `<tr><td>${element.id}</td><td>${element.title}</td><td>${element.userId}</td></tr>`
// });
//
// const API_URL = 'https://jsonplaceholder.typicode.com/posts/';
//
// function addTableData(postData) {
//     return `
//         <tr>
//             <td class="title">id</td>
//             <td>${postData.id}</td>
//         </tr>
//         <tr>
//             <td class="title">title</td>
//             <td>${postData.title}</td>
//         </tr>
//         <tr>
//             <td class="title">contents</td>
//             <td>${postData.body}</td>
//         </tr>
//         <tr>
//             <td class="title">authorId</td>
//             <td>${postData.userId}</td>
//         </tr>
//     `;
// }
//
// function insertTable(responseData, index) {
//     document.getElementById("detailInfo").innerHTML += addTableData(responseData.data[index]);
// }
//
// async function processResponse(response, idValue) {
//     insertTable(response, idValue.value - 1);
//     console.log("axios");
//     console.log(response);
// }
//
// async function fetchPostData() {
//     const idValue = document.getElementById("detail_btn");
//     console.log(idValue);
//     try {
//         const response = await axios.get(API_URL);
//         await processResponse(response, idValue);
//     } catch (error) {
//         console.log(error);
//     }
// }



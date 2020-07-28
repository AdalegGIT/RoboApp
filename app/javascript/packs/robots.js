document.addEventListener('DOMContentLoaded', () => {

    // console.log("inside the index page");
    const a = document.querySelectorAll('a');

    a.forEach(elem => elem.addEventListener('click', (event)=>{
        // console.log("clicked the link");
        event.preventDefault(); // prevents the navigation of the page
        // console.log("stay in index");
        let url = event.target.parentElement.href; // the link in the a tag clicked
        fetch(`${url}`)
        .then(e => e.text())
        .then(x => loadData(x))

    }))

    const myForm = document.querySelector('#new_robot')

    myForm.addEventListener('submit', (e) => {
        let formInfo = new FormData(myForm);
        e.preventDefault(); // prevents the default action
        fetch(`${myForm.action}`, {
                method: myForm.method,
                headers: {
                    Accept: "text/html", //looking for html response : comment for json
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: formInfo //new FormData(myForm); the body of the form
            })
            .then(e => e.text()) // if json response make .json()
            .then(x => {
                console.log(x);
                addNewRobot(x);
                myForm.reset();
            })

    })

});

const addNewRobot = (response) => {
    const myList = document.querySelector('#robot-container'); //ul that already exist in the page
    // Uncomment for json
    // const newLi = document.createElement('li');
    // const newLink = document.createElement('a');
    // const newName = document.createElement('p');
    // newName.innerText = response.name;
    // newLink.appendChild(newName);
    // newLink.href =`http://localhost:3000/robots/${response.id}`
    // newLi.append(newLink);
    // newLi.classList.add('list-group-item');
    //  myList.insertAdjacentElement('afterbegin',newLi);
    myList.insertAdjacentHTML('afterbegin',response); // comment this for json



}

const loadData = (response) => {
    const robotPanel = document.querySelector('#robot-details');
    // console.log(response);
    robotPanel.innerHTML = response;
    // const robotImage = document.createElement('img');
    // robotImage.src = `http://robohash.org/${response.address}`;
    // robotPanel.innerHTML = "";
    // robotPanel.append(robotImage);
    // const dl = document.createElement('dl');
    // robotPanel.append(dl);
    // const nameKeyTag = document.createElement('dt');
    // nameKeyTag.innerText = 'Name';
    // dl.append(nameKeyTag);
    // const nameValueTag = document.createElement('dd');
    // nameValueTag.innerText = response.name;
    // dl.append(nameValueTag);

}
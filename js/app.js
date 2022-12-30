const search = () => {
    const loading = document.getElementById("loader");
    const search = document.getElementById("search").value;
    const noMessage = document.getElementById("No-found-message");
    let h5All = document.getElementsByTagName("h5");
    let isArray = [];

    for (let sinH5 of h5All) {
        isArray.push(sinH5);
        if (isArray[length].innerText.toLowerCase().indexOf(search.toLowerCase()) > -1) {
            loading.classList.remove("d-none");
            noMessage.classList.add("d-none");
        }
        else {

            noMessage.classList.remove("d-none");
            loading.classList.remove("d-none")

        }
    }

    for (let h5 of h5All) {
        if (h5.innerText.toLowerCase().includes(search.toLowerCase())) {
            h5.parentElement.parentElement.parentElement.style.display = "block";
            loading.classList.add("d-none")
            noMessage.classList.add("d-none");
        }
        else {
            h5.parentElement.parentElement.parentElement.style.display = "none";
            loading.classList.add("d-none")
        }
    }
}

document.getElementById('search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        search();
    }
});
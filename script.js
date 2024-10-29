var clicks = 0;
const search = document.getElementById('search');
const inputbox = document.getElementById('inputbox');
const counter = document.getElementById('visiters');
const semesters = document.getElementById('semesters');


semester_links = [
    "https://iitkgpacin-my.sharepoint.com/:f:/g/personal/prajapatidheeraj_kgpian_iitkgp_ac_in/Eia039srhUdOtmT9ZUe2_-4BTHwumb9GPpd0Uphy4wjNvA",
    "https://iitkgpacin-my.sharepoint.com/:f:/g/personal/prajapatidheeraj_kgpian_iitkgp_ac_in/EqT5KXvHFp5DpkY7U04PPJsBvGcmoM7LjBYxE-xMFwXPtw?e=RMa96B",
    "https://iitkgpacin-my.sharepoint.com/:f:/g/personal/prajapatidheeraj_kgpian_iitkgp_ac_in/EkgXGaG7GBpBtr0S05xksakBPP12dRUxo2xP5AQNU5GFZQ?e=LngMDV",
    "https://iitkgpacin-my.sharepoint.com/:f:/g/personal/prajapatidheeraj_kgpian_iitkgp_ac_in/EvKHrcTfVK9GulzIlMQhTAgB6au_wDanMAcE4Dkq4b3Syg?e=z3dI9h",
    "not_found.html",
    "not_found.html",
    "not_found.html",
    "not_found.html",
    "not_found.html",
    "not_found.html"
];

let i = 1;
for (value of semester_links) {
    let div = document.createElement('div');
    div.setAttribute('class', `col ${(i % 2 == 0) ? 'evenSem' : 'oddSem'}`);
    div.innerHTML = `<a href=${value} target="_blank">
                        <div class="semCard genCard">
                            <img src="sem_${i}.jpg" alt="Semester ${i}" style="height: 100%; width: 100%;">
                        </div>
                    </a>`;
    semesters.appendChild(div);
    i++;
}

const p = fetch('https://api.counterapi.dev/v1/Aeroweb27/counter/up');
p.then((response) => {
    if (!response.ok) {
        console.log('Error in fetching Visiter count...');
    }
    return response.json();
}).then((response) => {
    counter.innerText = `Visiters: ${response.count}`;
    localStorage.setItem("counter",response.count);
    
});

search.addEventListener('click', searchbar);
function searchbar() {
    if (!clicks) {
        inputbox.style.display = "inline-block";
        inputbox.value = '';
        inputbox.focus();
    } else if (clicks == 1) {
        if (inputbox.value == '') {
            clicks++;
        } else {
            console.log(inputbox.value);
        }
    }
    if (clicks == 2) {
        inputbox.style.display = "none";
    }

    clicks = ((clicks + 1) % 3);
}
inputbox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log(inputbox.value);
        clicks = 2;
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === '/' && clicks != 1) {
        inputbox.style.display = "inline-block";
        inputbox.focus();
        event.preventDefault();
        inputbox.value = '';
        clicks = 1;
    }
})

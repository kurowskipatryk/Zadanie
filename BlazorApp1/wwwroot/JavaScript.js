

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//async function Mark(e) {
//    console.log("cos");
//}
//let menu = document.getElementById('tabs');
//menu.addEventListener('mouseover', (e) => {
//    console.log(e.target.tagName)
//    if (e.target.tagName === 'button') {
//        e.target.style.height = "60px";
//        e.stopPropagation();
//    }
//})

$(document).ready(function () {
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 1; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    $(document).on("click", ".user-card", function (e) {
        var elem = $(this);
        if (e.shiftKey) {
            elem.toggleClass("selected");
        }
    });
});

function AddItemComment(type, idFrom, idTo, name, surname) {
    let comments = document.querySelector('.wrap-comments');

    let comment = document.createElement('div');
    comment.className = 'comment';
    comment.style.backgroundColor = 'rgba(255,255,255, .5)';
    comment.style.width = '90%';
    comment.style.borderRadius = '25px';
    comment.style.padding='7px';
    comment.style.textAlign = 'center';
    comment.style.color = 'white';
    comment.style.margin = '5px';
    if (type == 'add') {

        if (idTo == "group1") {
            comment.innerHTML += `<i class="fa-regular fa-star"></i>`;
            comment.innerHTML += `Użytkownik ${name} ${surname} został dodany do Grupy 1`;
        } else if (idTo == "group2") {
            comment.innerHTML += `<i class="fa-solid fa-sun"></i>`;
            comment.innerHTML += `Użytkownik ${name} ${surname} został dodany do Grupy 2`;
        } else if (idTo == "group3") {
            comment.innerHTML += `<i class="fa-regular fa-face-smile"></i>`;
            comment.innerHTML += `Użytkownik ${name} ${surname} został dodany do Grupy 3`;
        }else if (idTo == "group4") {
            comment.innerHTML += `<i class="fa-solid fa-diamond"></i>`;
            comment.innerHTML += `Użytkownik ${name} ${surname} został dodany do Grupy 4`;
        }else if (idTo == "group5") {
            comment.innerHTML += `<i class="fa-solid fa-yin-yang"></i>`;
            comment.innerHTML += `Użytkownik ${name} ${surname} został dodany do Grupy 5`;
        }

    }
    else {
        comment.innerHTML += `<i class="fa-regular fa-circle"></i>`;
        if (idFrom == "group1") {
            comment.innerHTML += `Użytkownik ${name} ${surname} został usunięty z Grupy 1`;
        } else if (idFrom == "group2") {
            comment.innerHTML += `Użytkownik ${name} ${surname} został usunięty z Grupy 2`;
        } else if (idFrom == "group3") {
            comment.innerHTML += `Użytkownik ${name} ${surname} został usunięty z Grupy 3`;
        } else if (idFrom == "group4") {
            comment.innerHTML += `Użytkownik ${name} ${surname} został usunięty z Grupy 4`;
        } else if (idFrom == "group5") {
            comment.innerHTML += `<i class="fa-solid fa-yin-yang"></i>`;
        }

    }
    comments.appendChild(comment);
}
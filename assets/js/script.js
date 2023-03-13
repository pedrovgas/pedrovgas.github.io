const d = new Date();
let year = d.getFullYear();

$(function () {
    $("#year").text(year);
});

$.getJSON("./assets/json/lang/en.json",
    function (data) {
        buildProjects(data.projects);
        buildSkills(data.skills);
    }
);


function changeLanguage(lang = 'pt-br') {
    $.getJSON("./assets/json/lang/" + lang + ".json",
        function (d) { $.each(d, function (i, v) { $(i).text(v); }); }
    );
    return `language has changed to ${lang}.`;
}

// Generated using ChatGPT
function calculateAge(birthdate) {
    const today = new Date();
    const birthYear = birthdate.getFullYear();
    const birthMonth = birthdate.getMonth();
    const birthDay = birthdate.getDate();

    let ageInMonths = (today.getFullYear() - birthYear) * 12 + (today.getMonth() - birthMonth);

    if (today.getDate() < birthDay) {
        ageInMonths -= 1;
    }

    const years = Math.floor(ageInMonths / 12);
    const months = ageInMonths % 12;

    return `${years} anos e ${months} meses`;
}

function buildSkills(data) {
    $.each(data, function (i, e) {
        let name = `<span>${e.name}</span>`;
        let squares = '';
        console.log(e.level);
        for (let i = 0; i < 5; i++) squares += '<span>&#9632;</span>'

        let level = `<span class="level level-${e.level}">
        ${squares}
        </span>`;

        let content = `<li>${name}${level}</li>`

        $('#skills ul').append(content);
    });
}

function buildProjects(data) {
    $.each(data, function (i, e) {
        let langs = '';
        $.each(e.languages, function (i, e) {
            langs += '<span>' + e + '</span>';
        });
        $('#projects').append(`<a target="_blank" href="${e.href}">
        <div class="card">
            <i class="fa ${e.icon}"></i>
            <div class="card-header">${e.name}</div>
            <div class="card-content">${e.description}</div>
            <div class="card-footer">${langs}</div>
        </div></a>`);
    });
}
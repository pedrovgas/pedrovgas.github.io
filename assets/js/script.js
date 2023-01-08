const d = new Date();
let year = d.getFullYear();

$(function () {
    $("#year").text(year);
});
$.getJSON("./assets/json/projects.json",
    function (data) {
        $.each(data, function (i, e) {
            let el = `<h1></h1>`
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
);


function changeLanguage(lang = 'pt-br') {
    $.getJSON("./assets/json/lang/" + lang + ".json",
        function (d) { $.each(d, function (i, v) { $(i).text(v); }); }
    );
    return `language has changed to ${lang}.`;
}
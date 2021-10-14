// Выбираем кнопку
const btn = document.querySelector(".btn-toggle");
const ic = document.querySelector(".material-icons");
const $elem=document.querySelectorAll("img");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function () {
    // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
    document.body.classList.toggle("dark-theme");
    ic.classList.toggle("br");
    //document.querySelector(".btn-secondary").classList.toggle("btn-light");

    $elem.forEach(($item) => {
        if ($item.src.includes("369743-200-1.png")) {
        //$item.src="369743-200.png";
        } else {//$item.src="369743-200-1.png";
         }
    });

});


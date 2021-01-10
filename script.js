var targ = false;
var mainPath = document.getElementById("main");

mainPath.addEventListener("click", select);
mainPath.addEventListener("dblclick", function() {
    for(let j = 0; j < this.children.length; j++)
    {
        this.children[j].classList.toggle("hidden");
    }
    this.classList.toggle("check-box");
});
document.getElementById("create").onclick = function (e) {
    e.preventDefault();
    let listNum = document.createElement("ul");
    let listElem = document.createElement("li");
    let val = document.getElementById("pathName").value;
    let error = document.getElementById("error");
    listElem.textContent = val;
    listElem.addEventListener("dblclick", function(e) {
        e.stopPropagation();
        for(let j = 0; j < this.children.length; j++)
        {
            this.children[j].classList.toggle("hidden");
        }
        this.classList.toggle("check-box");
    })
    if(targ) {
        targ.appendChild(listNum);
        listNum.appendChild(listElem);
        error.classList.add('hidden');
    } else {
        error.classList.remove('hidden');
    }
}

document.getElementById("upd").onclick = function (e) {
    e.preventDefault();
    let val = document.getElementById("pathName").value;
    selected.firstChild.textContent = val;
}

document.getElementById("delete").onclick = function (e) {
    e.preventDefault();
    targ.remove();
    targ = false;
}

function select(event) {
    if(targ) {targ.classList.toggle('select')}
    targ = event.target;
    targ.classList.toggle('select');
}

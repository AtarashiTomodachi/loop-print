function ForLoop () {
    const text = document.getElementById("TextInput").value
    const time = document.getElementById("TimeInput").value
    if (time < 0) {
        alert("Nhập số dương đê thg lìn")
    } else {
        for (i = 0; i < time; i++) {
            const output = i + 1 + "." + text + "<br>" 
            document.getElementById("output").innerHTML += output
            document.getElementById("copy-btn").style.display = 'block'
            console.log(output)
    }
}
}

function Copy(output) {
    var elem = document.createElement("textarea");
    elem.value = output;
    document.body.appendChild(elem)
    elem.select()
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert("Copied")

}

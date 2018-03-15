function addStuff() {
    var movie_name_entered = document.getElementById("box").value;
    var movieList = document.getElementById("list");

    var hr = new XMLHttpRequest();
    var url = "Info.txt";
    hr.open("POST", url, true);
    hr.setRequestHeader("Context-type", "application/x-www-form-urlencoded");
    var param = "film=" + movie_name_entered;
    hr.setRequestHeader("Content-length", param.length);
    hr.setRequestHeader("Connection", "close");
    hr.onreadystatechange = function () {
        if (hr.readyState == 4 && hr.status == 200) {
            var return_data = hr.responseText;
            console.log(hr.responseText);
            document.getElementById("status").innerHTML = return_data;
        }
    }
    hr.send(param);
    document.getElementById("status").innerHTML = "processing...";
}
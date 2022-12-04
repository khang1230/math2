function navigate(){
    var num1 = document.getElementById("user1Num").value
    var num2 = document.getElementById("user2Num").value

    localStorage.setItem("num", num1)
    localStorage.setItem("name2", num2)

    window.location = "game.html"
}
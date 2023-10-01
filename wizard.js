 function strings()
 {
    var str1 = document.getElementById("initstring").value;

    var str2 = str1.substring(0,3);

    str2 = str1.replace(/qwe/, "asd");
    str2 = str1.replace(/qwe/i, "asd");

    str1 = str1.toLowerCase();
    str2 = str1.replace(/qwe/g, "asd");

    var splitstring = str1.split("");
    var reversestring = splitstring.reverse();
    var joinstring = reversestring.join("");

    if (str1 ==joinstring)
    {
        document.getElementById("updated string").innerHTML = "this is a palidrome";
    }
    else{
        document.getElementById("updated string").innerHTML = "this is not a palidrome";
    }

//this took a hot minute because apparently i couldnt spell "reverse" -_- 

 }
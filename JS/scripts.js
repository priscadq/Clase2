
function verwhile {
            var text = "";
            var i = 0;

            do {
                text += "<br> Number is " + i;
                i++;
                
            }
            while (i < 10) {
                text += "<br> Number is " + i;
                i++;
            }

            document.getElementById("demo").innerHTML = text;
        }
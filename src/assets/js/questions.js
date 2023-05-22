$(function () {
    const questions = [
        "1 (s) I found it hard to wind down",
        "2 (a) I was aware of dryness of my mouth",
        "3 (d) I couldn’t seem to experience any positive feeling at all",
        "4 (a) I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)",
        "5 (d) I found it difficult to work up the initiative to do things",
        "6 (s) I tended to over-react to situations",
        "7 (a) I experienced trembling (e.g. in the hands)",
        "8 (s) I felt that I was using a lot of nervous energy",
        "9 (a) I was worried about situations in which I might panic and make a fool of myself",
        "10 (d) I felt that I had nothing to look forward to",
        "11 (s) I found myself getting agitated",
        "12 (s) I found it difficult to relax",
        "13 (d) I felt down-hearted and blue",
        "14 (s) I was intolerant of anything that kept me from getting on with what I was doing",
        "15 (a) I felt I was close to panic",
        "16 (d) I was unable to become enthusiastic about anything",
        "17 (d) I felt I wasn’t worth much as a person",
        "18 (s) I felt that I was rather touchy",
        "19 (a) I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)",
        "20 (a) I felt scared without any good reason",
        "21 (d) I felt that life was meaningless",
    ];
    var output = "<form>";
    for(let i = 0; i < questions.length; i++){
        output += "<div class=\"row\"><div class=\"col-8\"><p>";
        output += questions[i];
        output += "</p></div><div class=\"col-1\"><input type=\"radio\" id=\"0\" name=\"";
        output += i.toString();
        output += "\"><label for=\"0\">0</label></div><div class=\"col-1\"><input type=\"radio\" id=\"1\" name=\"";
        output += i.toString();
        output += "\"><label for=\"1\">1</label></div><div class=\"col-1\"><input type=\"radio\" id=\"2\" name=\"";
        output += i.toString();
        output += "\"><label for=\"2\">2</label></div><div class=\"col-1\"><input type=\"radio\" id=\"3\" name=\"";
        output += i.toString();
        output += "\"><label for=\"3\">3</label></div><hr></div>"
    }
    output+= '<a href="./index.html" class="btn btn-outline-primary mx-3 mt-2 d-block">Submit</a></form>';
    var form = document.querySelector("#questions");
    form.innerHTML = output;
})

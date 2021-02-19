javascript: var s = document.createElement("script");
s.setAttribute("src", "//code.jquery.com/jquery.js");
document.getElementsByTagName("body")[0].appendChild(s);
var key_arr = "C C# D D# E F F# G G# A A# B".split(" "),
    sort_arr = "C# D# D# G# A# F# C D E F G A A# B".split(" "),
    key_change = {
        Db: "C#",
        Eb: "D#",
        Gb: "F#",
        Ab: "G#",
        Bb: "A#"
    };
$(".tf").each(function(a) {
    a = $(this).text();
    a.match("/") ? (s_key_arr = a.split("/"), no_1_str = s_key_arr[0], no_2_str = s_key_arr[1], chord_str_1 = search_chord(no_1_str), chord_data_arr_1 = chord_str_1.split("_"), no_1 = key_arr.indexOf(chord_data_arr_1[0]), a = 0 == no_1 ? 11 : no_1 - 1, no_1_change_str = key_arr[a] + chord_data_arr_1[1], chord_str_2 = search_chord(no_2_str), chord_data_arr_2 = chord_str_2.split("_"), no_2 = key_arr.indexOf(chord_data_arr_2[0]), a = 0 == no_2 ? 11 : no_2 - 1, no_2_change_str = key_arr[a] + chord_data_arr_2[1], $(this).text(no_1_change_str + "/" + no_2_change_str)) : (chord_str = search_chord(a), chord_data_arr = chord_str.split("_"), no = key_arr.indexOf(chord_data_arr[0]), a = 0 == no ? 11 : no - 1, a = key_arr[a], $(this).text(a + chord_data_arr[1]))
});

function search_chord(a) {
    if (a.match("#") || a.match("b")) {
        var b = a.substr(0, 2),
            c = a.substr(2);
        a.substr(0, 2);
        a.substr(2)
    } else b = a.substr(0, 1), c = a.substr(1);
    b.match("b") && (b = key_change[b]);
    return b + "_" + c
};
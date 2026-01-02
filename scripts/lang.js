const lang = window.navigator.language;

if (lang !== "de" && lang !== "de-DE") {
    setLanguage("heading", "Kitchen Duty");
    setLanguage("p1", "Every week (Monday to Sunday), two people have kitchen duty. On the list below, you will find the room numbers of the responsible people for each week.");
    setLanguage("p2", "Check which week you are on duty and don't forget! Also remind those currently on duty if you notice they have forgotten!");
    setLanguage("p3", "If you are not present during your assigned week, it is your responsibility to arrange for a replacement and enter their room number on the list. Please perform the kitchen duty conscientiously and thoroughly. Our community depends heavily on this. These infos, as well as the list of responsible persons, can also be found on notices in the kitchen.");
    setLanguage("sub-heading", "Tasks");
    setLanguage("p4", "Take out the garbage");
    setLanguage("room", "Room");
    setLanguage("from", "From");
    setLanguage("till", "Till");
}

function setLanguage(id, text) {
    document.getElementById(id).innerHTML = text;
}
function sendMail() {
    var link = "mailto:lucas.kiko.kl@gmail.com"
             + "?cc=" + escape(document.getElementById('cEmail').value)
             + "&subject=" + escape("Fomulário ISIS:", document.getElementById('cName').value)
             + "&body=" + escape(document.getElementById('cMessage').value)
    ;

    window.location.href = link;
}
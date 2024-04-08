var taglinks = document.getElementsByClassName("tag-links");
    var tagcontents = document.getElementsByClassName("tag-content");

    function opentab(tagname) {
        for (taglink of taglinks) {
            taglink.classList.remove("active-link");
        }
    
        for (tagcontent of tagcontents) {
            tagcontent.classList.remove("active-tag");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tagname).classList.add("active-tag")
    }
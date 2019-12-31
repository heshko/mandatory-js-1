
//tittle 
document.title = "Fruits & Vegetables Corp";


//  h1 i header
var header = document.querySelector("header"),
firstChild = header.firstElementChild;
firstChild.textContent = "Fruits & Vegetables Corp";
firstChild.style.color ="red";

//item_3 i lista 
var lista = document.querySelector("ul"),
item3 = lista.children[2],
text_item3 = item3.firstElementChild;
text_item3.textContent="Vegetables";


// fixa main
var main = document.querySelector("main"),
    about= document.getElementById("about"),
    h2 = document.createElement("h2"),
    h2_text=document.createTextNode("About"),
    p =document.createElement("p"),
    p_text=document.createTextNode("We're the best in fruits & vegetables"),
    contact=document.getElementById("contact");
    h2.appendChild(h2_text);
    p.appendChild(p_text);
    about.removeChild(about.firstChild)
    about.appendChild(h2);
    about.appendChild(p);
    //bytar plats mellan about och contact
    main.replaceChild(about,contact);
    main.appendChild(contact);

    //lägger h2 och p i section_2 i contact
var h2_contact = document.createElement("h2"),
   p_contact = contact.firstElementChild,
   h2_contact_text = document.createTextNode("Contact");
   h2_contact.appendChild(h2_contact_text);
   contact.insertBefore(h2_contact,p_contact);

    //  thead i table 
var name_email = document.querySelector("thead");
    name_email.style.fontWeight ="bold";
    name_email.style.textAlign ="center"

// för att coden på want.html kommer inte att repatera
   
    if(about.children.length>3){
        about.removeChild(about.children[0]);
        about.removeChild(about.children[0]);
    }

  
    if(contact.children.length == 4){
        contact.removeChild(contact.children[0]);
    }
  
    
    
      
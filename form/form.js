var workers = {
    "template": ["Name",
        "Transformer type",
        "$/hr",
        "Description"],
    1: ["Optimus Prime",
        "Autobot",
        "$250/hr",
        "Optimus Prime is the largest, strongest and most courageous of all Autobots, he is also their leader. Feels his role is the protection of all life, including Earth-life. Able to transform into a Peterbilt 379 semi, he is perfect for transporting (or smuggling if thats required) any bulk amount of goods.",
        "Optimus.jpg"],
    2: ["Sentinel Prime",
        "Autobot",
        "$225/hr",
        "Optimus Prime's predecessor and mentor, the captain of the Ark and a former Autobot/Decepticon who transforms into a red and black Rosenbauer Panther airport crash tender fire truck. His intention to restore Cybertron to its former glory after the war drove him mad, causing him to go against his ideals and side with the Decepticons, eventually becoming as corrupt and vile as they where. He's a real people person and is best suited for customer service.",
        "SentinelPrime.jpg"],
    3: ["Bumblebee",
        "Autobot",
        "$200/hr",
        "Loyal to the autobots. Loyal to his friends. Bumblebee is a tenacious transforming robot, and a real hit on screen. His alternate form being a slick 2006 Camaro, he is perfect just to take for a cruise.",
        "Bumblebee.jpg"],
    4: ["Ratchet",
        "Autobot",
        "$275/hr",
        "The Autobots' medical officer who transforms into a search and rescue 2004 Hummer H2. Best suited for dangerous situations, perhaps as part of a convoy for a high-profile celebrity.",
        "Ratchet.jpg"],
    5: ["Ironhide",
        "Autobot",
        "$300/hr",
        "Weapons specialist of the Autobots. He transforms into the Chevrolet Kodiak truck. If your done with diplomacy, send Ironhide through and all your problems will go away.",
        "ironhide.jpg"],
    6: ["Blackout",
        "Decepticon",
        "$150/hr",
        "Loyal member of the decepticons. With a blaster on his chest and various blades he is already menace. For for special operations, he into a Pave Low helicopter. However Blackout seems to have an affinity for carving turkeys. Give him a shot, you won't regret it.",
        "blackout.jpg"],
    7: ["Starscream",
        "Decepticon",
        "$300/hr",
        "Megatron's second-in-command who transforms into a Lockheed Martin F-22 Raptor jet. He is a powerful and technologically advanced air commander. He is also a well-known philosopher, and is great at talking to people and helping them get through their problems.",
        "Starscream.jpg"],
    8: ["Barricade",
        "Decepticon",
        "$125/hr",
        "A Decepticon scout who transforms into a black Saleen S281 police car. Barricade can hold a second smaller transformer in a compartment on his chest. Due to his skill at impersonating authority he is good at getting into restricted areas. He's like the friend that knows the owners everywhere.",
        "Barricade.jpg"]
};

function getFormData() {
    "use strict";
    var fname = document.getElementById("firstname").value.trim();
    var lname = document.getElementById("lastname").value.trim();
    var address1 = document.getElementById("address1").value.trim();
    var address2 = document.getElementById("address2").value.trim();
    var phonenumber = document.getElementById("phonenumber").value.trim();
    var city = document.getElementById("city").value.trim();
    var state = document.getElementById("state").value;
    var zipcode = document.getElementById("zipcode").value.trim();
    var service = document.getElementById("service").value;
    var date_needed = document.getElementById("date_needed").value;
    var desc = document.getElementById("description").value.trim();
    var str = "<h3><b>Response</b></h3>";
    str += "<p>" + fname + ", we found a perfect match for you!</p><br />";
    str += "<p>" + workers[service][0] + " will go to " + address1 + " on " + date_needed + " to help you!</p><br />";
    str += "<br /><p>Your problem is: " + desc + "</p>";
    str += "<img src=\"../images/workers/" + workers[service][4] + "\"></img><br />";
    str += "<p>" + workers[service][3] + "</p>";
    return str;
}

function getHelp() {
    "use strict";
    var formData = getFormData();
    document.getElementById("form-article").style.display = "none";
    document.getElementById("resp-article").innerHTML = formData;
}

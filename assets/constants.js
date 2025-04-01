var mainDetails = {
    english: {
        brideDetails: {
            name: "Person One",
            mother:"Person Mother One",
            father: "Person Father One",
            relationContent: "Daughter of <strong>Person Mother One</strong> and <strong>Person Father One</strong>"
        },
        groomDetails: {
            name: "Person Two",
            mother: "Person Mother Two",
            father: "Person Father Two",
            relationContent: "Son of <strong>Person Mother Two</strong> and <strong>Person Father Two</strong>"
        },
        welcomeNote: "I am sure to say that we are happy to i need to write something but writing something so i hope you can uderstand what i am rwiting be careful.",
        signatureHead: "Regards,",
        signatureTail: "Person One with Person Two",
        receptionLabel: "Reception :",
        receptionTime: "09-MAY-2025, Friday Evening, 07:00",
        marriageLabel: "Marriage :",
        marriageTime: "09-MAY-2025, Friday Midnight(Saturday early morning), 02:12",
        venueLabel: "At :",
        venueValue: "Pallapu Anandapuram",
        welcomeHeading: "Our Invitation",
        introMessage:"With the grace of all the gods",
        blessingNote:"<p>सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके । </p><p>शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥</p>",
        scrollingHeading: "Best wishes from Relatives"
    },
    telugu: {
        brideDetails: {
            name: "Telugu One",
            mother:"Telugu Mother One",
            father: "Telugu Father One",
            relationContent: "<strong>Person Mother One</strong> mariyu <strong>Person Father One</strong> dampathula kumarte"
        },
        groomDetails: {
            name: "Telugu Two",
            mother: "Telugu Mother Two",
            father: "Telugu Father Two",
            relationContent: "<strong>Person Mother Two</strong> mariyu <strong>Person Father Two</strong> dampathula kumarudu"
        },
        welcomeNote: "dsalifjnaiosdfj iawujfoasjdoifjc sdujgv ofdhgv isdfugo;aifdjoa;isdovji aosd voasdj oasdoiv aiusdhoasid filas hdfc sadnfol hidfugv osdijvods iausdhvi djsiasdfku h csa.",
        signatureHead: "ittl,",
        signatureTail: "Two Person One With",
        receptionLabel: "భోజనం :",
        receptionTime: "09-MAY-2025, శుక్రవారం సాయంత్రం, 07:00",
        marriageLabel: "పెళ్లి ముహూర్తం  :",
        marriageTime: "09-MAY-2025, శుక్రవారం అర్థరాత్రి (తెల్లవారితే శనివారం), 02:12",
        venueLabel: "ప్రాంతం :",
        venueValue: "పల్లపు ఆనందపురం ",
        welcomeHeading: "మా ఆహ్వానం",
        introMessage:"ముక్కోటి దేవతల అనుగ్రహంతో",
        blessingNote:"<p>సర్వమంగళ మాంగళ్యే శివే సర్వార్థ సాధికే </p><p>శరణ్యే త్రంబకే గౌరి నారాయణి నమోస్తుతే</p>",
        scrollingHeading: "బంధువుల ప్రియ ఆశీస్సులతో"
    },
    getDetails: function(lang){
        return this[lang]
    }
}

var familyDetails = [
    ["Janapareddy Appallarsa", "Janapareddy Juvvalu","Karri Lakshmi", "Karri Applanaidu"],
    ["Satyarao", "Kasu", "Ramu", "Apparao", "Nookaratnam", "Santosh", "Latha", "Madhavarao", "Nagamani", "Sreenu", "Chanti", "Murthy"],
    ["Chelli", "Suri", "Pooja", "Nani", "Pravallika", "Gagana", "Devi", "Bhavani", "Balu", "Raja", "Kotesh"],
    ["Sai", "Sreenu", "Sai", "Dantesh", "Mouli", "Rajesh", "Mukta Sai", "Prasad", "Yashwant", "Prabhas"]
]

var marriageTime = new Date(2025,4,10,2,12)
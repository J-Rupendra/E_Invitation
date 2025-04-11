var mainDetails = {
    english: {
        introMessage:"With the grace of all the gods",
        brideDetails: {
            name: "Karri Teja Sri",
            mother:"Bhulakshmi",
            father: "Chiranjeevi",
            relationContent: `Daughter of <strong class="parent-name">Bhulakshmi</strong> and <strong class="parent-name">Chiranjeevi</strong> stays in Parawada`
        },
        groomDetails: {
            name: "Janapareddy Rupendra",
            mother: "Mani",
            father: "Lakshman Rao",
            relationContent: `Son of <strong class="parent-name">Mani</strong> and <strong class="parent-name">Lakshman Rao</strong> stays in Visakhapatnam`
        },
        receptionLabel: "Reception :",
        receptionTime: "09-MAY-2025, Friday Evening, 07:00",
        marriageLabel: "Marriage :",
        marriageTime: "09-MAY-2025, Friday Midnight(Saturday early morning), 02:12",
        venueLabel: "At :",
        venueValue: "Pallapu Anandapuram",
        welcomeHeading: "Our Invitation",
        welcomeNote: "I wholeheartedly welcome you to attend my marriage ceremony and wish both of us for great and happy marital journey.",
        signatureHead: "Regards,",
        signatureTail: "Mr. & Mrs. Rupendra",
        blessingNote:"<p>सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके । </p><p>शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥</p>",
    },
    telugu: {
        introMessage:"ముక్కోటి దేవతల అనుగ్రహంతో",
        brideDetails: {
            name: `<span style="font-size:0.9rem" > చి|| ల|| సౌ||&nbsp;</span> కర్రి తేజశ్రీ`,
            mother:"భూలక్ష్మి",
            father: "చిరంజీవి",
            relationContent: `పరవాడ లో ఉంటున్న <strong class="parent-name">భూలక్ష్మి</strong> మరియు <strong class="parent-name">చిరంజీవి</strong> దంపతుల కుమార్తె`
        },
        groomDetails: {
            name: `<span style="font-size:0.9rem" > చి|| &nbsp;</span>జనపరెడ్డి రుపేంద్ర `,
            mother: "మణి",
            father: "లక్ష్మణ రావు ",
            relationContent: `విశాఖపట్నం లో ఉంటున్న <strong class="parent-name">మణి</strong> మరియు <strong class="parent-name">లక్ష్మణ రావు</strong> దంపతుల కుమారుడు`
        },
        receptionLabel: "భోజనం :",
        receptionTime: "09-MAY-2025, శుక్రవారం సాయంత్రం, 07:00",
        marriageLabel: "పెళ్లి ముహూర్తం  :",
        marriageTime: "09-MAY-2025, శుక్రవారం అర్థరాత్రి (తెల్లవారితే శనివారం), 02:12",
        venueLabel: "ప్రాంతం :",
        venueValue: "పల్లపు ఆనందపురం ",
        welcomeHeading: "మా ఆహ్వానం",
        welcomeNote: "మీరు మీ కుటుంబ సభ్యులతో కలిసి నా వివాహ వేడుకకు వచ్చి నాకు నా భార్యకు మీ చల్లని దీవెనలు అందిరిస్తారని ఆశిస్తున్నాను",
        signatureHead: "ఇట్లు,",
        signatureTail: `తేజశ్రీ <span style="font-size:0.9rem">సమేత</span> రుపేంద్ర`,
        blessingNote:"<p>సర్వమంగళ మాంగళ్యే శివే సర్వార్థ సాధికే </p><p>శరణ్యే త్రంబకే గౌరి నారాయణి నమోస్తుతే</p>",
    },
    getDetails: function(lang){
        return this[lang]
    }
}

var familyDetails = [
    ["Janapareddy Appallarsa (Late)", "Janapareddy Juvvalu (Late)","Karri Lakshmi", "Karri Applanaidu"],
    ["Satyarao", "Kasu", "Ramu", "Apparao", "Nookaratnam", "Santosh (Late)", "Latha", "Madhavarao", "Nagamani", "Sreenu", "Chanti", "Murthy"],
    ["Chelli", "Suri", "Pooja", "Nani", "Pravallika", "Gagana", "Devi", "Bhavani", "Balu", "Raja", "Kotesh"],
    ["Sai", "Sreenu", "Sai", "Dantesh", "Mouli", "Rajesh", "Mukta Sai", "Prasad", "Yashwant", "Prabhas"]
]

var marriageTime = new Date(2025,4,10,2,12)
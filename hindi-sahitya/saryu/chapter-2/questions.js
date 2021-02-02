// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "तुलसीदास किस धारा के कवि थे ?",
    answer: "भक्तिकाल की सगुण रामभक्ति",
    options: [
      "भक्तिकाल की निर्गुण प्रेमाश्रयी",
      "भक्तिकाल की सगुण रामभक्ति",
      "भक्तिकाल की सगुण कृष्णभक्ति",
      "भक्तिकाल की निर्गुण ज्ञानाश्रयी"
    ]
  },
    {
    numb: 2,
    question: "गोस्वामी तुलसीदास का जन्म कब हुआ ?",
    answer: "विक्रम संवत 1589",
    options: [
      "विक्रम संवत 1555",
      "विक्रम संवत 1582",
      "विक्रम संवत 1589",
      "विक्रम संवत 1602"
    ]
  },
    {
    numb: 3,
    question: "तुलसीदास का जन्म कहां हुआ ?",
    answer: "राजापुर-बाँदा-उत्तरप्रदेश",
    options: [
      "नालपुर-मेरठ-उत्तरप्रदेश",
      "रतौली-सरधना-उत्तरप्रदेश",
      "लालपुरा-जयपुर-राजस्थान",
      "राजापुर-बाँदा-उत्तरप्रदेश"
    ]
  },
    {
    numb: 4,
    question: "तुलसीदास के माता-पिता का नाम था ?",
    answer: "आत्माराम-हुलसी",
    options: [
      "रामानंद-भगवती",
      "रविदेव-गायत्री",
      "आत्माराम-हुलसी",
      "नीरू-नीमा"
    ]
  },
    {
    numb: 5,
    question: "तुलसीदास किसके शिष्य थे ?",
    answer: "नरहरिदास",
    options: [
      "रामदेव",
      "रामानंद",
      "लीलानंद",
      "नरहरिदास"
    ]
  },
      {
    numb: 6,
    question: "तुलसीदास की मुख्य काव्य भाषा है ?",
    answer: "अवधि",
    options: [
      "अवधि",
      "संस्कृत",
      "सधुक्कड़ी",
      "खड़ी बोली"
    ]
  },
 {
    numb: 7,
    question: "तुलसीदास रचित महाकाव्य है ?",
    answer: "रामचरितमानस",
    options: [
      "गीतावली",
      "बरवै रामायण",
      "रामचरितमानस",
      "बीजक"
    ]
  },
     {
    numb: 8,
    question: "तुलसीदास का निधन कब हुआ ?",
    answer: "विक्रम संवत 1680",
    options: [
      "विक्रम संवत 1681",
      "विक्रम संवत 1690",
      "विक्रम संवत 1680",
      "विक्रम संवत 1600"
    ]
  },
  {
    numb: 9,
    question: "तुलसीदास का विवाह किससे हुआ ?",
    answer: "रत्नावली",
    options: [
      "यशोधरा",
      "रत्नावली",
      "प्रेमलता",
      "मणिकर्णिका"
    ]
  },
    {
    numb: 10,
    question: "तुलसीदास का निधन कहां हुआ ?",
    answer: "काशी",
    options: [
      "मगहर",
      "वाराणसी",
      "अयोध्या",
      "काशी"
    ]
  },
];

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
       
    if (userScore > 7){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>और शानदार ! 🎉, आपको मिले हैं <b>'+ questions.length +'</b> में से <b>'+ userScore +'</b> अंक</span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 5){ // if user scored more than 4
        let scoreTag = '<span>और बढ़िया ! 😎, आपको मिले हैं <b>'+ questions.length +'</b> में से <b>'+ userScore +'</b> अंक</span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>और अच्छा प्रयास ! 🙂, आपको मिले हैं <b>'+ questions.length +'</b> में से <b>'+ userScore +'</b> अंक</span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>और क्षमा करें 😐, आपको मिले हैं <b>'+ questions.length +'</b> में से <b>'+ userScore +'</b> अंक</span>';
        scoreText.innerHTML = scoreTag;
    }
}

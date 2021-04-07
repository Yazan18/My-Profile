document.body.style.width = screen.width;



var up_img = document.getElementById("up_img");

// // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function (){scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    up_img.style.opacity = 1;
  } else {
    up_img.style.opacity = 0;
  }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }




//    translate

var arabic = document.getElementById("arabic");
var english = document.getElementById("english");

// nav bar translate start
var hero_logo = document.getElementById("hero_logo_t")

var about = document.getElementById("about_t");
var skill = document.getElementById("skill_t");
var portfolio = document.getElementById("portfolio_t");
var contact = document.getElementById("contact_t");
var language = document.getElementById("language_t");
var socialMedia = document.getElementById("social_media_t");
var fasebook = document.getElementById("fasebook_t");
var instgram = document.getElementById("instgram_t");
var youtube = document.getElementById("youtube_t");
// nav bar translate end

// hero translate start
var hero_1 = document.getElementById("hero_1_t") ;
var hero_2 = document.getElementById("hero_2_t") ;
// hero translate end

// about translate start
var About = document.getElementById("about_translate");
var Ap1_t = document.getElementById("Ap1_t");
var Ap2_t = document.getElementById("Ap2_t");
var Ap3_t = document.getElementById("Ap3_t");
var Ap4_t = document.getElementById("Ap4_t");
// about translate end

// skill translate start
var Skill = document.getElementById("skill_h_t");

var ht_p = document.getElementById("ht_p_t");
var cs_p = document.getElementById("cs_p_t");
var bo_p = document.getElementById("bo_p_t");
var js_p = document.getElementById("js_p_t");
var vue_p = document.getElementById("vue_p_t");
// skill translate end

// My Portfolio start (coming soon) 
var m_portfolio = document.getElementById("m_portfolio_t");

// My Portfolio end (coming soon) 

// Contact translate start
var contact_h = document.getElementById("contact_h_t");
var c_mb_n = document.getElementById("c_mb_n_t")
var c_email = document.getElementById("email_t");

// Contact translate end

// footer translate start
var footer = document.getElementById("footer_t");
// footer translate end

// localStorage translate start

arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};
onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};

// localStorage translate end

function setLanugage(getLanuage){
    if(getLanuage === "arabic"){
        document.body.dir = "rtl";

        arabic.innerHTML = "عربي";
        english.innerHTML = "انكليزي";

      // nav bar translate start

      document.getElementById("about_t").style.margin = "0 20px";

      hero_logo.innerHTML = "يزن محمود";

        about.innerHTML = "حول";
        skill.innerHTML = "مهاراتي";
        portfolio.innerHTML = "اعمالي";
        contact.innerHTML = "تواصل";
        language.innerHTML = "لغة ";
        socialMedia.innerHTML = "وسائل التواصل الاجتماعي";
        fasebook.innerHTML = "فيسبوك";
        instgram.innerHTML = "انستغرام";
        youtube.innerHTML = "يوتيوب";
        // nav bar translate end

        // hero translate start
        hero_1.innerHTML = "مرحبًا ، أنا يزن ، مطور ويب أمامي";
        hero_2.innerHTML = "آمل أن تأخذ جولة في موقعي";
        // hero translate end

        // about translate start
        About.innerHTML = "حول";
        About.style.lineHeight = "120px";
        Ap1_t.innerHTML = "انا يزن من سوريا";
        Ap2_t.innerHTML = "أنا أحب البرمجة منذ طفولتي";
        Ap3_t.innerHTML = "أنا مطور الواجهة الأمامية للمواقع";
        Ap4_t.innerHTML = "وأنا أجتهد لتطوير خبراتي ومهاراتي كل يوم";
        // about translate end

        // skill translate start
        Skill.innerHTML = "مهاراتي";

        ht_p.innerHTML = "لقد درست ال HTML في اكاديمية شيار اونلاين و لدي خبرة قليلة ، لكني أحسن نفسي كل يوم.";
        cs_p.innerHTML = "لقد درست ال CSS في اكاديمية شيار اونلاين و لدي خبرة قليلة ، لكني أحسن نفسي كل يوم.";
        bo_p.innerHTML = "لقد درست ال Bootstrap في اكاديمية شيار اونلاين و لدي خبرة قليلة ، لكني أحسن نفسي كل يوم.";
        js_p.innerHTML = "لقد درست ال JS في اكاديمية شيار اونلاين و لدي خبرة قليلة ، لكني أحسن نفسي كل يوم.";
        vue_p.innerHTML = "أعرف إطار عمل Vue Js ، لكنني ما زلت أبدأ به ، لكني أحسن نفسي كل يوم.";
        // skill translate end

        // My Portfolio translate (coming soon) start
        m_portfolio.innerHTML = "اعمالي";

        // My Portfolio (coming soon) end
        
        // Contact translate start
        contact_h.innerHTML = "تواصل";
        c_mb_n.innerHTML = "رقم الجوال: 0938389558";
        c_email.innerHTML = "بريد الالكتروني";
        // Contact translate end

        // footer translate start
        footer.innerHTML = "© 2021 حقوق النشر: يزن محمود";
        // footer translate end

    }else if(getLanuage ==="english"){
        document.body.dir = "ltr";

        arabic.innerHTML = "Arabic";
        english.innerHTML = "English";

        // nav bar translate start

        document.getElementById("about_t").style.margin = "";

        hero_logo.innerHTML = "Yazan Mahmoud";

        about.innerHTML = "About";
        skill.innerHTML = "Skill";
        portfolio.innerHTML = "Portfolio";
        contact.innerHTML = "Contact";
        language.innerHTML = "Language ";
        socialMedia.innerHTML = "Social Media";
        fasebook.innerHTML = "Fasebook";
        instgram.innerHTML = "Fnstgram";
        youtube.innerHTML = "Youtube";
        // nav bar translate end

        // hero translate start
        hero_1.innerHTML = "Hi, I am Yazan, Front end web developer";
        hero_2.innerHTML = "Hope you take a tour of my site";
        // hero translate start
        
        // about translate start
        About.innerHTML = "About";
        Ap1_t.innerHTML = "I am Yazan, I am from Syria";
        Ap2_t.innerHTML = "I love a programmer from my childhood";
        Ap3_t.innerHTML = "I am a frontend developer for websites";
        Ap4_t.innerHTML = "And I strive to develop my experiences and skills every day";
        // about translate end

        // skill translate start
        Skill.innerHTML = "My Skill";

        ht_p.innerHTML = "I studied the HTML at the Chiar Academy, and I have little experience, but I improve myself every day.";
        cs_p.innerHTML = "I studied the CSS at the Chiar Academy, and I have little experience, but I improve myself every day.";
        bo_p.innerHTML = "I studied the Bootstrap at the Chiar Academy, and I have little experience, but I improve myself every day.";
        js_p.innerHTML = "I studied the JS at the Chiar Academy, and I have little experience, but I improve myself every day.";
        vue_p.innerHTML = "I know the Vue Js framework, but I'm still just starting out with it, but I'm improving myself every day.";
    // skill translate end

        // My Portfolio translate (coming soon) start
        m_portfolio.innerHTML = "My Portfolio";

        // My Portfolio translate (coming soon) end

        // Contact translate start
        contact_h.innerHTML = "Contact";
        c_mb_n.innerHTML = "Mobile number : 0938389558";
        c_email.innerHTML = "Email";
        // Contact translate end

        // footer translate start
        footer.innerHTML = "© 2021 Copyright: Yazan Mahmoud";
        // footer translate end
        
    }
}

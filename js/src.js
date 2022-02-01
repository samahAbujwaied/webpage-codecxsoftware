'use strict'

let language = document.getElementById('language');
let paragraph1 = document.getElementById('paragraph1');
let paragraph2 = document.getElementById('paragraph2');
let contact = document.getElementById('contact');
let poBox = document.getElementById('poBox');
let phone =document.getElementById('phone');
let fax = document.getElementById('fax');
let locate = document.getElementById('locate');

let sitemap1 =document.getElementById('sitemap1');
let homefooter =document.getElementById('home-footer');
let morefooter =document.getElementById('more-footer');
let readfooter = document.getElementById('read-footer');

let sitemap2=document.getElementById('sitemap2');
let newsfooter = document.getElementById('news-footer');
let aboutUsfooter = document.getElementById('aboutus-footer');
let contactus = document.getElementById('contactus-footer');

let idhome= document.getElementById('idhome');

let myNavbar = document.getElementById('myNavbar');
let home = document.getElementById('home');
let more = document.getElementById('more');
let news =document.getElementById('news');
let aboutUs = document.getElementById('aboutUs');
let contactUs= document.getElementById('contactUs');
let translate= document.getElementById('translate');

let navlang = document.getElementById('navlang');
let items = document.getElementById('items');


let footer = document.getElementById('footer');
let align1 = document.getElementById('align1');
let align2 = document.getElementById('align2');
let align3 = document.getElementById('align3');

let translatelang= 'arabic'

language.onclick = ()=>{
    setLanguage(translatelang)
}
function setLanguage(getlanguage){
    if(getlanguage=='arabic'){

        paragraph1.innerHTML='هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل  هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل ';
        paragraph1.style.textAlign="right"
        
        paragraph2.innerHTML='هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل  هذه الفقرة الاولى ، الفقرة الثانية في الأسفل هذه الفقرة الاولى ، الفقرة الثانية في الأسفل ';
        paragraph2.style.textAlign="right"
        
        home.innerHTML='الصفحة الرئيسية'; 
        more.innerHTML='المزيد';
        news.innerHTML='الاخبار';
        aboutUs.innerHTML='نبذة عنا ';
        contactUs.innerHTML='تواصل معنا';
        translate.innerHTML='الإنجليزية';

        contact.innerHTML='اتصل';
        poBox.innerHTML='مكتب البريد';
        phone.innerHTML='الهاتف';
        fax.innerHTML='الفاكس';
        locate.innerHTML='الموقع';
        sitemap1.innerHTML='خريطة الموقع';

        homefooter.innerHTML='الصفحة الرئيسية';
        morefooter.innerHTML='المزيد';
        readfooter.innerHTML='اقرأ';

        sitemap2.innerHTML='خريطة الموقع';
        newsfooter.innerHTML='الأخبار';
        aboutUsfooter.innerHTML='عنا';
        contactus.innerHTML='تواصل معنا';
        
        myNavbar.style.direction='rtl';
        footer.style.direction='rtl';

        items.style.float='right';
        align1.style.float='right';
        align2.style.float='right'
        align3.style.float='right';
        idhome.style.float='right';

        translatelang='english'
    }
    else if (getlanguage=='english')
    {
        paragraph1.innerHTML='This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one';
        paragraph1.style.textAlign="left";

        paragraph2.innerHTML='This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one ,This is a paragraph one , and the paragraph two is below this one';
        paragraph2.style.textAlign="left";

        home.innerHTML='Home';
        more.innerHTML='More';
        news.innerHTML='News';
        aboutUs.innerHTML='About us';
        contactUs.innerHTML='Coutact us';
        translate.innerHTML='Arabic';

        contact.innerHTML='Contact Us';
        poBox.innerHTML='Po.Box';
        phone.innerHTML='Phone';
        fax.innerHTML='Fax';
        locate.innerHTML='Location';

        sitemap1.innerHTML='Sitemap';
        homefooter.innerHTML='Home';
        morefooter.innerHTML='More';
        readfooter.innerHTML='Read';

        sitemap2.innerHTML='Sitemap';
        newsfooter.innerHTML='News';
        aboutUsfooter.innerHTML='About Us';
        contactus.innerHTML='Contact Us';

        myNavbar.style.direction='ltr';
        footer.style.direction='ltr';

        items.style.float='left';
        idhome.style.float='left';
        align1.style.float='left';
        align2.style.float='left';
        align3.style.float='left';

        translatelang='arabic'
    }



}

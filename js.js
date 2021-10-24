$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 60){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

})
lightGallery(document.querySelector('.img-gallery'));

fetch("./data.json")

 .then(function(resp){
    return resp.json();
})
.then(function(data){
     console.log("clicked");
    document.getElementById('brand-name').src = data.brandlogo;
    // document.getElementById('offcanvasNavbarLabel').innerHTML = data.brandtitle;
    document.getElementById('maintitle').innerHTML = data.title;
    document.getElementById('subtitle').innerHTML = data.subtitle;
    document.getElementById('ser1').innerHTML = data.servicetitle1;
    document.getElementById('serp1').innerHTML = data.serviceabout1;
    document.getElementById('ser2').innerHTML = data.servicetitle2;
    document.getElementById('serp2').innerHTML = data.serviceabout2;
    document.getElementById('ser3').innerHTML = data.servicetitle3;
    document.getElementById('serp3').innerHTML = data.serviceabout3;
    document.getElementById('ser4').innerHTML = data.servicetitle4;
    document.getElementById('serp4').innerHTML = data.serviceabout4;
    document.getElementById('ser5').innerHTML = data.servicetitle5;
    document.getElementById('serp5').innerHTML = data.serviceabout5;
    document.getElementById('ser6').innerHTML = data.servicetitle6;
    document.getElementById('serp6').innerHTML = data.serviceabout6;

    document.getElementById('servimage1').src = data.serimage1;
    document.getElementById('servimage2').src = data.serimage2;
    document.getElementById('servimage3').src = data.serimage3;
    document.getElementById('servimage4').src = data.serimage4;
    document.getElementById('servimage5').src = data.serimage5;
    document.getElementById('servimage5').src = data.serimage5;
    document.getElementById('servimage6').src = data.serimage5;
    



    
    document.getElementById('img1').src = data.image1;
    document.getElementById('bimg1').href = data.image1;
    document.getElementById('img2').src = data.image2;
    document.getElementById('bimg2').href = data.image2;
    document.getElementById('img3').src = data.image3;
    document.getElementById('bimg3').href = data.image3;
    document.getElementById('img4').src = data.image4;
    document.getElementById('bimg4').href = data.image4;
    document.getElementById('img5').src = data.image5;
    document.getElementById('bimg5').href = data.image5;
    document.getElementById('img6').src = data.image6;
    document.getElementById('bimg6').href = data.image6;
    document.getElementById('img7').src = data.image7;
    document.getElementById('bimg7').href = data.image7;
    document.getElementById('img8').src = data.image8;
    document.getElementById('bimg8').href = data.image8;
    document.getElementById('img9').src = data.image9;
    document.getElementById('bimg9').href = data.image9;
    
    document.getElementById('about1img').src = data.aboutsubtitleimage;
    document.getElementById('about1h').innerHTML = data.abouttitle;
    document.getElementById('about1p').innerHTML = data.aboutsubtitle1para;
    document.getElementById('about2p').innerHTML= data.aboutsubtitle2para;
    
    document.getElementById('firstnumber').innerHTML= data.mobileno1;
    document.getElementById('callno1').href= data.callbutton1;
    document.getElementById('secondnumber').innerHTML= data.mobileno2;
    document.getElementById('callno2').href= data.callbutton2;
    document.getElementById('place-adress').innerHTML= data.adress;
    document.getElementById('getdirection').href= data.adressbutton;
    document.getElementById('sendemail').innerHTML= data.mailid;
    document.getElementById('mailid').href= data.mailbutton;
    document.getElementById('whatsapp').href= data.whatsappbutton;
    document.getElementById('googlemap').src= data.mapofplace;
    
    document.getElementById('day1').innerHTML= data.monday;
    document.getElementById('day2').innerHTML= data.tuesday;
    document.getElementById('day3').innerHTML= data.wednesday;
    document.getElementById('day4').innerHTML= data.thursday;
    document.getElementById('day5').innerHTML= data.friday;
    document.getElementById('day6').innerHTML= data.saturday;
    document.getElementById('day7').innerHTML= data.sunday;


    
    

 });
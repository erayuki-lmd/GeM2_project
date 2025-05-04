const word_speed=40
const gem2_color="greenyellow"

function WritingString(object,message){
    for (let i = 0; i < message.length; i++){
        if(i+1 == message.length){
            setTimeout(() => {
                $(object).html(message.substr(0,1+i));
            }, i * word_speed); 
        }else{
            setTimeout(() => {
                $(object).html(message.substr(0,1+i)+"|");
            }, i * word_speed);   
        }
    }
}

function Gem2Centering(){
    $('.GeMText').css('color',gem2_color);
    setTimeout(() => {
        $('.MainText').css('color','Transparent');
    }, 500);
    setTimeout(() => {
        $('.Ge').css({'font-size':'10vw','left':'37.5vw','top':'20%','transition':'2s'})
        $('.M').css({'font-size':'10vw','left':'50vw','top':'20%','transition':'2s'})
    }, 1000);
    setTimeout(() => {
        $('#Title_G5').css({'color':gem2_color})
    }, 3000);
}


async function Starting(){
    // WritingTitle
    let title_condition =[
        ["#Title_1","Generalizing Stylized",0],
        ["#Title_2","Motion",0],
        ["#Title_3","Generation",0],
        ["#Title_4","Method",0],
        ["#Title_5","by Introducing Metadata-Independent Learning",0],
        ["#Title_6","and Unified Multiple Motion Dataset",0]
    ]
    let second_start=title_condition[0][1].length+1
    for (let i=1; i<title_condition.length; i++){
        title_condition[i][2] = title_condition[i-1][2] + title_condition[i-1][1].length+1;
        second_start += title_condition[i][1].length+1
    }
    for (let k of title_condition){
        setTimeout(() => {
            WritingString(k[0],k[1])
        }, k[2]*word_speed);
    }
    
    // CenteringGeM2
    setTimeout(() => {
        Gem2Centering("#Title_G1")
    }, second_start*word_speed);
    
    // CenteringGeM2
    setTimeout(() => {
        $(".TitleButton").css("color",gem2_color);
    }, second_start*word_speed+4000);


    setTimeout(() => {
        $(".TitleClass").css("transition","0s");
        $(".TitleDel").hide();
    }, second_start*word_speed+5000);
}

window.onload = Starting;

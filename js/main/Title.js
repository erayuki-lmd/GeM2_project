const word_speed=70

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

// WritingString("#Title_1","abcdefg")


async function Starting(){
    title_condition =[
        ["#Title_1","Generalizing Stylized",0],
        ["#Title_2","Motion",0],
        ["#Title_3","Generation",0],
        ["#Title_4","Method",0],
        ["#Title_5","by Introducing Metadata-Independent Learning",0],
        ["#Title_6","and Unified Multiple Motion Dataset",0]
    ]
    for (let i=1; i<title_condition.length; i++){
        title_condition[i][2] = title_condition[i-1][2] + title_condition[i-1][1].length+1;
    }
    for (let k of title_condition){
        setTimeout(() => {
            WritingString(k[0],k[1])
        }, k[2]*word_speed);
    }
}

window.onload = Starting;

// const messages = ["俺の人生", "波乱万丈", "海より深く", "空より広く", "背中で語る！"];

// for (let i = 0; i < messages.length; i++) {
//   setTimeout(() => {
//     console.log(messages[i]);
//   }, i * 1000); // i秒ごとに実行（1秒 = 1000ミリ秒）
// }



const RotationIcon = setInterval(async function(){
    $('#RoadingIcon').css('transition','0s');
    $('#RoadingIcon').css('transform','rotate(0deg)');
    setTimeout(() => {
        $('#RoadingIcon').css('transition','2s');
        $('#RoadingIcon').css('transform','rotate(360deg)');
        }
         ,50)
},4000);


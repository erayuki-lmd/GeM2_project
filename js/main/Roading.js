const RotationIcon = setInterval(async function(){
    $('#RoadingIcon').css('transition','0s');
    $('#RoadingIcon').css('transform','rotate(0deg)');
    setTimeout(() => {
        $('#RoadingIcon').css('transition','2s');
        $('#RoadingIcon').css('transform','rotate(360deg)');
        }
         ,5)
},5000);

const ChangeMessage = setInterval(async function(){
    setTimeout(() => {
        $('#RoadingMessage').html('Loading.');
        }
         ,2000),
    setTimeout(() => {
        $('#RoadingMessage').html('Loading..');
        }
         ,3000)
    setTimeout(() => {
        $('#RoadingMessage').html('Loading...');
        }
        ,4000)
},5000);


function Starting(){
    setTimeout(() => {
        $('#RoadingScrean').hide();
        }
        ,2000)
}



// script
setTimeout(() => {
    $('#RoadingIcon').css('transition','2s');
    $('#RoadingIcon').css('transform','rotate(360deg)');
    }
     ,0)
setTimeout(() => {
    $('#RoadingMessage').html('Loading.');
    }
     ,1000),
setTimeout(() => {
    $('#RoadingMessage').html('Loading..');
    }
     ,2000)
setTimeout(() => {
    $('#RoadingMessage').html('Loading...');
    }
    ,3000)

window.onload = Starting;
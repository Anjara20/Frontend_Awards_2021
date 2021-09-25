const animLine= document.querySelector('.line');
const headerSection=document.getElementById('section-header');
const films=document.getElementById('films');
const sectionSkyline=document.getElementById('skyline');
headerSection.style.display="none";
films.style.display="none";
animLine.onanimationend=function(){
    setInterval(function(){
        sectionSkyline.style.display="none";
        headerSection.style.display="block";
        films.style.display="flex";
    },1000)
    
}

var markers = [
{
coords:{lat: 40.730610, lng:-73.935242},
name:"New York City, NY, USA",
iconImage:'img/star.png',
content: '<div style="width:200px;min-height:40px"><h4>New York City, NY, USA</h4><p>New York is the most populous city city in the United States. I traveled to NYC during my first year of college with two of my friends.</p><img src="img/nyc.png" alt="NYC" width="200" height="150"><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal1">Learn More</button></div>'
},
{
coords:{lat: 34.052235, lng:-118.243683},
name:"Los Angeles, CA, USA",
iconImage:'img/star.png',
content: '<div style="width:200px;min-height:40px"><h4>Los Angeles, CA, USA</h4><p>Los Angeles lies in a basin in Southern California, adjacent to the Pacific Ocean, with mountains as high as 10,000 feet and deserts. It has a lot of famous travel places that cannot be explored during only a several-days visit.</p><img src="img/la.png" alt="LA" width="200" height="150"><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal2">Learn More<button><div>'
},
{
coords:{lat: 35.652832, lng:139.839478},
name:"Tokyo, Japan",
iconImage:'img/star.png',
content: '<div style="width:200px;min-height:40px"><h4>Tokyo, Japan</h4><p>Tokyo is the capital of Japan. Today, Tokyo offers a seemingly unlimited choice of shopping, entertainment, culture and dining to its visitors. I went there with my family when I was about 15.</p><img src="img/tokyo.png" alt="Tokyo" width="200" height="200"><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal3">Learn More</button></div>'
},
{
coords:{lat: 37.532600, lng:127.024612},
name:"Seoul, South Korea",
iconImage:'img/star.png',
content: '<div style="width:200px;min-height:40px"><h4>Seoul, South Korea</h4><p>Seoul is the capital of South Korea. I went there to take a SAT II test when applying for college. My favorite thing about Seoul is the food there.</p><img src="img/seoul.png" alt="seoul" width="200" height="100"><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal4">Learn More</button></div>'
},
{
coords:{lat: 39.916668, lng:116.383331},
name:"Beijing, China",
iconImage:'img/star.png',
content: '<div style="width:200px;min-height:40px"><h4>Beijing, China</h4><p>Beijing is the current capital of China and one of its ancient capitals.  The name "Beijing" means Northern Capital.  Beijing is also known as Peking. </p><img src="img/beijing.png" alt="Beijing" width="200" height="150"><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal5">Learn More</button></div>'
},
{
coords:{lat: 48.864716, lng:2.349014},
name:"Paris, France",
iconImage:'img/star.png',
content: '<div style="width:200px;min-height:40px"><h4>Paris, France</h4><p>Paris is the capital of France, and since the 17th century, Paris has been one of major centers of finance, diplomacy, commerce, fashion, science and arts in the Europe.</p><img src="img/paris.png" alt="Paris" width="200" height="200"><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal6">Learn More</button></div>'
},
{
coords:{lat: 41.902782, lng:12.496366},
name:"Rome, Italy",
iconImage:'img/star.png',
content: '<div style="width:200px;min-height:40px"><h4>Rome, Italy</h4><p>A heady mix of haunting ruins, awe-inspiring art and vibrant street life, Italy’s hot-blooded capital is one of the world’s most romantic and charismatic cities.</p><img src="img/rome.png" alt="Rome" width="200" height="150"><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal7">Learn More</button><div>'
},
{
coords:{lat: -33.865143, lng:151.209900},
name:"Sydney, NSW, Australia",
iconImage:'img/star.png',
content: '<div style="width:200px;min-height:40px"><h4>Sydney, NSW, Australia</h4><p>Located near the southern end of Australia&#39;s eastern coast, Sydney is the largest city on the Australian continent, the capital of New South Wales, and one of the world&#39;s largest metropolitan areas. </p><img src="img/sn.png" alt="Sydney" width="200" height="150"><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal8">Learn More</button><div>'
},
{
coords:{lat: 22.302711, lng:114.177216},
name:"Hong Kong, China",
iconImage:'img/star.png',
content: '<div style="width:200px;min-height:40px"><h4>Hong Kong, China</h4><p>Hong Kong is a special administrative region (SAR) of the People&#39;s Republic of China. Hong Kong has a free market economy in which the prices of goods and services are determined in a free price system.</p><img src="img/hk.png" alt="Hong Kong" width="200" height="200"><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal9">Learn More</button></div>'
},
{
coords:{lat: 31.224361, lng:121.469170},
name:"Shanghai, China",
iconImage:'img/star.png',
content: '<div style="width:200px;min-height:40px"><h4>Shanghai, China</h4><p>Shanghai is situated on the banks of the Yangtza River Delta in Eastern China. It is the largest city in China and the eighth largest city in the world.</p><img src="img/shanghai.png" alt="Shanghai" width="200" height="150"><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal10">Learn More</button></div>'
},
{
coords:{lat: 45.750000, lng:126.633331},
name:"Harbin, Heilongjiang, China",
iconImage:'img/star.png',
content: '<div style="width:200px;min-height:40px"><h4>Harbin, Heilongjiang, China</h4><p>Harbin is my hometown, is a sub-provincial city and the provincial capital of Heilongjiang province. <br>It serves as a key political, economic, scientific, cultural and communications hub in Northeast China.</p><img src="img/harbin.png" alt="Harbin" width="200" height="150"><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal11">Learn More</button></div>'
},
{
coords:{lat: 52.520008, lng:13.404954},
name:"Berlin, Germany",
iconImage:'img/star.png',
content: '<div style="width:200px;min-height:40px"><h4>Berlin, Germany</h4><p>Berlin is the capital and the largest city of Germany as well as one of its 16 constituent states. Berlin is a city of culture, politics, media and science.</p><img src="img/berlin.png" alt="Berlin" width="200" height="150"><br><br><button type="button" class="btn btn-info btn-sm center" data-toggle="modal" data-target="#myModal12">Learn More</button></div>'
},
];


function initMap(){
  var my_Map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom:3,
      center:{
        lat: 33.738045,
        lng: 73.084488
      }
    }
  );


// Loop through markers
for(var i = 0; i < markers.length; i++) {
// Add marker
addMarker(markers[i]);
console.log(markers[i].name);
}

function addMarker(props){
console.log(props);
var my_Marker = new google.maps.Marker({
position: props.coords,
map: my_Map,
icon: props.iconImage,
});

//check for custom content
if(props.content){
//set content
var infoWindow = new google.maps.InfoWindow({
  content: props.content
});

my_Marker.addListener('click', function(){
  infoWindow.open(my_Map, my_Marker);

});
console.log('customcontent');
}
}
}

cityName = ["New York City, NY, USA","Los Angeles, CA, USA","Tokyo, Japan","Seoul, South Korea","Beijing, China","Paris, France","Rome, Italy","Sydney, NSW, Australia","Hong Kong, China","Shanghai, China","Harbin, Heilongjiang, China","Berlin, Germany"];
cityContent = [
  "New York is the most populous city city in the United States. I traveled to NYC during my first year of college with two of my friends",
  "Los Angeles lies in a basin in Southern California, adjacent to the Pacific Ocean, with mountains as high as 10,000 feet and deserts. It has a lot of famous travel places that cannot be explored during only a several-days visit.",
  "Tokyo is the capital of Japan. Today, Tokyo offers a seemingly unlimited choice of shopping, entertainment, culture and dining to its visitors. I went there with my family when I was about 15.",
  "Seoul is the capital of South Korea. I went there to take a SAT II test when applying for college. My favorite thing about Seoul is the food there.",
  "Beijing is the current capital of China and one of its ancient capitals.  The name 'Beijing' means Northern Capital.  Beijing is also known as Peking.",
  "Paris is the capital of France, and since the 17th century, Paris has been one of major centers of finance, diplomacy, commerce, fashion, science and arts in the Europe.",
  "A heady mix of haunting ruins, awe-inspiring art and vibrant street life, Italy’s hot-blooded capital is one of the world’s most romantic and charismatic cities.",
  "Located near the southern end of Australia&#39;s eastern coast, Sydney is the largest city on the Australian continent, the capital of New South Wales, and one of the world&#39;s largest metropolitan areas.",
  "Hong Kong is a special administrative region (SAR) of the People&#39;s Republic of China. Hong Kong has a free market economy in which the prices of goods and services are determined in a free price system.",
  "Shanghai is situated on the banks of the Yangtza River Delta in Eastern China. It is the largest city in China and the eighth largest city in the world.",
  "Harbin is my hometown, is a sub-provincial city and the provincial capital of Heilongjiang province. It serves as a key political, economic, scientific, cultural and communications hub in Northeast China.",
  "Berlin is the capital and the largest city of Germany as well as one of its 16 constituent states. Berlin is a city of culture, politics, media and science."
];

for (var j = 1; j < 13; j++) {
   table.rows[j].cells[0].innerHTML = cityName[j-1];
   table.rows[j].cells[1].innerHTML = cityContent[j-1];
  //Trigger the modal with a button//
   //table.rows[j].cells[2].innerHTML = "<button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target=''#myModal'>Open Modal</button>"

 }

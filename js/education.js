let schools = [
  {
    id: 'wctc',
    school: 'Waukesha County Technical College',
    degree: 'Computer Support Specialist',
    location: 'Waukesha, WI',
    latitude: '',
    longitude: '',
    gradDate: 'Dec 2014',
    additionalDetails: '',
    image: '../assets/WCTC.png',
    URL: 'https://www.wctc.edu/',
  }, 
  {
    id: 'stout',
    school: 'University of Wisconsin-Stout',
    degree: 'Graphic Communications Management',
    location: 'Menomonie, WI',
    latitude: '',
    longitude: '',
    gradDate: 'Dec 2009',
    additionalDetails: 'Minor in Business Administration',
    image: '../assets/UWStout.png',
    URL: 'https://www.uwstout.edu/',
  }
]

function listSchoolDetails() {
  let school = schools.school;
  let degree = schools.degree;
  let location = schools.location;
  let gradDate = schools.gradDate;
  let additionalDetails = schools.additionalDetails;

  // // schools.forEach(function (item, key) {
  let x = "";

  for (i = 0; i < schools.length; i++) {
    $("#cards").append( 
  `<div class="row" id="school_card_container">
      <div class="card">
      <a href="${schools[i].URL}" target="_blank" class="school_hyperlink">
        <div class="media border p-3">
          <img src="${schools[i].image}" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:80px;">
          <div class="media-body">
            <h4>${schools[i].school}</h4>
            <h6><small><i>${schools[i].location} | Graduated: ${schools[i].gradDate}</i></small></h6>
            <h4><small><i>Degree: ${schools[i].degree}</i></small></h4>
          </div>
        </div> 
        </a>
      </div>
      
  </div>`
    );
 }
  // var schoolsArray = Array.from(schools);
  // console.log(schoolsArray);
  // schools.forEach(populateExperienceCard);


//   for (var school in schools) {
//     return (
  
//   );}
}

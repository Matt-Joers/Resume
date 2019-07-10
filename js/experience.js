
let experiences = [
  { 
    orgID: "froedtert",
    position: 'Software Developer',
    organization: 'Froedtert Health',
    location: 'Menomonee Falls, WI',
    image: '../assets/froedtert_logo.png',
    startDate: 'Jan 2017',
    endDate: 'Present',
    jobDescription: [
       "Develop business logic architecture using requirements based on existing & future processes, scope details, alternatives, risks and user expectations.",
       "Analyze end user requirements and process by observing existing application functionality, conducting interviews, and researching other software capabilities.",
       "Communicate client business requirements by developing easy-to-understand data & process maps and end user stories.",
       "Develop mobile app functionality by leveraging the React Native framework, TypeScript / JavaScript, Redux, third party libraries, Epic MyChart SDK, REST APIs, and bridging Swift, Java & Obj-C code.",
       "Develop web applications and scripts for the SharePoint & Django platforms by leveraging jQuery, JavaScript / TypeScript, REST API calls, Python, HTML5, CSS3, PowerShell, InfoPath, SharePoint Designer 2013 and other third-party libraries.",
       "Modify existing web applications to add additional functionality by implementing custom jQuery scripting and modifying the CSS files."
    ],
  },
  {
    orgID: "skyline",
    position: 'Portal Analyst II',
    organization: 'Skyline Technologies',
    location: 'Pewaukee, WI',
    image: '../assets/Skyline.png',
    startDate: 'Feb 2016',
    endDate: 'Dec 2016',
    jobDescription: 
      [
        "Perform on-site discoveries with customers to determine the best method to implement SharePoint and/or Microsoft Office 365.",
        "Perform customer support by developing new SharePoint architecture, altering or creating new InfoPath forms, gathering development requirements and creating streamlined processes and workflows.",
        "Generate documentation for internal use and client use that describes both our processes and standard operating procedures used within the Portals and Collaboration team.",
      ],
  },
  {
    orgID: "qg",
    position: 'Software Product Specialist',
    organization: 'Quad/Graphics',
    location: 'Sussex, WI',
    image: '../assets/QG_logo.jpg',
    startDate: 'Sept 2014',
    endDate: 'Feb 2016',
    jobDescription: 
      [
        "Perform software discoveries with customers to determine the best method of implementing our software with their existing workflows & tools, while also developing data models to house the client data.",
        "Write discovery and implementation reports to prepare for on-site software deployments.",
        "Write functional specifications for new / modified software features and functionality for our app.",
        "Establish a working relationship with clients and troubleshoot their issues."
      ]
  },

  {
    orgID: "qg",
    position: 'Client Service Representative',
    organization: 'Quad/Graphics',
    location: 'Sussex, WI',
    image: '../assets/QG.png',
    startDate: 'Jan 2013',
    endDate: 'Setp 2014',
    jobDescription: 
      [
        "Write technical documentation and release notes to assist Product Specialists and end users understanding of the Marketer’s Studio’s application.",
        "Generate release task items to enhance our application in future development sprints.",
        "Test new enhancements before being distributed to beta and client production environments.",
        "Provide technical support and assistance to our end users and Product Specialists.",
        "Write procedures and processes to further assist in the testing & development of Marketer’s Studio."

      ]
  },
  {
    orgID: "qg",
    position: 'SharePoint Coordinator / Corp. Trainee',
    organization: 'Quad/Graphics',
    location: 'Sussex, WI',
    image: '../assets/QG_logo.jpg',
    startDate: 'Feb 2010',
    endDate: 'Jan 2013',
    jobDescription: 
      [
        "Create SharePoint processes and apps targeting specific internal business areas.",
        "Write technical documentation to assist end users to learn the SharePoint platform.",
        "Communicate with several business areas to determine their needs and understand their processes.",
        "Establish governance and best practices for Quad’s SharePoint environment."
      ]
}
]

function specificExperience(positionTitle, cardName, modalName )  {
  const results = experiences.find(experience => experience.position == positionTitle);
  let organization = results.organization;
  let orgID = results.orgID;
  let position = results.position;
  let dateSpan = `${results.startDate}  -  ${results.endDate}`;
  let location = results.location;
  let jobDescriptionDetails = results.jobDescription;
  let listJobText = "";
  let image = results.image;
  let jobDescriptionListItems = jobDescriptionDetails.forEach(listJobDescription);

  function listJobDescription(value, index, array) {
    listJobText = listJobText + "<li>" + value + "</li><br>";
  }

  console.log(listJobText);
  $("#"+cardName).append(`
  <img class="card-img-top" src="${image}" alt="${organization}" style="width: 68%; padding: 5px;">
    <div class="card-body">
      <h5 class="card-title">${position}</h5>
      <h6 class="card-subtitle mb-2">${organization}</h6>
      <h6 class="card-subtitle mb-2 text-muted">${dateSpan}</h6>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <a href="#" class="btn btn-info hvr-pop" data-toggle="modal" data-target="#Modal-${orgID}">More Info</a>
    </div>
  </div>
  `)

  $("#"+ cardName).append(`
  <div class="modal" id="Modal-${orgID}">
            <div class="modal-dialog">
              <div class="modal-content">
          
                <!-- Modal Header -->
                <div class="modal-header" id="modal-header">
                  <h4 class="modal-title" id="modal-title">${organization}</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
          
                <!-- Modal body -->
                <div class="modal-body" id="modal-body">
                <h4 class="card-subtitle mb-2 text-muted">${position}</h4>
                <h6>${dateSpan}</h6>
                <hr>
                <ul>
                  ${listJobText}
                </ul>
                </div>
          
                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
            `)
}

function organizationalRoles(organizationID, cardName) {
  const results = experiences.filter(experiences => experiences.orgID == organizationID);
  // const results = resultsFiltered.find(resultsFiltered=> resultsFiltered.position == positionTitle);
  let organization = results.organization;
  let orgID = results.orgID;
  let position = results.position;
  let dateSpan = `${results.startDate}  -  ${results.endDate}`;
  let location = results.location;
  let positionText = "";
  let image = results.image;
  // let positionDetails = positionDetailList(results.forEach);
  console.log(results);
  function positionInfo() {
    var i = 0;
    var len = results.length;
    for (; i < len;) {
    positionText += `<h4 class="card-subtitle mb-2 text-muted">${results[i].position}</h4>
                "<h6> " ${results[i].startDate} - ${results[i].endDate} "</h6>"
                "<hr>"
     "<li>" ${results[i].jobDescription} "</li><br>`;
    }
    
  }
  console.log(positionText);
  $("#"+cardName).append(`
  <img class="card-img-top" src="${results[0].image}" alt="${results[0].organization}" style="width: 68%; padding: 5px;>
    <div class="card-body">
      <h5 class="card-title">Multiple Roles</h5>
      <h6 class="card-subtitle mb-2">${results[0].organization}</h6>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <a href="#" class="btn btn-info hvr-pop" data-toggle="modal" data-target="#Modal-${results[0].orgID}">More Info</a>
    </div>
  </div>
  `)

  $("#"+ cardName).append(`
  <div class="modal" id="Modal-${results[0].orgID}">
            <div class="modal-dialog">
              <div class="modal-content">
          
                <!-- Modal Header -->
                <div class="modal-header" id="modal-header">
                  <h4 class="modal-title" id="modal-title">${results[0].organization}</h4>
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
          
                <!-- Modal body -->
                <div class="modal-body" id="modal-body">
                
                <hr>
                <ul>
                  ${positionText}
                </ul>
                </div>
          
                <!-- Modal footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
            `)
}



function setup(project1, project2, project3, project4, project5, project6) {
    document.getElementById("proj1_head").innerHTML = project1.project_name
    document.getElementById("proj1_date").innerHTML = project1.date
    document.getElementById("proj1_text").innerHTML = project1.text
    document.getElementById("proj1_atta").innerHTML = project1.attachment

    document.getElementById("proj2_head").innerHTML = project2.project_name
    document.getElementById("proj2_date").innerHTML = project2.date
    document.getElementById("proj2_text").innerHTML = project2.text
    document.getElementById("proj2_atta").innerHTML = project2.attachment

    document.getElementById("proj3_head").innerHTML = project3.project_name
    document.getElementById("proj3_date").innerHTML = project3.date
    document.getElementById("proj3_text").innerHTML = project3.text
    document.getElementById("proj3_atta").innerHTML = project3.attachment

    document.getElementById("proj4_head").innerHTML = project4.project_name
    document.getElementById("proj4_date").innerHTML = project4.date
    document.getElementById("proj4_text").innerHTML = project4.text
    document.getElementById("proj4_atta").innerHTML = project4.attachment

    document.getElementById("proj5_head").innerHTML = project5.project_name
    document.getElementById("proj5_date").innerHTML = project5.date
    document.getElementById("proj5_text").innerHTML = project5.text
    document.getElementById("proj5_atta").innerHTML = project5.attachment

    document.getElementById("proj6_head").innerHTML = project6.project_name
    document.getElementById("proj6_date").innerHTML = project6.date
    document.getElementById("proj6_text").innerHTML = project6.text
    document.getElementById("proj6_atta").innerHTML = project6.attachment
}

function getdata() {
    fetch('/persoonelijke_projecten.json')
	.then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        var project1 = data.project1
        var project2 = data.project2
        var project3 = data.project3
        var project4 = data.project4
        var project5 = data.project5
        var project6 = data.project6
        setup(project1, project2, project3, project4, project5, project6)
    }) 
}
// set all variables
getdata()
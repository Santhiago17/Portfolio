
function updateProfileInfo(profileData){
    document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const contact = document.getElementById('profile.contact')
    contact.innerText = profileData.contact
}


function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')

   softSkills.innerHTML =  profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')

   hardSkills.innerHTML =  profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}</li>`).join('')
}

function updatelanguages(profileData){
  const languages = document.getElementById('profile.languages')
  languages.innerHTML = profileData.languages.map(languages => `<li>${language} /<li>`).join('')
}


(async  () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updatelanguages(profileData)
})()


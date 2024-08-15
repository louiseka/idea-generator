const ideaBtn = document.getElementById("idea-btn")
const ideaContainer = document.getElementById("idea-container")
const generatorDesc = document.getElementById("generator-desc")

ideaBtn.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            ideaContainer.style.display = "block"
            generatorDesc.style.display = "none"
            ideaBtn.textContent = `Get another random idea`
            document.getElementById("generated-idea").textContent = data.activity
        })
})


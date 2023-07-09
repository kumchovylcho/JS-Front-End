async function lockedProfile() {
    const profilesUrl = "http://localhost:3030/jsonstore/advanced/profiles"
    const main = document.querySelector("#main")


    const response = await fetch(profilesUrl)
    const data = await response.json()

    const loadProfiles = () => {
        main.innerHTML = ""
        let counter = 0
        for (const info of Object.values(data)) {
            main.innerHTML +=  `
            <div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${counter + 1}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${counter + 1}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${counter + 1}Username" value="${info.username}" disabled readonly />
				<div id="user${counter + 1}HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${counter + 1}Email" value="${info.email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user${counter + 1}Age" value="${info.age}" disabled readonly />
				</div>
				<button>Show more</button>
			</div>
            `
            const userUsername = main.children[counter].querySelector(`div`);
            userUsername.style.display = 'none';

            const btn = document.querySelector(".profile > button")
            btn.addEventListener("click", showMoreInfo)

            counter += 1

        }
    }

    loadProfiles()

    function showMoreInfo(event) {
        const unlocked = event.target.parentNode.querySelector('input[value="unlock"]');
        const moreInfo = event.target.parentNode.querySelector('div');
        const button = event.target.parentNode.querySelector('button');

        if (unlocked.checked && button.textContent === 'Show more') {
            moreInfo.style.display = 'block';
            button.textContent = 'Hide it'
        } else if (unlocked.checked && button.textContent === 'Hide it') {
            moreInfo.style.display = 'none';
            button.textContent = 'Show more'
        }
    }

}
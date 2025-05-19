document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const navigation = document.querySelector('.navigation');
    const copyrightYear = document.getElementById('copyright-year');
    const lastModified = document.getElementById('last-modified');

    // Responsive nav toggle
    if (menuButton && navigation) {
        menuButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
        });
    }

    // Set copyright year and last modified
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }

    // Directory page: fetch and display members if container exists
    const membersContainer = document.getElementById('members-container');
    if (membersContainer) {
        const dataURL = 'data/members.json'; // Adjust path as needed

        async function getMembers() {
            try {
                const response = await fetch(dataURL);
                if (!response.ok) throw new Error('Network error');
                const data = await response.json();
                return data.members;
            } catch (e) {
                membersContainer.innerHTML = '<p class="error-message">Error loading member data.</p>';
                return [];
            }
        }

        function displayMembersGrid(members) {
            membersContainer.className = 'grid-view';
            membersContainer.innerHTML = '';
            members.forEach(member => {
                const card = document.createElement('div');
                card.className = 'member-card';
                card.innerHTML = `
                    <h3>${member.name}</h3>
                    <img src="images/${member.image}" alt="Logo for ${member.name}">
                    <p>${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                `;
                membersContainer.appendChild(card);
            });
        }

        function displayMembersList(members) {
            membersContainer.className = 'list-view';
            membersContainer.innerHTML = '';
            const list = document.createElement('ul');
            list.className = 'member-list';
            members.forEach(member => {
                const li = document.createElement('li');
                li.className = 'member-item';
                li.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>Address: ${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                `;
                list.appendChild(li);
            });
            membersContainer.appendChild(list);
        }

        // View toggle
        const gridViewButton = document.getElementById('grid-view');
        const listViewButton = document.getElementById('list-view');
        let membersData = [];

        getMembers().then(members => {
            membersData = members;
            displayMembersGrid(membersData);
        });

        if (gridViewButton) {
            gridViewButton.addEventListener('click', () => displayMembersGrid(membersData));
        }
        if (listViewButton) {
            listViewButton.addEventListener('click', () => displayMembersList(membersData));
        }
    }
});
const projects = [
	{
		name: 'profile-card-component-main befor',
		url: 'https://profile-card-component-be.herokuapp.com/',
	},
	{
		name: 'four-card-feature-section-master',
		url: 'https://four-card-feature-section-be.herokuapp.com/',
	}
];

const list = document.getElementById('list');

projects.forEach(({ name, url }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="${url}">
			<img src="/images/${name}/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>

		<div class="links-container">
			<a href="${url}" class="red">
				<i class="fas fa-eye"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}

document.addEventListener("DOMContentLoaded", function () {
	fetch("json/media.json")
		.then((response) => response.json())
		.then((data) => {
			const podcasts = data.podcasts;
			const container = document.querySelector(".container");

			// Clear existing content
			container.innerHTML = `<h1>THE CLEAN ROOM</h1>
            
            <p>The University of Georgia's Small Satellite Research Laboratory presents a podcast all about spacecraft development. Welcome to THE CLEAN ROOM!</p>
            <div class="podcast-container">
            	<iframe class="podcast-details"
				style="border-radius: 12px; margin-bottom:10px "
				src="https://open.spotify.com/embed/show/2NDHIJpmlPSIWgoZgYN0ya?utm_source=generator"
				width="100%"
				height="352"
				frameborder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"

			></iframe>
            `;

			// Add header`;

			// Loop through podcast episodes
			podcasts.forEach((podcast, index) => {
				if (index === 0) {
					// Most Recent Podcast (Big Display)
					const podcastCard = ``;
					container.innerHTML += podcastCard;
				} else {
					// Older Episodes (Small Display)
					const smallCard = `
                        <div class="small-podcast">
                            <img src="${podcast.cover}" alt="Podcast Cover" />
                            <div class="small-details">
                                <h3>${podcast.ep_name}</h3>
                                <a href="${podcast.spotifylink}" target="_blank">Listen on Spotify</a>
                            </div>
                        </div>`;
					container.innerHTML += smallCard;
				}
			});
		})
		.catch((error) => console.error("Error loading podcast data:", error));
});

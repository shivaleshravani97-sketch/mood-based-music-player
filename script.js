const moods = document.querySelectorAll(".mood");
const findMusic = document.getElementById("findMusic");

const playlistTitle = document.getElementById("playlistTitle");
const songsContainer = document.getElementById("songs");

const audioPlayer = document.getElementById("audioPlayer");
const currentSong = document.getElementById("currentSong");

let selectedMood = null;


// Music database
const music = {

    happy: [
        {
            title: "Happy Song 1",
            artist: "Your Artist",
            file: "music/happy/song1.mp3"
        },
        {
            title: "Happy Song 2",
            artist: "Your Artist",
            file: "music/happy/song2.mp3"
        }
    ],

    sad: [
        {
            title: "Sad Song 1",
            artist: "Your Artist",
            file: "music/sad/song1.mp3"
        },
        {
            title: "Sad Song 2",
            artist: "Your Artist",
            file: "music/sad/song2.mp3"
        }
    ],

    calm: [
        {
            title: "Calm Song 1",
            artist: "Your Artist",
            file: "music/calm/song1.mp3"
        },
          {
            title: "Calm Song 2",
            artist: "Your Artist",
            file: "music/calm/song2.mp3"
        }
    ],
  

    energetic: [
        {
            title: "Energy Song 1",
            artist: "Your Artist",
            file: "music/energetic/song1.mp3"
        },
        {
            title: "Energy Song 2",
            artist: "Your Artist",
            file: "music/energetic/song2.mp3"
        }
    ],

    romantic: [
        {
            title: "Romantic Song 1",
            artist: "Your Artist",
            file: "music/romantic/song1.mp3"
        },
        {
            title: "Romantic Song 2",
            artist: "Your Artist",
            file: "music/romantic/song2.mp3"
        }
    ]

};


// Select mood
moods.forEach(mood => {

    mood.addEventListener("click", () => {

        moods.forEach(item => {
            item.classList.remove("selected");
        });

        mood.classList.add("selected");

        selectedMood = mood.dataset.mood;

    });

});


// Find music
findMusic.addEventListener("click", () => {

    if (!selectedMood) {

        alert("Please choose your mood first!");

        return;
    }

    showPlaylist(selectedMood);

});


// Display playlist
function showPlaylist(mood) {

    const songs = music[mood];

    playlistTitle.textContent =
        `Music for your ${mood} mood`;

    songsContainer.innerHTML = "";

    songs.forEach((song, index) => {

        const songElement = document.createElement("div");

        songElement.className = "song";

        songElement.innerHTML = `

            <div>
                <strong>${song.title}</strong>
                <br>
                <small>${song.artist}</small>
            </div>

            <button onclick="playSong('${mood}', ${index})">
                ▶
            </button>

        `;

        songsContainer.appendChild(songElement);

    });

}


// Play song
function playSong(mood, index) {

    const song = music[mood][index];

    audioPlayer.src = song.file;

    currentSong.textContent =
        `${song.title} — ${song.artist}`;

    audioPlayer.play();

}

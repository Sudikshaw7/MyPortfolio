// EmailJS Init
emailjs.init({ publicKey: "iKcVo2WJy4phCx_hI" });

// --------------------
// SEASON LOGIC
// --------------------
function getSeasonFromDate() {
    const month = new Date().getMonth();
    if (month === 11 || month === 0 || month === 1) return 'winter';
    if (month >= 5 && month <= 7) return 'summer';
    return 'rainy';
}

const seasonData = {
    summer: { icon: '☀️', bg: 'summer-theme' },
    winter: { icon: '❄️', bg: 'winter-theme' },
    rainy: { icon: '🌧️', bg: 'rainy-theme' }
};

const seasons = ['summer', 'winter', 'rainy'];
let currentIndex = seasons.indexOf(getSeasonFromDate());

// Apply initial season
document.body.className = seasonData[seasons[currentIndex]].bg;
document.getElementById('seasonIcon').textContent =
    seasonData[seasons[currentIndex]].icon;

const effectsContainer = document.getElementById('seasonEffects');

function createSeasonEffects(season) {
    effectsContainer.innerHTML = '';

    // ❄️ WINTER
    if (season === 'winter') {
        for (let i = 0; i < 80; i++) {
            const flake = document.createElement('div');
            flake.textContent = '❄';
            flake.style.cssText = `
                position: fixed;
                font-size: ${12 + Math.random() * 14}px;
                left: ${Math.random() * 100}vw;
                top: -30px;
                opacity: ${0.4 + Math.random() * 0.4};
                pointer-events: none;
                animation: snowFall ${6 + Math.random() * 8}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                z-index: 1;
            `;
            effectsContainer.appendChild(flake);
        }
    }

    // 🌧️ RAINY
    else if (season === 'rainy') {
        for (let i = 0; i < 120; i++) {
            const drop = document.createElement('div');
            drop.style.cssText = `
                position: fixed;
                width: 2px;
                height: 40px;
                background: linear-gradient(transparent, #66f);
                left: ${Math.random() * 100}vw;
                top: -50px;
                opacity: 0.6;
                pointer-events: none;
                animation: rainFall ${0.6 + Math.random() * 0.6}s linear infinite;
                animation-delay: ${Math.random() * 3}s;
                z-index: 1;
            `;
            effectsContainer.appendChild(drop);
        }
    }

    // ☀️ SUMMER
    else if (season === 'summer') {
        const sun = document.createElement('div');
        sun.textContent = '☀️';
        sun.style.cssText = `
            position: fixed;
            font-size: 90px;
            top: 70px;
            right: 100px;
            opacity: 0.8;
            pointer-events: none;
            animation: sunRotate 40s linear infinite;
            z-index: 1;
        `;
        effectsContainer.appendChild(sun);

        for (let i = 0; i < 6; i++) {
            const cloud = document.createElement('div');
            cloud.textContent = '☁';
            cloud.style.cssText = `
                position: fixed;
                font-size: ${60 + Math.random() * 40}px;
                top: ${80 + i * 90}px;
                left: -200px;
                opacity: 0.8;
                pointer-events: none;
                animation: cloudFloat ${30 + i * 10}s linear infinite;
                animation-delay: ${i * 4}s;
                z-index: 1;
            `;
            effectsContainer.appendChild(cloud);
        }
    }
}

createSeasonEffects(seasons[currentIndex]);

// --------------------
// TOGGLE SEASON
// --------------------
document.getElementById('toggleSeason').addEventListener('click', () => {
    document.body.className = '';
    currentIndex = (currentIndex + 1) % seasons.length;

    const newSeason = seasons[currentIndex];
    document.body.classList.add(seasonData[newSeason].bg);
    document.getElementById('seasonIcon').textContent =
        seasonData[newSeason].icon;

    createSeasonEffects(newSeason);
});

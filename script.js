const tamagotchi = {
    hunger: 100,
    happiness: 100,
    energy: 100,
};

function updateStatus() {
    document.getElementById('hunger').textContent = tamagotchi.hunger;
    document.getElementById('happiness').textContent = tamagotchi.happiness;
    document.getElementById('energy').textContent = tamagotchi.energy;
}

function feed() {
    tamagotchi.hunger += 10;
    updateStatus();
}

function play() {
    tamagotchi.happiness += 10;
    tamagotchi.energy -= 5;
    updateStatus();
}

function sleep() {
    tamagotchi.energy += 20;
    tamagotchi.hunger -= 10;
    updateStatus();
}

document.getElementById('feed').addEventListener('click', feed);
document.getElementById('play').addEventListener('click', play);
document.getElementById('sleep').addEventListener('click', sleep);

updateStatus();

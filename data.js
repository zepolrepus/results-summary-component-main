const data = {
    data: [
        {
          "category": "Reaction",
          "score": 80,
          "icon": "./assets/images/icon-reaction.svg"
        },
        {
          "category": "Memory",
          "score": 92,
          "icon": "./assets/images/icon-memory.svg"
        },
        {
          "category": "Verbal",
          "score": 61,
          "icon": "./assets/images/icon-verbal.svg"
        },
        {
          "category": "Visual",
          "score": 72,
          "icon": "./assets/images/icon-visual.svg"
        }
      ]
};


data.data.map((item) => {
    let img = document.getElementById(item.category);
    img.src = item.icon;
    let value = document.getElementById(`${item.category}_value`);
    value.textContent = item.score;
});
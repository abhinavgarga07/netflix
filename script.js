const contentGrid = document.getElementById('content-grid');

const sampleContent = [
    { title: 'Movie 1', image: 'https://via.placeholder.com/200x300' },
    { title: 'TV Show 1', image: 'https://via.placeholder.com/200x300' },
    { title: 'Movie 2', image: 'https://via.placeholder.com/200x300' },
    { title: 'TV Show 2', image: 'https://via.placeholder.com/200x300' },
    { title: 'Movie 3', image: 'https://via.placeholder.com/200x300' },
    { title: 'TV Show 3', image: 'https://via.placeholder.com/200x300' },
];

function createContentItem(item) {
    const div = document.createElement('div');
    div.className = 'content-item';

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;

    const h3 = document.createElement('h3');
    h3.textContent = item.title;

    div.appendChild(img);
    div.appendChild(h3);

    return div;
}

sampleContent.forEach(item => {
    contentGrid.appendChild(createContentItem(item));
});
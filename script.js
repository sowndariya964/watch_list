document.addEventListener('DOMContentLoaded', () => {
  const dataList = document.getElementById('data-list');
  const watchlist = document.getElementById('watchlist');
  let dataPoints = [];
  let watchlistItems = [];

  function generateRandomData() {
      dataPoints = Array.from({ length: 10 }, (_, i) => ({
          id: i,
          value: (Math.random() * 100).toFixed(2),
      }));
      renderDataList();
  }

  function renderDataList() {
      dataList.innerHTML = '';
      dataPoints.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `Data Point ${item.id}: ${item.value}`;
          const addButton = document.createElement('button');
          addButton.textContent = 'Add to Watchlist';
          addButton.addEventListener('click', () => addToWatchlist(item));
          li.appendChild(addButton);
          dataList.appendChild(li);
      });
  }

  function addToWatchlist(item) {
      if (!watchlistItems.some(watchItem => watchItem.id === item.id)) {
          watchlistItems.push(item);
          renderWatchlist();
      }
  }

  function removeFromWatchlist(itemId) {
      watchlistItems = watchlistItems.filter(item => item.id !== itemId);
      renderWatchlist();
  }

  function renderWatchlist() {
      watchlist.innerHTML = '';
      watchlistItems.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `Data Point ${item.id}: ${item.value}`;
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Remove';
          removeButton.addEventListener('click', () => removeFromWatchlist(item.id));
          li.appendChild(removeButton);
          watchlist.appendChild(li);
      });
  }

  generateRandomData();
});


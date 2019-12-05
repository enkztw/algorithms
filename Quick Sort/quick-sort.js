const whenStatsAreLoaded = fetch(`https://es.dump.academy/text-quest/stats/demo`);

whenStatsAreLoaded
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return [];
      }
      throw new Error(`Неизвестный статус: ${response.status} ${response.statusText}`);
    })
    .then((data) => console.log(data.reverse()))
    .catch((err) => console.error(err));

    console.log(whenStatsAreLoaded);

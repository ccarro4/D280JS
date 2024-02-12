const allPaths = document.querySelectorAll('path');
const info = document.querySelector('.info');

allPaths.forEach((path) => {
  path.addEventListener('click', ()=> {
    getData(path.id);
  })
  path.addEventListener('mouseenter', ()=> {
    path.style.fill = '#657b83';
  })
  path.addEventListener('mouseout', ()=> {
    path.style.fill = '#000D18';
  })
});

const getData = async (id) => {
  const response = await fetch(`http://api.worldbank.org/v2/country/${id}?format=json`);
  const data = await response.json();
  const filteredData = data[1][0];
  info.innerHTML = `
  <h1>Country Information</h1>
  <p>Name: ${filteredData.name}</p>
  <p>Capital: ${filteredData.capitalCity}</p>
  <p>Region: ${filteredData.region.value}</p>
  <p>Income Level: ${filteredData.incomeLevel.value}</p>
  <p>Longitude: ${filteredData.longitude}</p>
  <p>Latitude: ${filteredData.latitude}</p>
  `
}
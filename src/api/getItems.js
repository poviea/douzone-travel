export const fetchData = async() => {
    const response = await fetch('https://4ortress.github.io/miniProject_5/db/mock_final.json');
    const data = response.json();

    return data;
}
const button = document.getElementById('button');
const content = document.getElementById('laptop')

button.addEventListener('click', async function () {
    let url = 'https://63d304794abff88834170d21.mockapi.io/ss'

    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(response.status)
        }

        const data = await response.json()

        data.map((item) => {
            const block = document.createElement('div')
            block.innerHTML = `<div>${item.name}</div>` + `<img src="${item.avatar}" />` + `<div>${item.age}</div>` + `<div>${item.adress}</div>` + `<div>${item.id}</div>` + `<div>${item.desprition}</div>`

            content.appendChild(block)
        })
        console.log(data);
    } catch (error) {
        console.error(error);
    }
})




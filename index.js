document.addEventListener('DOMContentLoaded', () => {
    const textoInput = document.getElementById('texto');
    const traducirBtn = document.getElementById('traducirBtn');

    traducirBtn.addEventListener('click', async () => {
        const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'b46a0e4d55mshca3171d7e5c8cdbp113f01jsn899b0be4fbd7',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: new URLSearchParams({
                q: textoInput.value,
                target: 'en',
                source: 'es'
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
            // Aquí puedes manipular el resultado de la traducción
        } catch (error) {
            console.error(error);
        }
    });
});

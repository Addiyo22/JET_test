const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');


app.use(express.static(`${__dirname}/public`))

app.set('views', __dirname + '/views');
app.set('view engine','hbs');

app.get('/',(req, res)=> {
    axios.get('https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/TW197LT')
    .then((response)=>{
        const restaurant = response.data.restaurants.slice(0,10).map(i => {
            return {
                name: i.name,
                address: i.address,
                rating: i.rating,
                cuisines: i.cuisines.map(k => k.name).join(', ')
            }
        });
        res.render('index', {restaurant});
    })
});

app.listen(port, () => console.log(`app running on port ${port}`));
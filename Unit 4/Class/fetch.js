// for require we have to use npm install node-fetch@2
import fetch from 'node-fetch';
fetch('https://google.com')
    .then(res => res.text())
    .then(body => console.log(body));

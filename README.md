<h1 align="center">Yet another React Weather app</h1>
<p align="center">Any location on Earth. Any device.</p>
<p align="center">One app.</p>
<p align="center">
  <a href="#intro">Learn more ></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://noel-noel.me/react-weather">Try now ></a>
</p>
![desktop version](https://cloud.githubusercontent.com/assets/21953550/18322936/e23a6312-753d-11e6-9c2d-95ca1185d653.png)

<p id="intro"><b>YARWA</b> (pronounced *yarrr-wa*) is a simple weather app built as a test assignment for <a href="https://www.proekspert.ee/"><b>Proekspert</b></a>. Featuring clean and simple design it provides a way to check weather for any place on Earth with minimum user involvement. Once you open the page you don't have to do anything: YARWA gets your location via HTML5 <b>Geolocation API</b> - or, if it is not available, falls back to <a href="http://ipinfo.io/"><b>ipinfo</b></a> - and shows you current weather from <a href="http://openweathermap.org/"><b>OpenWeatherMap</b></a>. </p>
<br><br>
<img src="https://cloud.githubusercontent.com/assets/21953550/18325338/83000800-7549-11e6-88f8-007f2782ee27.png" width="60%" align="right">
<p><br><br>Of course, you are not restricted to just one place: feel free to add more locations. Intelligent <a href="https://developers.google.com/maps/documentation/javascript/places-autocomplete"><b>Google places autocomplete</b></a> will make this process easy as never before. And don't worry about adding them back again next time: app will save the state to <b>localStorage</b> and restore everything for you when you come back.</p>
<br><br><br><br>
For all the tech geeks out there: YARWA is packed with all kinds of stuff. It's written in ES2015, using **[Babel](https://babeljs.io/)** and **[babel-polyfill](http://babeljs.io/docs/usage/polyfill/)** to compile it to well-supported ES5. Styles are written accordingly to **[BEM](http://getbem.com/)** guidelines in **[Sass](http://sass-lang.com/)** and **[Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)**. Everything is compiled, bundled, and served to browser in real-time with **[Gulp](http://gulpjs.com/)** with help of **[Browserify](http://browserify.org/)** and **[watchify](https://github.com/substack/watchify)**.
<br><br><br><br>
<img src="https://cloud.githubusercontent.com/assets/21953550/18323983/cea04ff6-7542-11e6-883e-6d2c28fb6150.png" width="70%" align="left">
<p align="right"><br>As a finishing touch, app's <b>responsive design</b> works great on any device of any size providing a smooth user experience. </p>
<br><br><br><br><br><br><br><br><br>

<h2 align="center">Try it out now:</h2>
### Install:
- `git clone git@github.com:noel-noel/react-weather.git`
- `cd /react-weather`
- `npm install`
- `npm start`

### Try online:
**[react-weather](http://noel-noel.me/react-weather)**

<br><br>
<p align="right">xoxo <br>
angie
</p>

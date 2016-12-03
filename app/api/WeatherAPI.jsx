var axios = require('axios');
const OPEN_WEATHER_MAP_URL="http://api.openweathermap.org/data/2.5/weather?appid=97b297b304a7f8df17e10b3f2c538a37&units=metric";

module.exports={
  getTemp:function(location){
      var encodeLocation = encodeURIComponent(location);
      var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;
      return axios.get(requestUrl).then(function(res){
          if(res.data.cod && res.data.message){
              throw new Error(res.data.message);
          }else{
            return res.data.main.temp;
          }

      },function(res){
        debugger;
          throw new Error(res.message)
      });
  }
}

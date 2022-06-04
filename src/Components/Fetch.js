import { useEffect, useState } from "react";

function Fetch({ result }) {
  const [obj, setObj] = useState();
  var tarih = new Date();
  var gunler = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var gunlersayi = [];
  var i = tarih.getDay();
  var counter = 0;
  for (i; i < 7; i++) {
    gunlersayi[counter] = i;

    counter++;

    if (i == 6) {
      i = -1;
    }
    if (counter == 7) break;
  }
  useEffect(async () => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${result.latitude}&lon=${result.longitude}&appid=92ac4c4cde9401b43a5dc6a529ab57c6`
    );
    const res = await data.json();
    var datas = res.list.map((list, index) => ({
      highesttemp: parseInt(list.main.temp_max - 272.15),
      lowesttemp: parseInt(list.main.temp_min - 272.15),
      gun: gunler[gunlersayi[index]],
      weather: list.weather[0].main,
      icon: list.weather[0].icon,
    }));
    setObj(datas);
  }, [result]);
  return (
    <div className="container">
      <div className="row ">
        {obj &&
          obj.map(
            (data, index) =>
              index < 7 && (
                <div
                  key={index}
                  className={`card ${index === 0 ? "today" : ""
                    } col-sm-auto col-md-auto`}
                >
                  <img
                    src={`https://openweathermap.org/img/wn/${data.icon}.png`}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "50px", margin: "0 auto" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title"> {data.gun}</h5>
                    <p className="card-text">{data.weather}</p>
                    <p className="card-text-cel">
                      Max: {data.highesttemp}°<br /> Min: {data.lowesttemp}°
                    </p>
                  </div>
                </div>
              )
          )}
        <span>Mehmet Akif Kömürcü - 2022</span>
      </div>
    </div>
  );
}

export default Fetch;

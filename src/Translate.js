import "./TranslateStyle.css";
import leftRight from "./imgs/leftRight.png";
import { useEffect, useState } from "react";
import axios from "axios";
import lang from "./LanguageList";
function Translate() {
  const [language, setLanguage] = useState("en");
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  useEffect(() => {
    console.log(language);
    console.log(text);
  }, [language, text]);
  useEffect(() => {
    if (text.length > 1) {
      const encodedParams = new URLSearchParams();
      encodedParams.append("q", text);
      encodedParams.append("target", "ar");
      encodedParams.append("source", language);

      const options = {
        method: "POST",
        url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "Accept-Encoding": "application/gzip",
          "X-RapidAPI-Key":
            "08647714c9msh4e8f75714275443p1a8d16jsn14a900fb6f7d",
          "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        },
        data: encodedParams,
      };

      axios
        .request(options)
        .then(function (response) {
          setTranslatedText(response.data.data.translations[0].translatedText);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [text]);
  let langList = lang.map((value) => {
    return (
      <option value={Object.keys(value)[0]}>{Object.values(value)[0]}</option>
    );
  });
  return (
    <div id="Translate">
      <div className="Container">
        <select
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
          className="selectLang"
        >
          {langList}
        </select>

        <div className="textAreaDiv">
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <img className="leftRight" src={leftRight} alt="" />
          <textarea
            value={translatedText}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Translate;

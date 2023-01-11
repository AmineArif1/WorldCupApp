import "./TranslateStyle.css";
import leftRight from "./imgs/leftRight.png";
import { useEffect, useState } from "react";
import axios from "axios";
import lang from "./LanguageList";
import { Circles } from "react-loader-spinner";
import { useParams } from "react-router";
import Loop from "./Loop";
function Translate(props) {
  const [language, setLanguage] = useState("auto");
  const [translatedText, setTranslatedText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const { preTranslate } = useParams();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.length > 1) {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", searchTerm);
        encodedParams.append("target", "ar");
        encodedParams.append("source", language);

        const options = {
          method: "POST",
          url: " http://127.0.0.1:5000/translate",
          headers: {},
          data: encodedParams,
        };
        setLoading(true);
        axios
          .request(options)
          .then(function (response) {
            console.log(response.data.translatedText);
            setLoading(false);
            setTranslatedText(response.data.translatedText);
          })
          .catch(function (error) {
            console.error(error);
          });
      }
      console.log(searchTerm);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  useEffect(() => {
    console.log(language);
    console.log(searchTerm);
  }, [language, searchTerm]);
  useEffect(() => {
    if (preTranslate) {
      setSearchTerm(preTranslate);
    }
  }, []);
  useEffect(() => {}, [searchTerm]);
  let langList = lang.map((value) => {
    return (
      <option value={Object.keys(value)[0]}>{Object.values(value)[0]}</option>
    );
  });

  return (
    <>
      <Loop sideBar={props.sideBar} setSideBar={props.setSideBar} />
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
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            {loading ? (
              <Circles
                className="leftRight"
                height="80"
                width="80"
                color="#560617"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <img className="leftRight" src={leftRight} alt="" />
            )}
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
    </>
  );
}

export default Translate;

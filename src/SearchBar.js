import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useSearchParams,Link, useNavigate } from 'react-router';
import jsonp from "jsonp";
import { SEARCH_SUGGESTION_API } from "../constants.js";
import { addWords } from "../Redux Store/SearchSlice.js";


const SearchBar = ({device}) => {
    
  const SearchCache2 = useSelector(store => store.search);
  const [suggestionData, setSuggestionData] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
      const darkmode = useSelector((store) => {
        return store.colorMode.darkMode;
      });
    
    function handleBlur() {
        setTimeout(() => {
          setShowSuggestion(false);
        }, 300);
    }
    
     function getSuggestion() {
       jsonp(SEARCH_SUGGESTION_API + searchText, null, (err, data) => {
         if (err) {
           console.error("Error:", err);
         } else {
           console.log(data[1]);
           setSuggestionData(data[1]);
           dispatch(
             addWords({
               [searchText]: data[1],
             })
           );
           //  data[1].map((item, index) => { console.log(item[0]); })
         }
       });
     }

    
      function handleSuggestionClick(t) {
        setSearchText(t);
        setShowSuggestion(false);
        navigate("/search?k=" + t);
      }
    
      useEffect(() => {
        if (searchParams.get("k") !== null) {
          setSearchText(searchParams.get("k"));
        }
      }, [searchParams]);

    
  useEffect(() => {
    const timer = setTimeout(() => {
      if (SearchCache2[searchText]) {
        setSuggestionData(SearchCache2[searchText]);
      } else {
        getSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
    
    
  return (
    <div
      className={
        (device == "mobile" ? "w-full " : "w-6/12") +
        " flex-col items-center justify-center"
      }
    >
      <div
        className={
          (darkmode ? " bg-gray-700 " : " bg-white ") +
          (device == "mobile"
            ? " w-full py-2 border-b-2 border-gray-400/60 "
            : " ") +
          " justify-center flex w-[500px]"
        }
      >
        <input
          type="text"
          className={`border-gray-300  rounded-l-full outline-0 px-6 w-10/12 md:w-full h-11 border-1 ${
            darkmode ? "bg-gray-700 border-gray-500 text-white" : "bg-gray-100"
          }`}
          placeholder="Type to Search"
          value={searchText}
          onFocus={() => {
            setShowSuggestion(true);
          }}
          onBlur={handleBlur}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <Link to={"/search?k=" + searchText}>
          <button
            className={`border-gray-400 rounded-r-full cursor-pointer h-11 px-3 ${
              darkmode
                ? "bg-gray-700 border-2 border-gray-500 text-white"
                : "bg-gray-100"
            }`}
          >
            🔍
          </button>
        </Link>
      </div>

      {searchText && showSuggestion && (
        <div
          className={
            (device == "mobile" ? "" : "ml-20") +
            "flex w-full z-50 px-4 mt-1 justify-center"
          }
        >
          <ul
            className={`fixed z-50 w-[440px] rounded-lg ${
              darkmode ? "bg-gray-700  text-white" : "bg-gray-100 text-black"
            }`}
          >
            {suggestionData.map((item, index) => {
              if (index >= 10) return;
              return (
                <li
                  onClick={() => {
                    handleSuggestionClick(item[0]);
                  }}
                  key={item[0]}
                  className={`py-3 px-4 ${
                    device == "mobile" && " mx-4 "
                  } rounded-lg border-b-gray-200 hover:bg-gray-200 cursor-default border-b-2 ${
                    darkmode && " hover:bg-gray-200 hover:text-black"
                  }`}
                >
                  🔍 {item[0]}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
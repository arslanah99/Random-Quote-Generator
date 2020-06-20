import { tsvParse } from "d3-dsv";
import { timeParse } from "d3-time-format";

const parseData = (parse) => {
  return function (data) {
    data.date = parse(data.date);
    data.open = +data.open;
    data.high = +data.high;
    data.low = +data.low;
    data.close = +data.close;
    data.volume = +data.volume;

    return data;
  };
};

const parseDate = timeParse("%Y-%m-%d");

export const getData = async () => {
  const promiseMSFT = fetch(
    "https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv"
  )
    .then((response) => response.text())
    .then((data) => tsvParse(data, parseData(parseDate)));
  return promiseMSFT;
};

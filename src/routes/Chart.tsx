import { useQuery } from "react-query";
import { fetchCoinHistoty } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
interface Chartprops {
  coinId: string;
}
interface IHistorycal {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
function Chart({ coinId }: Chartprops) {
  const { isLoading, data } = useQuery<IHistorycal[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistoty(coinId),
    { refetchInterval: 100000 }
  );
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <div>
      {isLoading ? (
        "loading..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "candle",
              data: data?.map((price) => ({
                x: price.time_close.slice(8, 10),
                y: [
                  price.open.toFixed(2),
                  price.high.toFixed(2),
                  price.low.toFixed(2),
                  price.close.toFixed(2),
                ],
              })),
            },
          ]}
          options={{
            theme: { mode: isDark ? "dark" : "light" },
            yaxis: { show: false },
            xaxis: {
              type: "category",
              categories: data?.map((price) => price.time_close),
            },
            chart: {
              type: "candlestick",
              height: 350,
              toolbar: { show: false },
              background: "transparent",
            },
          }}
          // type="line"
          // series={[
          //   {
          //     name: "sales",
          //     data: data?.map((price) => price.close),
          //   },
          // ]}
          // options={{
          //   xaxis: {
          //     type: "datetime",
          //     categories: data?.map((price) => price.time_close),
          //   },
          //   yaxis: { show: false },
          //   theme: { mode: "dark" },
          // chart: {
          //   height: 500,
          //   width: 500,
          //   toolbar: { show: false },
          //   background: "transparent",
          // },
          //   grid: { show: false },
          //   stroke: { curve: "smooth", width: 3 },
          //   fill: {
          //     type: "gradient",
          //     gradient: { gradientToColors: ["blue"], stops: [0, 100] },
          //   },
          //   colors: ["red"],
          //   tooltip: {
          //     y: {
          //       formatter: (value) => `$${value.toFixed(2)}`,
          //     },
          //   },
          // }}
        />
      )}
    </div>
  );
}
export default Chart;

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "./atoms";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Coinlist = styled.ul``;
const Coin = styled.li`
  background-color: ${(props) => props.theme.cardbgColor};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
    padding: 20px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.div`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loading = styled.div`
  text-align: center;
  display: block;
`;
const Benner = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
const ToggleBtn = styled.button`
  position: absolute;
  left: 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.cardbgColor};
  color: ${(props) => props.theme.textColor};
  border: none;
  width: 45px;
  height: 30px;
  transition: color 0.2s ease-in;
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
function Coins() {
  const { isLoading, data } = useQuery<CoinInterface[]>("allcoins", fetchCoins);
  const isDark = useSetRecoilState(isDarkAtom);
  const setToggle = () => isDark((prev) => !prev);
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     setLoading(false);
  //     console.log(coins);
  //   })();
  // }, []);

  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <ToggleBtn onClick={setToggle}>mode</ToggleBtn>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loading>loading...</Loading>
      ) : (
        <Coinlist>
          {data?.slice(0, 100).map((coins) => (
            <Coin key={coins.id}>
              <Link to={`/${coins.id}`} state={{ name: coins.name }}>
                <Benner
                  src={`https://cryptoicon-api.vercel.app/api/icon/${coins.symbol.toLowerCase()}`}
                />
                {coins.name} &rarr;
              </Link>
            </Coin>
          ))}
        </Coinlist>
      )}
    </Container>
  );
}
export default Coins;

import MarketList from "../../src/components/units/markets/list/marketList.container";

export default function MarketListPage() {
  // const [todaysItems, setTodaysItems] = useState([]);

  // useEffect(() => {
  //   const todays = JSON.parse(sessionStorage.getItem("todays") || "[]");
  //   setTodaysItems(todays);
  //   sessionStorage.getItem("todays");
  // }, []);

  return <MarketList></MarketList>;
}

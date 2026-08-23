import IndustryPageTemplate from "../../components/industries/IndustryPageTemplate";
import { getIndustry } from "../../data/industries";

export default function Restaurants() {
  return <IndustryPageTemplate industry={getIndustry("restaurants")} />;
}

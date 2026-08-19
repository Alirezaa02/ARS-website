import IndustryPageTemplate from "../../components/industries/IndustryPageTemplate";
import { getIndustry } from "../../data/industries";

export default function Construction() {
  return <IndustryPageTemplate industry={getIndustry("construction")} />;
}

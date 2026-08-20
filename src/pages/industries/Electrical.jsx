import IndustryPageTemplate from "../../components/industries/IndustryPageTemplate";
import { getIndustry } from "../../data/industries";

export default function Electrical() {
  return <IndustryPageTemplate industry={getIndustry("electrical")} />;
}

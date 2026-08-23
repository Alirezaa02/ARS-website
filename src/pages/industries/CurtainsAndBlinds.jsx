import IndustryPageTemplate from "../../components/industries/IndustryPageTemplate";
import { getIndustry } from "../../data/industries";

export default function CurtainsAndBlinds() {
  return <IndustryPageTemplate industry={getIndustry("curtains-and-blinds")} />;
}

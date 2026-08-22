import IndustryPageTemplate from "../../components/industries/IndustryPageTemplate";
import { getIndustry } from "../../data/industries";

export default function AirConditioning() {
  return <IndustryPageTemplate industry={getIndustry("air-conditioning")} />;
}

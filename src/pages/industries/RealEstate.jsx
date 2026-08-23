import IndustryPageTemplate from "../../components/industries/IndustryPageTemplate";
import { getIndustry } from "../../data/industries";

export default function RealEstate() {
  return <IndustryPageTemplate industry={getIndustry("real-estate")} />;
}

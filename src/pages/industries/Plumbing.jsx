import IndustryPageTemplate from "../../components/industries/IndustryPageTemplate";
import { getIndustry } from "../../data/industries";

export default function Plumbing() {
  return <IndustryPageTemplate industry={getIndustry("plumbing")} />;
}

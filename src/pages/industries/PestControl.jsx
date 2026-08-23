import IndustryPageTemplate from "../../components/industries/IndustryPageTemplate";
import { getIndustry } from "../../data/industries";

export default function PestControl() {
  return <IndustryPageTemplate industry={getIndustry("pest-control")} />;
}

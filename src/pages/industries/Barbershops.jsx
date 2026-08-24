import IndustryPageTemplate from "../../components/industries/IndustryPageTemplate";
import { getIndustry } from "../../data/industries";

export default function Barbershops() {
  return <IndustryPageTemplate industry={getIndustry("barbershops")} />;
}

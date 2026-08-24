import IndustryPageTemplate from "../../components/industries/IndustryPageTemplate";
import { getIndustry } from "../../data/industries";

export default function PartsSuppliers() {
  return <IndustryPageTemplate industry={getIndustry("parts-suppliers")} />;
}

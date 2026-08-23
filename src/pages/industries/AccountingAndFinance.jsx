import IndustryPageTemplate from "../../components/industries/IndustryPageTemplate";
import { getIndustry } from "../../data/industries";

export default function AccountingAndFinance() {
  return <IndustryPageTemplate industry={getIndustry("accounting-and-finance")} />;
}

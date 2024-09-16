import headerImg from "../assets/investment-calculator-logo.png";

//Header
export default function Header() {
  return (
    <header id="header">
      <img src={headerImg} alt="Investment Calculator Logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

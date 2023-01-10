import Logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header>
      <img src={Logo} className="logo" alt="logo" /> My travel journal
    </header>
  );
}

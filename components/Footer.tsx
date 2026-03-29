import FooterClient from "./FooterClient";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <FooterClient year={currentYear} />
    </footer>
  );
};

export default Footer;

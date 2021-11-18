import "../Css/footer.css";
function Header() {
  const listMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = listMonth[new Date().getMonth()];
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Created by Ilyas Boukhechem | {month + " " + year} </p>
    </footer>
  );
}
export default Header;

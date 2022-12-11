const Footer = () => {

  // get current year
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer>
      <p>Copyright &copy; {year} User List</p>
    </footer>
  )

}
export default Footer
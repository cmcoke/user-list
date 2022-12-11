const Footer = () => {

  // get current year
  const d = new Date();
  let year = d.getFullYear();


  return (
    <div>
      <p>Copyright &copy; {year} User List</p>
    </div>
  )
}
export default Footer
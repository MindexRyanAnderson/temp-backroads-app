const SocialLink = ({href, icon, linkClass}) => {
  return (
    <li>
      <a href={href} target="" className={linkClass}
        ><i className={icon}></i></a>
    </li>
  )
}

export default SocialLink
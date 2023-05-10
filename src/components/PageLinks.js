import { pageLinks } from "../data";
import PageLink from "./PageLink";
const PageLinks = ({parentClass, itemClass}) => {
  
  return (
    <ul className={parentClass} id={parentClass}>
    {pageLinks.map((link) => {
      return (
        <PageLink key={link.id} id={link.id} href={link.href} itemClass={itemClass} text={link.text}/>
      )
    })}
  </ul>
  )
}

export default PageLinks
import { ReactComponent as HtmlIcon } from '../../assets/icons/html.svg'
import { ReactComponent as CssIcon } from '../../assets/icons/css.svg'
import { ReactComponent as JsIcon } from '../../assets/icons/js.svg'
import { ReactComponent as ReactIcon } from '../../assets/icons/reactjs.svg'
import { ReactComponent as NextIcon } from '../../assets/icons/next.svg'
import { ReactComponent as PythonIcon } from '../../assets/icons/python.svg'
import { ReactComponent as TypescriptIcon } from '../../assets/icons/typescript-plain.svg'
import LangExperiencesIcon from "./LangExperiencesIcon";
import { Icon } from '@mui/material'



const LangExperiencesList = () => {
    
    const icons = [
        HtmlIcon,
        CssIcon,
        JsIcon,
        ReactIcon,
        NextIcon,
        PythonIcon,
        TypescriptIcon,
    ]

    return (
        <div>
            {icons.map(function(icon) {
                return <LangExperiencesIcon icon={<Icon size="30" />}/>
            })}
        </div>
    )
}

export default LangExperiencesList;
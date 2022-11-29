import { Links } from "../../components/commom/links/Links";
import { NavSuperior } from "../../components/commom/navSuperior/NavSuperior";
import { TimeLine } from "../../components/commom/timeLine/TimeLine";

export function Feed() {
    return(
        <div>
            <Links></Links>
            <NavSuperior></NavSuperior>
            <TimeLine></TimeLine>
        </div>
    )
}
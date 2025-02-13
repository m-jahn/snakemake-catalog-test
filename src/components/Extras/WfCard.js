import Link from "@docusaurus/Link";
import GhLink from "@site/src/components/Extras/GhLink";
import Card from "@site/src/components/Card";
import CardBody from "@site/src/components/Card/CardBody";
import CardFooter from "@site/src/components/Card/CardFooter";
import CardHeader from "@site/src/components/Card/CardHeader";

export default function WfCard({
  children,
  description,
  update,
  url_avatar = GhLink(children.split("/")[0], "https://avatars.githubusercontent.com/", ""),
  url_mdpage = GhLink(children.replace("/", "%20"), "/docs/workflows/all_workflows/", ""),
  url_repo = GhLink(children, "https://github.com/", "")
}) {
  return (
    <Card shadow="tl">
      <CardHeader style={{ color: "#FFFFFF", backgroundColor: "#349299" }}>
        <div className="avatar avatar--vertical">
          <img className="avatar__photo avatar__photo--xl" src={url_avatar} />
          <div className="avatar__intro">
            <div className="avatar__name">{children}</div>
            <small className="avatar__subtitle">last update: {update}</small>
          </div>
        </div>
      </CardHeader>
      <CardBody repo={children}>
        <div>{description}</div>
      </CardBody>
      <CardFooter>
        <div className="button-group button-group--block">
          <Link className="button button--secondary" to={url_mdpage}>
            workflow page
          </Link>
          <Link
            className="button button--secondary"
            to={url_repo}
          >
            github
          </Link>
        </div>
      </CardFooter>
    </Card>    
  );
}

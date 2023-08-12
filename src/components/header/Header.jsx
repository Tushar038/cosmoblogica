import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div id="overlay"></div>
      <div className="headerTitles">
        <span className="headerTitleLg">CosmoBlogica </span>
        <span className="headerTitleSm">"Embark on a journey through the boundless universe of ideas, inspiration, and exploration. CosmoBlogica is your portal to a constellation of captivating blogs that traverse the cosmos of knowledge and imagination."</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
    </div>
  );
}
